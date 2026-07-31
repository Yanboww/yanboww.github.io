// Hamburger menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
})

//footer icon animation

const footerIcon = document.querySelector(".footer-icon");

footerIcon?.addEventListener("click", () => {
    footerIcon.getAnimations().forEach((animation) => animation.cancel());

    footerIcon.animate(
        [
            {transform: "rotate(0deg)"},
            {transform: "rotate(360deg)"}
        ],
        {
            duration: 600,
            easing: "linear"
        }
    );
})