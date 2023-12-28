let popup = document.querySelector('.buy-ticket-popup')
let openPopup = document.querySelectorAll('.buy-ticket-button')
let removePopup = document.querySelectorAll('.button-x')

openPopup[0].addEventListener('click', () => {
    popup.classList.add('active')
})

openPopup[1].addEventListener('click', () => {
    popup.classList.add('active')
})

openPopup[2].addEventListener('click', () => {
    popup.classList.add('active')
})

removePopup[0].addEventListener('click', () => {
    popup.classList.remove('active')
})

removePopup[1].addEventListener('click', () => {
    popup.classList.remove('active')
})

