document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
  );
  reveals.forEach((el) => observer.observe(el));

  // Booking form confirmation (after Netlify redirects back)
  if (new URLSearchParams(window.location.search).has("submitted")) {
    const note = document.getElementById("form-note");
    if (note) {
      note.textContent = "Thank you — your request has been sent. I’ll be in touch within 24 hours.";
      note.classList.add("success");
    }
  }
});
