const navbar = document.getElementById("navbar");
const items = document.querySelectorAll("#navbar > p a");
const mainHeader = document.querySelector("#main-header");

// main header animation

window.onload = () => {
  mainHeader.style.opacity = "1";
};

// navbar animation

window.onscroll = () => {
  if (document.documentElement.scrollTop > 150) {
    // navbar styling

    navbar.classList.add("nav-styled");

    // navlinks styling

    items.forEach((item) => {
      item.classList.add("navlink-styled");
    });
  } else {
    navbar.removeAttribute("class");
    items.forEach((item) => {
      item.removeAttribute("class");
    });
  }
};
