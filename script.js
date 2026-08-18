```javascript
/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-item");

function updateNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 250;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            `#${currentSection}`
        ) {
            item.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateNavigation
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".project, .skill-category, .timeline-item, .about-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================================
   TERMINAL TYPING EFFECT
===================================================== */

const terminalText =
    document.querySelector(".terminal-label");

if (terminalText) {

    const originalText =
        terminalText.innerHTML;

    terminalText.innerHTML = "";

    let index = 0;

    function typeTerminal() {

        if (index < originalText.length) {

            terminalText.innerHTML =
                originalText.substring(
                    0,
                    index + 1
                );

            index++;

            setTimeout(
                typeTerminal,
                30
            );

        }

    }

    setTimeout(
        typeTerminal,
        500
    );

}


/* =====================================================
   PROJECT HOVER
===================================================== */

const projects =
    document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener(
        "mouseenter",
        () => {

            project.style.setProperty(
                "--mouse-x",
                "50%"
            );

        }
    );

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
`
%c Aaron Talalla
%c Cybersecurity Portfolio

> System online.
> Attack surface: expanding.
> Defensive posture: improving.

github.com/artalalla
`,
"color:#9cff57;font-size:20px;font-weight:bold;",
"color:#777;font-size:12px;"
);
```
