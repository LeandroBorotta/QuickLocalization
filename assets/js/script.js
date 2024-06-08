document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    menu.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.classList.toggle("show");
        sidebar.classList.toggle("open");
    });

    overlay.addEventListener("click", function (e) {
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            overlay.classList.remove("show");
        }
    });

    sidebar.addEventListener("mouseover", function (e) {
        if (window.innerWidth > 1000 && sidebar.classList.contains("reduced")) {
            sidebar.classList.remove("reduced");
        }
    });

    sidebar.addEventListener("mouseout", function (e) {
        if (window.innerWidth > 1000 && !sidebar.classList.contains("reduced")) {
            sidebar.classList.add("reduced");
        }
    });


    window.addEventListener("resize", function () {
        if (window.innerWidth <= 1000) {
            sidebar.classList.remove("reduced");
        } else if (window.innerWidth > 1000) {
            sidebar.classList.add("reduced");
        }
    });

    if (window.innerWidth <= 1000) {
        sidebar.classList.remove("reduced");
    } else if (window.innerWidth > 1000) {
        sidebar.classList.add("reduced");
    }

});

