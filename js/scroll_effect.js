document.addEventListener("DOMContentLoaded", () => {
  let barProgress = document.querySelector("#myBar");

  let progressScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barProgress.style.width = scrolled + "%";
  };

  let barHide = document.querySelector("#barHide");
  let prevScrollpos = window.pageYOffset;

  let hideOnScroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      barHide.style.bottom = "0";
    } else {
      barHide.style.bottom = "-12rem";
    }
    prevScrollpos = currentScrollPos;
  };
  window.onscroll = function () {
    progressScroll();
    window.innerWidth < 620 ? hideOnScroll() : false;
  };
});
