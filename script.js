```javascript
// =========================================================
// NAVBAR — add shadow when scrolling
// =========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.borderBottomColor = "rgba(0,0,0,0.15)";
    } else {
        navbar.style.borderBottomColor = "rgba(0,0,0,0.08)";
    }

});


// =========================================================
// REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .experience-item, .skill-row"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.opacity = "";

        if (link.getAttribute("href") === `#${current}`) {
            link.style.opacity = "0.45";
        }

    });

});


// =========================================================
// YEAR
// =========================================================

const year = document.querySelector("footer span");

if (year) {
    year.textContent =
        `© ${new Date().getFullYear()} Aaron Talalla`;
}
```
