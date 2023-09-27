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

function localStorageSaveForm(form) {
    form.addEventListener('change', function (event) {
        // localStorage.setItem('data',JSON.stringify(getData(form)))
        let trigger = event.target.name
        // console.log(trigger)

        let language
        language = form.querySelectorAll('fieldset div input[type="checkbox"]:checked')
        language = [...language]
        language = language.map(function (item) {
            return item.value
        })

        localStorage.setItem('data', JSON.stringify({
            name: form.name.value,
            surname: form.surname.value,
            age: form.age.value,
            phone: form.phone.value,
            email: form.email.value,
            skill: form.skill.value,
            group: form.group.value,
            language: language,
        }))
    })
}

function localStorageLoadForm(form) {
    let save = JSON.parse(localStorage.getItem('data'))
    if (save != null) {
        form.name.value = save.name
        form.surname.value = save.surname
        form.age.value = save.age
        form.phone.value = save.phone
        form.email.value = save.email
        form.skill.value = save.skill
        form.group.value = save.group

        if (save.language) {

            let languageNode = form.querySelectorAll('fieldset div input[type="checkbox"]')
            let languageArr = [...languageNode]

            languageArr.forEach(function (itemA, i) {
                save.language.forEach(function (itemB) {
                    if (itemA.value == itemB) {
                        languageNode[i].checked = true
                    }
                })
            })
        }
    }
}

//store student
function localStorageStudentInit() {
    if (localStorage.getItem('student_data') == null) {
        localStorage.setItem('student_data', JSON.stringify([
            ['gror', 'rrrffg', 5, 5555, 'yee@', 2, 'group_1', ['Js', 'Ph']],
            ['bria', 'rrrrrffg', 6, 55544, 'yeee@', 3, 'group_2', ['Js', 'Pika']],
            ['shillA', 'rrffffg', 7, 551115, 'yeeee@', 4, 'group_3', ['Js', 'C#']],
            ['unoitr', 'rffffffffg', 8, 55145655, 'yeeeee@', 5, 'group_2', []],
            ['vivvals', 'rffggggg', 20, 500055, 'yeeeeeee@', 6, 'group_1', ['Pika']],
        ]))
    }
}

function localStorageStudentLoad() {
    return JSON.parse(localStorage.getItem('student_data'))
}

function localStorageStudentSave(student_data_array) {
    localStorage.setItem('student_data', JSON.stringify(student_data_array))
}

function localStorageStudentAdd(data, student_data_array) {
    // let student_data = JSON.parse(localStorage.getItem('student_data'))
    student_data_array.push([data.name, data.surname, data.age, data.phone, data.email, data.group, data.language])
}

function localStorageStudentDelete(data) {
    let array = [data.name, data.surname]
    let student_data_array = localStorageStudentLoad()
    student_data_array.forEach(function (item, i) {
        if (item[0] == array[0] && item[1] == array[1]) {
            // console.log('array splice')
            
            student_data_array.splice(i, 1)
        }
    })
    localStorageStudentSave(student_data_array)
}

console.log(localStorage)
function init() {
    const listParent = create('div', false, null, null, 'students_list')

    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-
    // pre_Init
    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-
    localStorageStudentInit()

    let student_data_array = localStorageStudentLoad()
    student_data_array.forEach(function (item) {
        createStudent(preGenerate(item), listParent)
    })

    // createStudent(preGenerate(['gror', 'rrrffg', 5, 5555, 'yee@', 2, 'group_1', ['Js', 'Ph']]), listParent)
    // createStudent(preGenerate(['bria', 'rrrrrffg', 6, 55544, 'yeee@', 3, 'group_2', ['Js', 'Pika']]), listParent)
    // createStudent(preGenerate(['shillA', 'rrffffg', 7, 551115, 'yeeee@', 4, 'group_3', ['Js', 'C#']]), listParent)
    // createStudent(preGenerate(['unoitr', 'rffffffffg', 8, 55145655, 'yeeeee@', 5, 'group_2', []]), listParent)
    // createStudent(preGenerate(['vivvals', 'rffggggg', 20, 500055, 'yeeeeeee@', 6, 'group_1', ['Pika']]), listParent)

    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-
    // 
    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-

    let form = document.querySelector('#contact_form')

    localStorageLoadForm(form)
    localStorageSaveForm(form)

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let data = getData(form)
        createStudent(data, listParent)
        localStorageStudentAdd(data, student_data_array)

        localStorage.clear()
        form.reset()
        update()
        localStorageStudentSave(student_data_array)
    })

    update()
}
init()

function createStudent(data, parent) {

    let item = create('div', true, parent, 'student_item')
    let text = create('div', true, item, 'student_item')
    text.textContent = data.printHidden

    createTemp(parent, `Student created: ${data.name}`, `color: green`)

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
        createTemp(parent, `Student deleted: ${data.name} ${data.surname} . `, `color: red`)

        localStorageStudentDelete(data)
    })
}

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
    //---
    let language = []
    let count_checkbox = form.querySelectorAll('fieldset div input[type="checkbox"]').length
    // console.log(count_checkbox)
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

function preGenerate([
    name,
    surname,
    age,
    phone,
    email,
    skill,
    group,
    language = [],
]) {

    if (language.length == 0) language = 'none'
    else language = language.join(', ')
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


// Visi elementai, kurie sudeti i HTML'a yra tiesiog imesti i div'a kaip vienas string'as. 
// Mums reiketu sukurti iprasta HTML struktura, kuri butu tokio tipo elementuose.

// Atvaizduojant/parodant telefono numeri ir email'a, mes "perpiesiame" visa informacija 
// apie studenta, nors mums reikia tik pakeisti zvaigzdutes i email'a ir 
// kitas zvaigzdutes i telefono numeri. Tai butu gerai kad dar ir sita 
// pataisytum, nes nera optimalu perpiesti viska del keletos raidziu/skaiciu.