/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".project-card, .principle, .timeline-item, .skill-group, .intro-content, .contact-box"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 80);

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   MOUSE PARALLAX FOR HERO
========================================================= */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================================================
   NAVBAR BACKGROUND
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(7, 8, 12, 0.92)";

    } else {

        navbar.style.background =
            "rgba(7, 8, 12, 0.78)";

    }

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
