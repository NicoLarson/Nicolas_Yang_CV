document.addEventListener("DOMContentLoaded", () => {
  const headerSection = document.querySelector("header");
  const headerTitleOne = document.querySelector("header h1 a");
  const headerIconsYingYang = document.querySelector("header i");

  const menu = document.querySelector("header nav ul");
  const menuList = document.querySelectorAll("header nav ul li a");
  const menuListBars = document.querySelector("header nav ul li ul");

  const sections = document.querySelectorAll("section");

  const welcomeTitle = document.querySelector("#welcome h2");
  const welcomeDownHere = document.querySelector("#welcome a");

  const diplomaList = document.querySelector("#diploma dl");

  const portfolioPolaroid = document.querySelectorAll("#portfolio ul li");
  const linksA = document.querySelectorAll("a");

  const aboutP =document.querySelector("#about p");
  headerIconsYingYang.addEventListener("click", () => {
    headerSection.classList.toggle("dark-mode");
    headerTitleOne.classList.toggle("dark-mode");
    menu.classList.toggle("dark-mode");
    menuListBars.classList.toggle("dark-mode");

    for (let i = 0; i < menuList.length; i++) {
      menuList[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.toggle("dark-mode");
    }
    welcomeTitle.classList.toggle("dark-mode");
    welcomeDownHere.classList.toggle("dark-mode");
    diplomaList.classList.toggle("dark-mode");
    aboutP.classList.toggle("dark-mode");


    for (let i = 0; i < sections.length; i++) {
      portfolioPolaroid[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < sections.length; i++) {
      linksA[i].classList.toggle("dark-mode");
    }
    headerIconsYingYang.classList.toggle("dark-mode");
  });
});
