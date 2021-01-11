document.addEventListener("DOMContentLoaded", () => {
  
  // Hover Effect
  /* let icone = document.querySelectorAll("i");

  for (let i = 0; i < icone.length - 3; i++) {
    icone[i].addEventListener("mouseover", () => {
      icone[i].classList.toggle("colored");
    });
  }
  for (let i = 0; i < icone.length - 3; i++) {
    icone[i].addEventListener("click", () => {
      icone[i].classList.toggle("colored");
    });
  } */

  // Progress bar

  let barProgress = document.getElementById("myBar");
  
  window.onscroll = function () {
    progressScroll();
  };

  let progressScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barProgress.style.width = scrolled + "%";
  };
});
