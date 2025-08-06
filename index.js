import { createMurkUp } from "./createMurkUp.js"
import { createModalMurkUp } from "./createMurkUp.js"
import * as refs from './refs.js'

const backdropClose = (event) => {
  if (event.target === event.currentTarget) {
    refs.modal.classList.add('is-hidden')
    refs.body.style.overflowY = ''
  }
  document.removeEventListener('keydown', keyClose)
}
const buttonClose = () => {
  refs.modal.classList.add('is-hidden')
  document.removeEventListener('keydown', keyClose)
  refs.body.style.overflowY = ''
}
const keyClose = (event) => {
  if (event.code === 'Escape') {
    refs.modal.classList.add('is-hidden')
    refs.body.style.overflowY = ''
  }
}

fetch('https://fakestoreapi.com/products').then((value) => value.json()).then((value) => {createMurkUp(value)}).catch((error) => {console.log(error.message)})
refs.list.addEventListener('click', (event) => {
  if (!event.target.dataset.id) return
  fetch(`https://fakestoreapi.com/products/${event.target.dataset.id}`).then((value) => value.json()).then((value) => {createModalMurkUp(value)}).catch((error) => {console.log(error.message)})
  refs.modal.classList.remove('is-hidden')
  refs.modal.addEventListener('click', backdropClose)
  refs.close.addEventListener('click', buttonClose)
  document.addEventListener('keydown', keyClose)
  refs.body.style.overflowY = 'hidden'
})