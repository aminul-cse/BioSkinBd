// product-list.js
const products = [
  { id: 1, name: "AEGIS AID MEN CAPSULES", price: 500, img: "./assets/images/capsule1.png" },
  { id: 2, name: "SAMUI GLUTA LOTION", price: 500, img: "./assets/images/lotion1.png" },
  { id: 3, name: "SERENE SOAP", price: 500, img: "./assets/images/soap1.png" },
  { id: 4, name: "SAMUI SM CREAM", price: 500, img: "./assets/images/cream1.png" },
  { id: 5, name: "JUST MODERN HAIR TONIC", price: 500, img: "./assets/images/oil1.png" },
  { id: 6, name: "SAMUI SUN CREAM", price: 500, img: "./assets/images/cream4.png" },
  { id: 7, name: "SAMUI FOOT CREAM", price: 500, img: "./assets/images/cream3.png" },
  { id: 8, name: "LUMINE CAPSULES", price: 500, img: "./assets/images/capsule2.png" },
  { id: 9, name: "SAMUI KETO BAR", price: 500, img: "./assets/images/soap2.png" },
  { id: 10, name: "SAMUI ACNE CREAM", price: 500, img: "./assets/images/cream2.png" },
  { id: 11, name: "ASEP SOAP", price: 500, img: "./assets/images/soap3.png" },
  { id: 12, name: "SAMUI SHAMPOO", price: 500, img: "./assets/images/shampoo1.png" },
  { id: 13, name: "SAMUI SPOT & ACNE CLEAR SOAP", price: 500, img: "./assets/images/soap4.png" },
  { id: 14, name: "SATINY SOAP", price: 500, img: "./assets/images/soap5.png" },
];

const grid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("a");
  card.href = `product-details.html?id=${product.id}`;
  card.className = "bg-white rounded-lg shadow-md p-4 flex flex-col h-72 hover:shadow-xl transition-shadow";

  card.innerHTML = `
    <div class="flex-1 flex items-center justify-center">
      <img src="${product.img}" alt="${product.name}" class="max-h-40 object-contain rounded-md">
    </div>
    <h3 class="mt-2 text-lg font-semibold text-center">${product.name}</h3>
    <p class="text-gray-600 text-center">৳${product.price}</p>
  `;

  grid.appendChild(card);
});
