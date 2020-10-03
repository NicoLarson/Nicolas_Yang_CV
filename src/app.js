document.addEventListener("DOMContentLoaded", () => {

    let icone = document.querySelectorAll("i")

    for (let i = 0; i < 26; i++) {
        icone[i].addEventListener('mouseover', () => {
            icone[i].classList.toggle('colored')
        })
    }
    for (let i = 0; i < 26; i++) {
        icone[i].addEventListener('click', () => {
            icone[i].classList.toggle('colored')
        })
    }
})
