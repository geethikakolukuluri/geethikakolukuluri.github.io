const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// Background Parallax
document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".blob-shape");
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  
  blobs.forEach((blob, index) => {
    const factor = (index + 1) * 50;
    blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);