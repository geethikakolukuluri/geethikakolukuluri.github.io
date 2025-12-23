// Scroll Reveal Logic
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Mouse movement for background blobs
document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".blob-shape");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  blobs.forEach((blob, index) => {
    const shift = (index + 1) * 30;
    blob.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
  });
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run once on load