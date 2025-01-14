function setActiveNav() {

    const berandaLink = document.getElementById("beranda-link");
    const menuLink = document.getElementById("menu-link");

    const currentPath = window.location.pathname;

    berandaLink.classList.remove("active");
    menuLink.classList.remove("active");

    if (currentPath === "/index.html" || currentPath === "/") {
        berandaLink.classList.add("active");
    } else if (currentPath === "/menu.html") {
        menuLink.classList.add("active");
    }
}

window.addEventListener("load", setActiveNav);
window.addEventListener("popstate", setActiveNav);