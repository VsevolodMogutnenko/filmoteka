const body = document.querySelector('body')
const list = document.querySelector('.list')
const modal_content = document.querySelector('.modal_content')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

import { createMurkUp } from "./createMurkUp.js"
import { isDisabled } from "./createMurkUp.js"
import { createModalMurkUp } from "./createMurkUp.js"

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

fetch('https://fakestoreapi.com/products').then((value) => value.json()).then((value) => {createMurkUp(value)}).catch((error) => {console.log(error.message)})
console.log(list)
// list.addEventListener('click', (event) => {
//   if (!event.target.dataset.id) return
//   fetch(`https://fakestoreapi.com/products/${event.target.dataset.id}`).then((value) => value.json()).then((value) => {createModalMurkUp(value)}).catch((error) => {console.log(error.message)})
//   modal.classList.remove('is-hidden')
//   modal.addEventListener('click', backdropClose)
//   close.addEventListener('click', buttonClose)
//   document.addEventListener('keydown', keyClose)
//   body.style.overflowY = 'hidden'
// })