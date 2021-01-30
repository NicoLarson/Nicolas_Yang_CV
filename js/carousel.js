document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".polaroid");
  const nbSlide = items.length;
  const iconNext = document.querySelector("#portfolio i.fa-chevron-right");
  const iconPrevious = document.querySelector("#portfolio i.fa-chevron-left");

  const dots = document.querySelector(".dots");

  let count = 0;

  let dotsList = () => {
    dots.innerHTML = ``;
    for (let i = 0; i < nbSlide; i++) {
      items[i].classList[1] == "active"
        ? (dots.innerHTML += `<li>1</li>`)
        : (dots.innerHTML += `<li>0</li>`);
    }
  };

  dotsList();

  let nextSlide = () => {
    items[count].classList.remove("active");
    count < nbSlide - 1 ? count++ : (count = 0);
    items[count].classList.add("active");
    dotsList();
  };

  let previousSlide = () => {
    items[count].classList.remove("active");
    count > 0 ? count-- : (count = nbSlide - 1);
    items[count].classList.add("active");
    dotsList();
  };

  iconNext.addEventListener("click", nextSlide);
  iconPrevious.addEventListener("click", previousSlide);
});
