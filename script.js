let pro = document.querySelector('.pro')
let max = document.querySelector('.max')
let img = document.querySelector('.iphone')
let f = document.querySelector(".f")
pro.onclick = () => {
    pro.style.borderColor = 'blue'
    max.style.borderColor = 'black'
}

max.onclick = () => {
    max.style.borderColor = 'blue'
    pro.style.borderColor = 'black'
} 