document.addEventListener("DOMContentLoaded", () => {
  // Testimonial Slider Logic
  const track = document.getElementById("testimonialTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  if (track && prevBtn && nextBtn) {
    const slides = Array.from(track.children);
    let currentIndex = 0;

    const updateSlider = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
  }
});
