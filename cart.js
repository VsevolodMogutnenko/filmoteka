const item_list = document.querySelector('.cart_list')
const clear = document.querySelector('.cart_clear')
const result = JSON.parse(localStorage.getItem('modal_data'))??[]


clear.addEventListener('click', () => {
    localStorage.removeItem('modal_data')
    window.location.reload()
})

const createMurkUp = (el) => {
    const murkUp = el.map(({image, price, title, quantity}) => {
        return `<li class='list_item'>
            <img src=${image} class='list_img' alt='Product'>
            <div class='list_info'>
                <h2 class='list_title'>${title}</h2>
                <p class='list_price'>${price}</p>
                <div class='list_buttons'>
                    <button class='list_remove' name='${title}'>-</button>
                    <p class='list_count' name='${title}'>${quantity}</p>
                    <button class='list_add' name='${title}'>+</button>
                </div>
            </div>
            <button class='cart_remove' name='${title}'>Remove</button>
        </li>`
    }).join('')
    item_list.innerHTML = murkUp

    // cart_remove.forEach((el) => {
    //     el.addEventListener('click', (event) => {
    //         const name = event.target.name
    //         const result = JSON.parse(localStorage.getItem('modal_data'))??[]
    //         const filteredArr2 = result.filter((el) => {
    //             return el.title !== name
    //         })
    //         localStorage.setItem('modal_data', JSON.stringify([...filteredArr2]))
    //         window.location.reload()
    //     })
    // })

    item_list.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart_remove')) {
            const name = event.target.name
            const result = JSON.parse(localStorage.getItem('modal_data'))??[]
            const filteredArr2 = result.filter(({title}) => title !== name)
            localStorage.setItem('modal_data', JSON.stringify([...filteredArr2]))
            window.location.reload()
        }
        if (event.target.classList.contains('list_remove')) {
            const name = event.target.name
            const result = JSON.parse(localStorage.getItem('modal_data'))??[]
            const findProduct = result.find(({title}) => title === name)
            if (findProduct.quantity >= 2) {
                findProduct.quantity -= 1
                const newArr = result.map((product) => product.name === name?findProduct:product)
                localStorage.setItem('modal_data', JSON.stringify([...newArr]))
                window.location.reload()
            }
        }
        if (event.target.classList.contains('list_add')) {
            const name = event.target.name
            const result = JSON.parse(localStorage.getItem('modal_data'))??[]
            const findProduct = result.find(({title}) => title === name)
            if (findProduct.quantity <= 9) {
                findProduct.quantity += 1
                const newArr = result.map((product) => product.name === name?findProduct:product)
                localStorage.setItem('modal_data', JSON.stringify([...newArr]))
                window.location.reload()
            }
        }
    })
}
createMurkUp(result)