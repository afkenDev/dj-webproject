// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const targetDetails = event.target.nextElementSibling;
        targetDetails.classList.toggle('visible');
    });
});

// Scroll-triggered animations
const productItems = document.querySelectorAll('.product-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

productItems.forEach(item => observer.observe(item));

function scrollToNextSection() {
    const nextSection = document.querySelector('#products');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.addEventListener("scroll", function () {
    const scrollDown = document.getElementById("scroll-down");
    if (window.scrollY === 0) {
      scrollDown.style.opacity = "1"; // Voll sichtbar
    } else {
      scrollDown.style.opacity = "0"; // Langsam ausblenden
    }
  });
  