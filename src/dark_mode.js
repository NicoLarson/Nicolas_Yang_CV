document.addEventListener("DOMContentLoaded", () => {

const btn = document.querySelector('header i');
const headerSection = document.querySelector('header');
const headerTitleOne = document.querySelector('header h1');
const headerIconsYingYang = document.querySelector('header i');
const headerIconsBurger = document.querySelector('header nav ul i');


const welcomeSection = document.querySelector(' main #welcome');
const welcomeSectionTitleTwo = document.querySelector('#welcome h2');
const welcomeSectionHereBtn = document.querySelector('#welcome a');

const  skillsSection = document.querySelector('#skills')
const  skillsSectionSection = document.querySelector('#skills section')

const  toolsSection = document.querySelector('#tools')
const  toolsSectionSection = document.querySelector('#tools>section')

btn.addEventListener('click',()=>{
    headerSection.classList.toggle('dark-mode')
    headerTitleOne.classList.toggle('dark-mode')
    headerIconsYingYang.classList.toggle('dark-mode')
    headerIconsBurger.classList.toggle('dark-mode')

    welcomeSection.classList.toggle('dark-mode')
    welcomeSectionTitleTwo.classList.toggle('dark-mode')
    welcomeSectionHereBtn.classList.toggle('dark-mode')

    skillsSection.classList.toggle('dark-mode')
    skillsSectionSection.classList.toggle('dark-mode')
    
    toolsSection.classList.toggle('dark-mode')
    toolsSectionSection.classList.toggle('dark-mode')


})



});
