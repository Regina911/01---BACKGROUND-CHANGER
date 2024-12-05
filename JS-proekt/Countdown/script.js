const countDownElement = document.querySelectorAll('.countdown')
const items = document.querySelector('countdown-item > h1')

// назначаем дату отсчета 

let countDownDate = new Date(2024, 12, 3, 0, 0)

function getCountTime() {

    //получаем текущее время
    const now = new Date()

    //находим разницу
    const distance = countDownDate.getTime() - now.getTime()

    // 1c = 1000мс
    //1 мин = 60с
    //1 ч = 60 мин
    //1д = 24 ч
    
    //cоздаем переменные в миллисекундах
    const oneDay = 1000 * 60 * 60 * 24
    const oneHour = 1000 * 60 * 60 
    const oneMinute = 1000 * 60 
    
    //подсчет дней, часов, минут и секунд

    let days = Math.floor(distance / oneDay)
    let hours = Math.floor((distance % oneDay) / oneHour)
    let minutes = Math.floor((distance % oneHour) / oneMinute)
    let seconds = Math.floor((distance % oneMinute) / 1000)

    // массив для переменных
    const values = [days,hours, minutes, seconds ]

    items.forEach (function (item, index,array) {
        item.textContent = values[index]
    })
        
    }
    let countdown = setInterval(getCountTime, 1000)
        
    
    getCountTime()
