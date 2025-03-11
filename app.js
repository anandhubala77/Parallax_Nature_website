document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    function revealOnScroll() {
        let descriptions = document.querySelectorAll(".description");
        descriptions.forEach(desc => {
            let position = desc.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                desc.classList.add("visible");
            }
        });
    }

    revealOnScroll();
    document.addEventListener("scroll", revealOnScroll);
});
