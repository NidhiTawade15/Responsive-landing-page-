// Get navigation bar
const navbar = document.getElementById("navbar");
// Change navbar style when scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});
// Contact button
function showMessage() {
    alert(
        "Thank you for contacting Prodigy Infotech!"
    );
}