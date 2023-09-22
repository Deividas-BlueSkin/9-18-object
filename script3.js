function create(HTMLelement = 'div', first, parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) {
        if (first) parent.prepend(element)
        else parent.append(element)
    }
    else {
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
    const listParent = create('div', false, '', '', 'students_list')
    console.log('submit')

    let form = document.querySelector('#contact_form')
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let data = getData()

        create('div', true, listParent, 'student_item').textContent = `p
        `
    })
}
init()




function getData() {
    let name = document.querySelector('#contact_name').value
    let surname = document.querySelector('#contact_surname').value
    let age = document.querySelector('#contact_age').value
    let phone = document.querySelector('#contact_phone').value
    let email = document.querySelector('#contact_email').value
    let skill = document.querySelector('#contact_skill').value
    return {
        name,
        surname,
        age,
        phone,
        email,
        skill,
    }
}
