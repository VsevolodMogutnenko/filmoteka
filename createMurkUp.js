import {list, modal_content} from './refs.js'

export const createMurkUp = (el) => {
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

let isDisabled = false

export const createModalMurkUp = (value) => {
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