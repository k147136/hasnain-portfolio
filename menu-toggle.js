// Hamburger menu toggle for mobile
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    header.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".submenu a").forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("active");
    });
});
