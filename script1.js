const posts = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    id: 16,
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  },
  {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
  }
]

// console.log(posts)

// console.log(posts[0])
// console.log(posts[0].body)
// console.log(posts[0].title)

// console.log(posts[1])
// console.log(posts[1].body)
// console.log(posts[1].title)

// console.log(posts[2])
// console.log(posts[2].body)
// console.log(posts[2].title)

// posts.forEach(post => {
//   console.log(post)
//   console.log(post.title)
//   console.log(post.body)
// })

// console.log(posts.slice(5, 8))


//   7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
//   7.1. Gauti pirmo masyvo nario reikšmę.
//   7.2. Gauti paskutinio masyvo nario reikšmę.
//   7.3. Gauti 15 masyvo nario reikšmę.
//   7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
//   7.5. Gauti vidurinio masyvo nario reikšmę.
//   7.6. Gauti pirmų keturių masyvo narių reikšmes.
//   7.7. Gauti paskutinių penkių masyvo narių reikšmes.
//   7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
//   7.9. Gauti kas antro masyvo nario reikšmes.
//   7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.

function getWithIndex(array, index) {
  return (array[index])
}
console.log(getWithIndex(posts, 0))
console.log(getWithIndex(posts, posts.length - 1))
console.log(getWithIndex(posts, 15))
console.log(getWithIndex(posts, posts.length - 13))
console.log(getWithIndex(posts, Math.trunc(posts.length / 2)))

function getWithSlice(array, start, count) {
  return array.slice(start, count)
}

console.log(getWithSlice(posts, 4))
console.log(getWithSlice(posts, -5))
console.log(getWithSlice(posts, 4, 10))

function getEverySecond(array) {
  let newArray = []
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array[i])
  }
  return newArray
}
console.log(getEverySecond(posts))

function getFirstAndLast(array) {
  return [array.shift(), array.pop()]
}
console.log(getFirstAndLast(posts))

//   7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
//   7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
//   7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
//   7.14. Išvesti visus masyvo narius į konsolę.
//   7.15. Išvesti visų masyvo narių property "title" į konsolę.
//   7.16. Išvesti visų masyvo narių property "body" į konsolę.
//   7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
//   7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
//   7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".

function getTitle(array, index) {
  return array[index].title
}
console.log(getTitle(posts, 0))

function getBody(array, index) {
  return array[index].body
}
console.log(getBody(posts, 1))
function getTitleAndBody(array, index) {
  return `Title: "${array[index].title}". Content: "${array[index].body}".`
}
console.log(getTitleAndBody(posts, 2))

function getAll(array) {
  let newArray = []
  array.forEach(n => newArray.push(n))
  return newArray
}
console.log(getAll(posts))
function getAllTitle(array) {
  let newArray = []
  array.forEach(n => newArray.push(n.title))
  return newArray
}
console.log(getAllTitle(posts))
function getAllBody(array) {
  let newArray = []
  array.forEach(n => newArray.push(n.body))
  return newArray
}
console.log(getAllBody(posts))
function getAllTitleAndBody(array) {
  let newArray = []
  array.forEach(n => newArray.push(`Title: "${n.title}". Content: "${n.body}".`))
  return newArray
}
console.log(getAllTitleAndBody(posts))

function getSliceTitleAndBody(array, start, count) {
  let newArray = []
  array.slice(start, count).forEach(n => newArray.push(`Title: "${n.title}". Content: "${n.body}".`))
  return newArray
}
console.log(getSliceTitleAndBody(posts, 4))
console.log(getSliceTitleAndBody(posts, -7))



//   7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą. 
//   7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".
//   7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
//   7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
//   7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.


let body = document.body

let container = document.querySelector('div')

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

function ulCreate() {
  return create('ul', container)
}

function liCreate(ul, content) {
  let li = create('li', ul)
  li.textContent = content
  li.style.listStyle = 'none'
}

//---

function listTitle(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitle(array)
  newArray.forEach(function (element) {
    liCreate(ul, element)
  })
}
listTitle(posts)

function listTitleAndBody(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element) {
    liCreate(ul, element)
  })
}
listTitleAndBody(posts)

function listTitleAndBodyFilterStartChar(array, char) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    if (array[index].title.toLowerCase()[0] == char) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterStartChar(posts, 's')

function listTitleAndBodyFilterEndChars(array, chars) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let last = array[index].title.toLowerCase().slice(-1)
    let allow
    chars.forEach(function (char) {
      if (last == char) allow = true
    })

    if (allow) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterStartChar(posts, ['t', 'm'])

function listTitleAndBodyFilterlength(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let length = array[index].title.length

    if (length > 15) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterlength(posts)

//   7.25. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi 
// mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
function listTitleAndBodyFilterlength2(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let lengthTitle = array[index].title.length
    let lengthBody = array[index].body.length

    if (lengthTitle < 20 && lengthBody > 50) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterlength2(posts)

//   7.26. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi 
// tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
function listTitleAndBodyFilterLength3(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let lengthTitle = array[index].title.length
    let lengthBody = array[index].body.length

    if (lengthTitle > 20 && lengthTitle < 30 && lengthBody > 70 && lengthBody < 130) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterLength3(posts)

//   7.27. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi 
// simbolių junginį "it", o "body" turi simbolių junginį "quo".
function listTitleAndBodyFilterChars2(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let title = array[index].title
    let body = array[index].body

    if (title.includes('it') && body.includes('quo')) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterChars2(posts)

//   7.28. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių "body" turi žodį 
// "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
function listTitleAndBodyFilterChars3(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let body = array[index].body

    if (body.includes(' sit ')) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterChars3(posts)

//   7.29. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi 
// daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.
function listTitleAndBodyFilterChars2(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = getAllTitleAndBody(array)
  newArray.forEach(function (element, index) {
    let title = array[index].title
    let body = array[index].body

    if (title.split('a').length > 3 && body.split('o').length < 7) {
      liCreate(ul, element)
    }
  })
}
listTitleAndBodyFilterChars2(posts)

//   7.30. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti visų masyvo narių pavadinimus surūšiuotus 
// nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.
function sort(array) {
  let ul = ulCreate()
  let newArray = []
  newArray = array.sort(function (a, b) {
    return a.body.length - b.body.length
  })

  newArray.forEach(function (element) {
    liCreate(ul, `Title: "${element.title}". Content: "${element.body}". Length: ${element.body.length}`)
  })

}
sort(posts)