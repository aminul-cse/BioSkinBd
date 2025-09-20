
// Load Navbar dynamically
function loadNavbar() {
  fetch("./components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });
}

// Page load call
window.addEventListener("DOMContentLoaded", loadNavbar);

// Load footer dynamically
function loadfooter() {
  fetch("./components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
}
window.addEventListener("DOMContentLoaded", loadfooter);

// Example: dynamically redirect with message
function contactOnWhatsApp(productName) {
  const phone = "880123456789";
  const message = `Hello, I am interested in buying ${productName}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// review slider 
const slider = document.getElementById("review-slider");
const cards = slider.children;
let index = 0;

function slideReviews() {
  const cardWidth = cards[0].offsetWidth + 24; // 24 = gap-6
  index++;

  // max translate = total cards - visible cards (2) 
  const maxIndex = cards.length - 2; 
  if(index > maxIndex) index = 0;

  slider.style.transform = `translateX(-${cardWidth * index}px)`;
}

setInterval(slideReviews, 3000);

const slides = [
    { title: "SAMUI GLUTA LOTION", subtitle: "WHITENING & MOISTURIZER", image: "./assets/images/lotion1.png" },
    { title: "SAMUI SM CREAM", subtitle: "ANTI STRETCH MARK CREAM", image: "./assets/images/cream1.png" },
    { title: "SAMUI SHAMPOO", subtitle: "ANTI-HAIR LOSS & ANTI-DANDRUFF", image: "./assets/images/shampoo1.png" }
];

let currentIndex = 0;

function changeSlide() {
    const title = document.getElementById("hero-title-text");
    const subtitle = document.getElementById("hero-subtitle-text");
    const productImg = document.getElementById("hero-product");

    currentIndex = (currentIndex + 1) % slides.length;

    // Animate fade out + scale down
    productImg.classList.remove("scale-big");
    productImg.classList.add("scale-small");
    title.classList.add("opacity-0", "-translate-y-2");
    subtitle.classList.add("opacity-0", "-translate-y-2");

    setTimeout(() => {
        // Update content
        productImg.src = slides[currentIndex].image;
        title.textContent = slides[currentIndex].title;
        subtitle.textContent = slides[currentIndex].subtitle;

        // Animate fade in + scale up
        productImg.classList.remove("scale-small");
        productImg.classList.add("scale-big");
        title.classList.remove("opacity-0", "-translate-y-2");
        subtitle.classList.remove("opacity-0", "-translate-y-2");
    }, 600); // half of transition duration
}

// Initialize first slide
const titleInit = document.getElementById("hero-title-text");
const subtitleInit = document.getElementById("hero-subtitle-text");
const productImgInit = document.getElementById("hero-product");

titleInit.textContent = slides[0].title;
subtitleInit.textContent = slides[0].subtitle;
productImgInit.src = slides[0].image;
productImgInit.classList.add("scale-big", "fade-scale");

setInterval(changeSlide, 4000);
