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
  let barHide = document.querySelector("#barHide");
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    progressScroll();
    hideOnScroll()
  };

  let progressScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barProgress.style.width = scrolled + "%";
  };

  let hideOnScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      barHide.style.top = "0";
    } else {
      barHide.style.top = "-12rem";
    }
    prevScrollpos = currentScrollPos;
  }

});
