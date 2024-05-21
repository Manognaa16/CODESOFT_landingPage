//javaScript
const menuButton = document.getElementById("menu-button-nav");
const navTabs = document.getElementById("nav-tabs");
const btnIcon = menuButton.querySelector("i");

console.log("working");
console.log(navTabs);
menuButton.addEventListener("click",(e) => {
    navTabs.classList.toggle("open");

    const isOpen=navTabs.classList.contains("open");
    btnIcon.setAttribute("class", isOpen ?"ri-close-line" : "ri-menu-line");
});

navTabs.addEventListener("click", (e) => {
    navTabs.classList.remove("open");
    btnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevell = {
    distance: "100px",
    origin: "top",
    duration: 1000,
};

ScrollReveal().reveal(".img img", {
    ...scrollRevell,
    origin: "right",
});

ScrollReveal().reveal(".content h2", {
    ...scrollRevell,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".content h1", {
    ...scrollRevell,
    origin: "left",
    delay: 1000,
});

ScrollReveal().reveal(".content p", {
    ...scrollRevell,
    origin: "left",
    delay: 1500,
});

ScrollReveal().reveal(".content-btn", {
    ...scrollRevell,
    origin: "left",
    delay: 2000,
});