function create(HTMLelement, first, parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) {
        if (first) parent.prepend(element)
        else parent.append(element)
    }
    else {
        parent = document.body
        if (first) parent.prepend(element)
        else parent.append(element)
    }
    if (classes) {
        element.className = classes
    }
    if (id) {
        element.id = id
    }
    return element
}

function init() {
    const listParent = create('div', false, null, null, 'students_list')

    let form = document.querySelector('#contact_form')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let data = getData(form)

        let item = create('div', true, listParent, 'student_item')
        let text = create('div', true, item, 'student_item')
        text.textContent = data.printHidden

        createTemp(listParent, `Student created: ${data.name}`, `color: green`)

        // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
        // show data button
        // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
        let showButton = create('button', false, item, null, 'show_button')
        let hidden = true
        showButton.textContent = 'Show hidden data'
        showButton.addEventListener('click', function () {
            if (!hidden) {
                hidden = true
                text.textContent = data.printHidden
                showButton.textContent = 'Show hidden data'
            }
            else {
                hidden = false
                text.textContent = data.print
                showButton.textContent = 'Hide shown data'
            }
        })

        // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<
        // Delete button
        // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<
        let deleteButton = create('button', false, item, null, 'show_button')
        deleteButton.textContent = 'delete'
        deleteButton.addEventListener('click', function () {
            item.remove()
            createTemp(listParent, `Student deleted: ${data.name} ${data.surname} . `, `color: red`)
        })
    })

    update()
}
init()

function createTemp(parent, textContent, style, seconds = 5) {
    let tempSpan = create('span', true, parent)
    tempSpan.textContent = textContent
    tempSpan.style = style
    setTimeout(function () {
        tempSpan.remove()
    }, seconds * 1000)
}

function update() {
    let output = document.querySelector('#output_skill')
    let slider = document.querySelector('#contact_skill')
    output.textContent = slider.value

    slider.addEventListener('change', function () {
        output.textContent = slider.value
    })
}

function getData(form) {
    let name = form.name.value
    let surname = form.surname.value
    let age = form.age.value
    let phone = form.phone.value
    let email = form.email.value
    let skill = form.skill.value
    //---
    let group = form.group.value
    // let count_radio = form.querySelectorAll('fieldset div [type="radio"]').length
    // console.log(count_radio)
    // for (let i = 1; i <= count_radio; i++) {
    //     if (document.querySelector(`#radio_${i}`).checked) {
    //         group = document.querySelector(`#radio_${i}`).value
    //     }
    // }
    //---
    let language = []
    let count_checkbox = form.querySelectorAll('fieldset div [type="checkbox"]').length
    console.log(count_checkbox)
    for (let i = 1; i <= count_checkbox; i++) {
        if (document.querySelector(`#language_${i}`).checked) {
            language.push(document.querySelector(`#language_${i}`).value)
        }
    }
    if (language.length == 0) language = 'none'
    else language = language.join(', ')//temporary solution until needed for more subtile display 
    //---
    return {
        name,
        surname,
        age,
        phone,
        email,
        skill,
        group,
        language,
        print: `
        Name: ${name}, Surname: ${surname}, Age: ${age},
        Phone: ${phone}, Email: ${email}, Skill: ${skill},
        Group: ${group}, Language: ${language}.
        `,
        printHidden: `
        Name: ${name}, Surname: ${surname}, Age: ${age},
        Phone: ${hide(phone.length)}, Email: ${hide(email.length)}, Skill: ${skill},
        Group: ${group}, Language: ${language}.
        `,
    }
}

function hide(length) {
    return '*'.repeat(length)
}