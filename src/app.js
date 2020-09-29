document.addEventListener("DOMContentLoaded", () => {

    let icone = document.querySelectorAll("i")

    for (let i = 0; i < 15; i++) {
        icone[i].addEventListener('mouseover', () => {
            icone[i].classList.toggle('colored')
        })
    }
})