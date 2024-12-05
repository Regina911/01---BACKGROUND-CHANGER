const button = document.getElementById('btn')
const color = document.querySelector('.color')

const hex = [
    '0', '1', '2', '3', '4','5', '6','7', '8', 'A', 'B', 'C', 'D', 'E', 'F'
]


button.addEventListener('click', () => {
    let hexColor = generateHex()
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
    color.style.color = hexColor

})

function generateHex(){             //генерирует такой: #2380A3
    let hexColor = '#'
    for (let i = 0; i<6; i++)
    hexColor += hex[getRandomNumber()]
return hexColor
}


function getRandomNumber() {        //генерирует число от 0 до 12
    return Math.floor(Math.random() * hex.length)
}