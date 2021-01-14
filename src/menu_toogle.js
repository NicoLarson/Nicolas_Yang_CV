document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("header .fa-bars");
  const nav = document.querySelector("header nav");
  const menuList = document.querySelectorAll("header nav ul li");
 
  menuBtn.addEventListener("mouseover", () => {
    nav.classList.add("discover");
    menuBtn.classList.add("fa-times");
  });
  menuBtn.addEventListener("click", () => {
    nav.classList.remove("discover");
    menuBtn.classList.remove("fa-times");
  });

  for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener("click", () => {
      nav.classList.toggle("discover");
      menuBtn.classList.toggle("fa-times");
    });
  }



  
});
