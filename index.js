// // // const arr = [1, 2, 3]
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

// function greetGuest (greeting, second) {
//   console.log(${greeting},${this.username}, ${second})
// }

// const mango = {
//   username: 'mogut',
//   // greetGuest(greeting) {
//   //   console.log(${greeting},${this.username})
//   // }
//   // greetGuest: (greeting) => {
//   //   console.log(${greeting},${this.username})
//   // }
// }

// const poli = {
//   username: 'verk',
//   // greetGuest(greeting) {
//   //   console.log(${greeting},${this.username})
//   // }
// }

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

// const isSuccess = true
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(isSuccess) {
//       resolve('Success')
//     } else {
//       reject('error')
//     }
//   }, 2000)
// })
// promise.then((value) => {
//   console.log(value)
// }).catch((error) => {
//   console.log(error)
// }).finally(() => {
//   console.log('Finally')
// })

// fetch('https://jsonplaceholder.typicode.com/users').then((value) => value.json()).then((value) => {console.log(value)}).catch((error) => {console.log(error.message)})

const body = document.querySelector('body')
const list = document.querySelector('.list')
const modal_content = document.querySelector('.modal_content')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

const backdropClose = (event) => {
  if (event.target === event.currentTarget) {
    modal.classList.add('is-hidden')
    body.style.overflowY = ''
  }
  document.removeEventListener('keydown', keyClose)
}
const buttonClose = () => {
  modal.classList.add('is-hidden')
  document.removeEventListener('keydown', keyClose)
  body.style.overflowY = ''
}
const keyClose = (event) => {
  if (event.code === 'Escape') {
    modal.classList.add('is-hidden')
    body.style.overflowY = ''
  }
}

const createMurkUp = (el) => {
  const murkUp = el.map((value) => {
    return `<li class='list_item' data-id='${value.id}'>
      <img src=${value.image} class='list_img' alt='Product' data-id='${value.id}'>
      <div class='list_info' data-id='${value.id}'>
        <h2 class='list_title' data-id='${value.id}'>${value.title}</h2>
        <p class='list_price' data-id='${value.id}'>${value.price}</p>
        <p class='list_rating' data-id='${value.id}'>${value.rating.rate}</p>
      </div>
    </li>`
  }).join('')
  list.innerHTML = murkUp
}
fetch('https://fakestoreapi.com/products').then((value) => value.json()).then((value) => {createMurkUp(value)}).catch((error) => {console.log(error.message)})

let isDisabled = false

const createModalMurkUp = (value) => {
    let color = ''
    if (value.rating.rate < 3) {
      color = 'red'
    } else if (value.rating.rate >= 3 && value.rating.rate < 4) {
      color = 'orange'
    } else {
      color = 'green'
    }
    const modalMurkUp = `
      <img src=${value.image} class='list_modal-img' alt='Product'>
      <h2 class='list_title'>${value.title}</h2>
      <button class='list_buy'>Add to cart</button>
      <div class='list_description'>
        <p class='list_price'>Price: ${value.price}</p>
        <p class='list_rating' style='color: ${color};'>Rating: <span>${value.rating.rate}</span></p>
        <p class='list_rating'>Rated by: ${value.rating.count} people</p>
        <p class='list_category'>Category: ${value.category}</p>
        <p class='list_description'>${value.description}</p>
      </div>`
  modal_content.innerHTML = modalMurkUp
  const buttonBuy = document.querySelector('.list_buy')
  

  const result = JSON.parse(localStorage.getItem('modal_data'))??[]
  const filteredResult = result.find((el) => {
    return el.title === value.title
  })
  isDisabled = filteredResult?true:false
  buttonBuy.disabled = isDisabled

  buttonBuy.addEventListener('click', () => {
    const result = JSON.parse(localStorage.getItem('modal_data'))??[]
    const filteredResult = result.find((el) => {
      return el.title === value.title
    })
    console.log(filteredResult)
    if(!filteredResult) {
      isDisabled = true
      localStorage.setItem('modal_data', JSON.stringify([...result, {image:value.image, title:value.title, price:value.price, quantity:1}]))
    } else {
      isDisabled = false
    }
  })
}

list.addEventListener('click', (event) => {
  if (!event.target.dataset.id) return
  fetch(`https://fakestoreapi.com/products/${event.target.dataset.id}`).then((value) => value.json()).then((value) => {createModalMurkUp(value)}).catch((error) => {console.log(error.message)})
  modal.classList.remove('is-hidden')
  modal.addEventListener('click', backdropClose)
  close.addEventListener('click', buttonClose)
  document.addEventListener('keydown', keyClose)
  body.style.overflowY = 'hidden'
  // if (!modal.classList.contains('is-hidden')) {
  //   const buttonBuy = document.querySelector('.list_buy')
  //   console.log(buttonBuy)
  // }
})



// const objArr = [{number: 2}, {name: 'Bob The Builder'}, {age: 12}]
// const filteredArr = objArr.find((el) => {
//   return el.name === 'Bill The Builder'
// })
// console.log(filteredArr)
// fetch('https://fakestoreapi.com/products').then((value) => value.json()).then((value) => {console.log(value)}).catch((error) => {console.log(error.message)})