const item_list = document.querySelector('.cart_list')
const clear = document.querySelector('.cart_clear')
const result = JSON.parse(localStorage.getItem('modal_data'))??[]


clear.addEventListener('click', () => {
    localStorage.removeItem('modal_data')
    window.location.reload()
})

const createMurkUp = (el) => {
    const murkUp = el.map(({image, price, title}) => {
        return `<li class='list_item'>
            <img src=${image} class='list_img' alt='Product'>
            <div class='list_info'>
                <h2 class='list_title'>${title}</h2>
                <p class='list_price'>${price}</p>
            </div>
            <button class='cart_remove' name='${title}'>Remove</button>
        </li>`
    }).join('')
    item_list.innerHTML = murkUp
    const cart_remove = document.querySelectorAll('.cart_remove')
    // console.log(cart_remove)
    // cart_remove.addEventListener('click', (event) => {
    //     const name = event.target.name
    //     const result = JSON.parse(localStorage.getItem('modal_data'))??[]
    //     const filteredArr = result.filter((el) => {
    //         return el.title !== name 
    //     })
    //     localStorage.setItem('modal_data', JSON.stringify([...filteredArr]))
    //     window.location.reload()
    // })
    cart_remove.forEach((el) => {
        el.addEventListener('click', (event) => {
            const name = event.target.name
            const result = JSON.parse(localStorage.getItem('modal_data'))??[]
            const filteredArr2 = result.filter((el) => {
                return el.title !== name
            })
            localStorage.setItem('modal_data', JSON.stringify([...filteredArr2]))
            window.location.reload()
        })
    })
}
createMurkUp(result)

const removeItem = (el) => {
    console.log(el)
}