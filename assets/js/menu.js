let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar")
let backgroundBody = document.querySelector(".overlay");
let body = document.querySelector("body")

function toggleMenu() {
    if (menu.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    backgroundBody.classList.add("show");
   sidebar.classList.add("open")
    body.style.overflow = "hidden"
}

function closeMenu() {
    backgroundBody.classList.remove("show");
    sidebar.classList.remove("open")
    body.style.overflow = "auto"
}

backgroundBody.addEventListener("click", closeMenu);
menu.addEventListener("click", openMenu)