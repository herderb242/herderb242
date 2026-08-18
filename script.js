/* =========================================
   HERO NETWORK INTERACTION
========================================= */

const network = document.querySelector(".network");

if (network) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 12;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 12;

        network.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================================
   NAVBAR
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(7,8,13,.94)";

    } else {

        navbar.style.background =
            "rgba(7,8,13,.72)";

    }

});


/* =========================================
   REVEAL ANIMATIONS
========================================= */

const elements = document.querySelectorAll(
    ".project, .approach-item, .experience-item, .skills-grid > div"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        `opacity .7s ease ${index * .05}s,
         transform .7s ease ${index * .05}s`;

    observer.observe(element);

});
