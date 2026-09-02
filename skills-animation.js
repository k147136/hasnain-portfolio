document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    function animateCircle(circle) {
        const target = parseInt(circle.getAttribute("data-percent"), 10);
        const span = circle.querySelector("span");
        let current = 0;

        const duration = 1500; // total animation time in ms
        const stepTime = 15;   // update every 15ms
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            const rounded = Math.round(current);
            circle.style.background = `conic-gradient(#08D665 0% ${rounded}%, #333 ${rounded}% 100%)`;
            span.textContent = rounded + "%";
        }, stepTime);
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCircle(entry.target);
                    observer.unobserve(entry.target); // animate only once
                }
            });
        },
        { threshold: 0.4 }
    );

    circles.forEach((circle) => observer.observe(circle));
});
