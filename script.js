// Enhanced parallax effect for hero section
const heroSection = document.querySelector(".hero-section");
const floatingEmojis = document.querySelectorAll(".floating-emoji");

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const rate = Math.round(scrolled * -0.2); // FIX: Round the value to the nearest whole number

  if (heroSection) {
    heroSection.style.transform = `translateY(${rate}px)`;
  }

  // Parallax floating emojis
  floatingEmojis.forEach((emoji, index) => {
    const speed = 0.1 + index * 0.05;
    emoji.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
