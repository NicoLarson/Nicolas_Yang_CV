document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("header p:nth-child(3)");
  const nav = document.querySelector("header nav");
  const menuList = document.querySelectorAll("header nav ul li");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("discover");
    menuBtn.classList.toggle("discover");
  });

  for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener("click", () => {
      nav.classList.toggle("discover");
    });
  }
});
