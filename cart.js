const item_list = document.querySelector('.cart_list')

const result = JSON.parse(localStorage.getItem('modal_data'))??[]

const createMurkUp = (el) => {
    const murkUp = el.map(({image, price, title}) => {
        return `<li class='list_item'>
            <img src=${image} class='list_img' alt='Product'>
            <div class='list_info'>
                <h2 class='list_title'>${title}</h2>
                <p class='list_price'>${price}</p>
            </div>
        </li>`
    }).join('')
    item_list.innerHTML = murkUp
}
createMurkUp(result)

console.log(result)