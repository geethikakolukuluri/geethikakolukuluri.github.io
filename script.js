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

// Parallax for Background Blobs
document.addEventListener("mousemove", (e) => {
  const blobs = document.querySelectorAll(".blob-shape");
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 20;
    const x = (window.innerWidth - mouseX * speed) / 100;
    const y = (window.innerHeight - mouseY * speed) / 100;
    blob.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();