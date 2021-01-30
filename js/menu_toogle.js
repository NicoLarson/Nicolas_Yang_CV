document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("header p:nth-child(3)");
  const nav = document.querySelector("header nav");
  const menuList = document.querySelectorAll("header nav ul li");

  const chevronDown = document.querySelector(".fa-chevron-down");
  const chevronLeft = document.querySelector(".fa-chevron-left");
  const chevronRight = document.querySelector(".fa-chevron-right");

  menuBtn.addEventListener("click", () => {
    menuBtn.textContent == " ls "
      ? (menuBtn.textContent = " cd ")
      : (menuBtn.textContent = " ls ");
    nav.classList.toggle("discover");
    menuBtn.classList.toggle("discover");
    chevronDown.classList.toggle("discover");
    chevronRight.classList.toggle("discover");
    chevronLeft.classList.toggle("discover");
  });

  for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener("click", () => {
      menuBtn.textContent = " ls ";
      nav.classList.toggle("discover");
      chevronDown.classList.toggle("discover");
      chevronRight.classList.toggle("discover");
      chevronLeft.classList.toggle("discover");
    });
  }
});
