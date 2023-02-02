const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  const menu = document.querySelector(".nav-links");
  const icon = menuBtn.querySelector("img");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    icon.src = "./images/icon-close.svg";
    document.body.style.overflow = "hidden";
  } else {
    icon.src = "./images/icon-hamburger.svg";
    document.body.style.overflow = "auto";
  }
});
