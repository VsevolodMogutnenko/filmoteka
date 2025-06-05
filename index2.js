const colorDiv = document.querySelector('.color')
const textP = document.querySelector('.text')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const createMurkUp = () => {
    const arr = []
    for (let i = 0; i <= 60; i++) {
        const color = getRandomHexColor()
        const element = document.createElement('button')
        element.type = 'button'
        element.style.backgroundColor = color
        element.innerHTML = color
        arr.push(element)
    }
    colorDiv.append(...arr)
}
createMurkUp()

colorDiv.addEventListener('click', (event) => {
    const selectedColor = event.target.innerText
    textP.style.color = selectedColor
    textP.innerText = `Selected color: ${selectedColor}`
})