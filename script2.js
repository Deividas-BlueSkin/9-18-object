// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// set up
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

function create(HTMLelement = 'div', parent, classes, id) {
    let element = document.createElement(HTMLelement)
    if (parent) {
        parent.append(element)
    }
    else {
        document.body.append(element)
    }
    if (classes) {
        element.className = classes
    }
    if (id) {
        element.id = id
    }
    return element
}

let container = create()
container.style =
    `display: flex;
    flex-direction: row;
    flex-wrap: wrap;`

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// main flow
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
// 1.1. name - miesto pavadinimas (string)
// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)


// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
// 1.6.3. Visų miestų žemyną išvesti į konsolę.
// 1.6.4. Visų miestų šalį išvesti į konsolę.
// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.


// 2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
// 2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.


// 3.1. Jeigu miestas yra sostinė, tai:
// 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
// 3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".


// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
// 4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
// 4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
// 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.


// 5. Naudojant tik JavaScript:
// 5.1. Pakeisti visų sostinių teksto spalvą.
// 5.2. Pakeisti kas antro miesto fono spalvą.


// 5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
// 5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.


// 6. Miestų plotis turi būti 50%.
// 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.

const area = []

function addArea(name, population, continent, country, isCapital, touristAttractions) {
    area.push({
        name: name, //string
        population: population, //num
        location: {
            continent: continent, //string
            country: country, //string
        },
        isCapital: isCapital, //bool
        touristAttractions: touristAttractions, //array

        toConsole: function () {
            console.log(this.name)
            console.log(this.population)
            console.log(this.location.continent)
            console.log(this.location.country)
            console.log(this.isCapital)
            console.log(this.touristAttractions)
        },

        toHTML: function (index) {
            //div
            let div = create('div', container)
            div.style.padding = '20px'
            div.style.margin = '5px'
            div.style.width = '45%'
            if (index % 2 == 0) {
                div.style.backgroundColor = 'lightGray'
            }
            if ((index + 1) % 2 != 0 && index + 1 == area.length) {
                div.style.width = '90%'
            }

            //h2
            let h2Text = this.name
            if (this.isCapital) h2Text += ' (capital)'
            let h2 = create('h2', div)
            h2.textContent = h2Text
            //para
            let paraText = `${this.name} city is located in ${this.location.continent}, ${this.location.country} and has population of ${this.population} people.`
            if (this.isCapital) {
                h2.style.color = 'green'
                paraText += ` ${this.name} is capital of ${this.location.country}.`
            }
            let p = create('p', div)
            p.textContent = paraText
            //h3 & list
            if (this.touristAttractions) {
                //h3
                let h3Text = `Main Tourist attraction of ${this.name}:`
                let h3 = create('h3', div)
                h3.textContent = h3Text
                //list
                let ul = create('ul', div)
                let tLength = this.touristAttractions.length
                if (tLength > 1) {
                    this.touristAttractions.forEach(function (element, i) {
                        let li = create('li', ul)
                        li.textContent = element
                        if (i == 0) {
                            li.style.color = 'green'
                        }
                        else if (i > 3 && i == tLength - 1) {
                            li.style.color = 'red'
                        }
                    })
                }
                else {
                    let li = create('li', ul)
                    li.textContent = this.touristAttractions
                    li.style.color = 'green'
                }
            }

        }
    })
}
addArea('Vilnius2', 55451115555, 'Europe', 'Lithuania', true, ['Scholar Statue', 'Oboabo'])
addArea('Vilnius12', 55456456325555, 'Europe', 'Lithuania', false, ['Scholar Statue', 'Oboabo'])
addArea('Vilnius5', 555516848653125, 'Europe', 'Lithuania', false, ['Scholar Statue', 'Oboabo', 'Oboabo', 'Oboabo', 'Oboabo', 'Oboabo'])
addArea('Vilnius555', 555545555, 'Europe', 'Lithuania', false, ['Scholar Statue'])
addArea('Vilnius55', 555511155, 'Europe', 'Lithuania', true, ['Scholar Statue'])

function micsTask() {
    area.forEach(function (obj, i) {
        obj.toConsole()
        obj.toHTML(i)
    })
}
micsTask()

console.log(area)