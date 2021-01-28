document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#portfolio > ul li");
  const nbSlide = items.length;
  const iconNext = document.querySelector("#portfolio i.fa-chevron-right");
  const iconPrevious = document.querySelector("#portfolio i.fa-chevron-left");

  let count = 0;

  let nextSlide = () => {
    items[count].classList.remove("active");
    count < nbSlide - 1 ? count++ :  count = 0;
    items[count].classList.add("active");
  };

  let previousSlide = () => {
    items[count].classList.remove("active");
    count > 0 ? count-- :  count = nbSlide - 1;
    items[count].classList.add("active");
  };

  iconNext.addEventListener("click", nextSlide);
  iconPrevious.addEventListener("click", previousSlide);

});
