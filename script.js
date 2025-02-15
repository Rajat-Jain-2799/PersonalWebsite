document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add fade-in effect on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    // Interactive timeline effect
    document.querySelectorAll(".timeline-item").forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("expanded");
            if (item.classList.contains("expanded")) {
                item.style.background = "#4A90E2";
                item.style.color = "white";
            } else {
                item.style.background = "#A7C7E7";
                item.style.color = "black";
            }
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Animated profile picture hover effect
    const profileImage = document.querySelector(".profile-image");
    profileImage.addEventListener("mouseover", () => {
        profileImage.style.transform = "scale(1.1) rotate(5deg)";
    });
    profileImage.addEventListener("mouseleave", () => {
        profileImage.style.transform = "scale(1) rotate(0)";
    });
});
