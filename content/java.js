//declarations
const container = document.querySelector('#container')
const main = document.querySelector('.main')
const divpopup = document.querySelector('.divpopup')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const mainpopup = document.querySelector('.mainpopup')
const header = document.querySelector('.header')
const lefttext = document.querySelector('.left-text')
const righttext = document.querySelector('.right-text')
//functions
header.addEventListener('mouseover', (fade) => {
    lefttext.classList.remove('fadeAway')
    lefttext.classList.add('fadeIn')
    righttext.classList.remove('fadeAway')
    righttext.classList.add('fadeIn')
    right.classList.remove('fadeAway')
    right.classList.add('fadeIn')
    left.classList.remove('fadeAway')
    left.classList.add('fadeIn')
    fade.stopPropagation()
    console.log(fade)
    return
})
mainpopup.addEventListener('mouseover', (fade) => {
    lefttext.classList.remove('fadeIn')
    lefttext.classList.add('fadeAway')
    righttext.classList.remove('fadeIn')
    righttext.classList.add('fadeAway')
    right.classList.remove('fadeIn')
    right.classList.add('fadeAway')
    left.classList.remove('fadeIn')
    left.classList.add('fadeAway')
    fade.stopPropagation()
    console.log(fade)
    return
})
lefttext.addEventListener('mouseover', (fade) => {
    
})