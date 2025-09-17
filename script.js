// Typing Effect for Home Section
document.addEventListener("DOMContentLoaded", function () {
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Blending creativity with code", "BTech Student", "AI Explorer"];
    let textArrayIndex = 0, charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex++);
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, --charIndex);
            setTimeout(erase, 50);
        } else {
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    setTimeout(type, 1000);
});

// Show only the requested section
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'flex';
            section.classList.add('fade-in');
        } else {
            section.style.display = 'none';
            section.classList.remove('fade-in');
        }
    });
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Show individual project section
function showProject(projectId) {
    // Hide everything first
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");

    // Show only the clicked project
    const project = document.getElementById(projectId);
    project.style.display = "flex";
    project.classList.add("fade-in");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Go back to projects
function goBack() {
    showSection('projects');
}

// Project Filter
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in');
                }
            });
        });
    });
});

// Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};
scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
