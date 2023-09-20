// let arr = [1, 2, 3]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// //map, forEach, filter

// let n = 0
// while (n < arr.length) {
//     console.log(arr[n])
//     n++
// }

// do {
//     //logic & action
// } while (condition);

// for (let num of arr) {
//     console.log(num)
// }

// let pizza = {
//     cheese: true,
//     milk: false,
//     banana: false,
//     ananass: true,
//     mushroom: true,
//     pepper: true,
//     sawsage: false,
//     wasabi: true,
//     chilly: true,
//     cook: 'BJ',
//     portion: 'large CXIII',
//     name: 'cuzimurderedachild',

//     getRecept: function () {
//         return [this.cheese, this.ananass, this.mushroom, this.pepper, this.wasabi, this.chilly]
//     },

//     setCook: function (set) {
//         isCook = set
//     },
//     switchRaw: function () {
//         this.isRaw = !this.isRaw
//     },
// }

// console.log(pizza.cheese)

// let mainIng = 'cheese'
// console.log(pizza[mainIng])//shows true
// console.log(mainIng)//shows da cheese

// pizza[mainIng] = false
// console.log(pizza.cheese)

// pizza.milk = true
// console.log(pizza.milk)

// //object property creation
// pizza.isRaw = true

// console.log(pizza)

// delete pizza.milk

// console.log(pizza.getRecept())

// pizza.setCook(true)

// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-
// task 1
// [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-

// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

let company = {
    name: 'meme',
    opened: true,
    code: 'm6',
    employees: 27,
    ceo: 'Grol',
    nvo: 'Spac',
    workLocations: ['Gu', 'Xiao'],
    activeAreas: ['Shanhai', 'Gaojian'],
    contacts: {
        phone: 545454,
        email: 'boo@goo',
        address: {
            country: 'turtle',
            city: 'left shell',
            street: 'milc gab',
            apartment: '911'
        }
    },
    getAddress: function () {
        return this.address
    },
    switchNVO: function () {
        this.nvo = !this.nvo
    },
    getArea: function () {
        return this.activeAreas
    },
    addLocation: function (newLoovation) {
        this.workLocations.push(newLoovation)
    },
    addArea: function (newArea) {
        this.activeAreas.push(newArea)
    },
    removeLocation: function (newLoovation) {
        this.workLocations(this.workLocations.findIndex(newLoovation)) = undefined//???
    },
    removeArea: function (newArea) {
        this.activeAreas.push(newArea)
    },
}

console.log(company)

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.