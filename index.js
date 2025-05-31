// // const arr = [1, 2, 3]
// // const arr1 = arr
// // const obj = {key: 'kovrik'}
// // const function28 = () => {

// // }
// // console.log(typeof(function28))

// const string = 'IgouKAkakAKaAAaAaa'
// const num = 23
// const boolean = true
// const null1 = null
// const undefined1 = undefined
// // console.log(null === null)
// let name 
// console.log(name)
// console.log('5' === 5)
// const obj1 = {name: 'Ogurec'}
// const obj2 = {name: 'Ogurec'}
// // console.log(obj1.name === obj2.name)
// // console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
// // console.log(JSON.stringify(obj1))
// const obj3 = {...obj1}

// const vsevolodFunc = () => {
//   console.log(this)
// }
// vsevolodFunc()

// showThis()
// function showThis () {
//   console.log('this is show this', this)
// }
// const showThis = () => {
//   console.log('this is vsevolod', this)
// }

// const greySamurai = {
//   name: 'grey',
//   role: 'samurai'
// }
// greySamurai.age = 99999
// greySamurai.show = showThis
// greySamurai.show()

// const a = 5
// const mahichFunc = () => {
//   const b = 10
//   // console.log(a)
//   const greySamurai = {
//     a: 'grey',
//     b: 'samurai'
//   }
// }
// console.log(b)
// mahichFunc()

function greetGuest (greeting, second) {
  console.log(`${greeting},${this.username}, ${second}`)
}

const mango = {
  username: 'mogut',
  // greetGuest(greeting) {
  //   console.log(${greeting},${this.username})
  // }
  // greetGuest: (greeting) => {
  //   console.log(${greeting},${this.username})
  // }
}

const poli = {
  username: 'verk',
  // greetGuest(greeting) {
  //   console.log(${greeting},${this.username})
  // }
}

// greetGuest.call(mango,'welcome')
// greetGuest.call(poli,'welcome')
// mango.greetGuest('welcome')
// poli.greetGuest('welcome')

// greetGuest.apply(mango, ['welcome', 'Wasabi poowa'])
// greetGuest.apply(poli, ['welcome', 'extra samurai'])
// const test = greetGuest.bind(mango, 'welcome', 'extra wasabi')
// test()

// const animal = {
//     legs: 4
// }

// const dog = Object.create(animal)
// // console.log(dog.name)
// dog.name = 'Dunyahich'
// const cat = Object.create(dog)
// console.log(dog.hasOwnProperty('legs'))

// const superSamurai = {
//     name: 'Egorodik'
// }

// const functionDa = () => {
//     localStorage.setItem('superSamurai', JSON.stringify(superSamurai))
// }
// functionDa()
// console.log('works')
// const result = JSON.parse(localStorage.getItem('superSamurai'))
// console.log(result)

// let count = 0
// const da = () => { 
//     count +=1
//     if(count === 5) {
//         clearInterval(interval)
//     }   
//     console.log('Hello vu na kanale Zhestyanka')
// }
// const interval = setInterval(da, 3000)

// const interval = setTimeout(da, 3000)
// console.log(interval)
// clearTimeout(interval)

const isSuccess = true
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(isSuccess) {
      resolve('Success')
    } else {
      reject('error')
    }
  }, 2000)
})
promise.then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
}).finally(() => {
  console.log('Finally')
})

// fetch('https://jsonplaceholder.typicode.com/users').then((value) => value.json()).then((value) => {console.log(value)}).catch((error) => {console.log(error.message)})


const list = document.querySelector('.list')
const createMurkUp = (el) => {
  const murkUp = el.map((value) => {
    return `<li class='list_item'>
      <img src='./images/малина.jpg' class='list_img' alt='Ягода Малинка укуси меня пчела'>
      <p class='list_name'>${value.name}</p>
      <p class='list_email'>${value.email}</p>
      <p class='list_website'>${value.website}</p>
    </li>`
  }).join('')
  list.innerHTML = murkUp
}
fetch('https://jsonplaceholder.typicode.com/users').then((value) => value.json()).then((value) => {createMurkUp(value)}).catch((error) => {console.log(error.message)})