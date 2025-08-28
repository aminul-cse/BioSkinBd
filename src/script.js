
// Load Navbar dynamically
function loadNavbar() {
  fetch("./components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });
}

// Page load হলে কল হবে
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