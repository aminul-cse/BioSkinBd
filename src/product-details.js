// Product data
const products = [
  {
    id: 1,
    name: "AEGIS AID MEN CAPSULES (For Male Infertility)",
    price: 500,
    composition: "Black Galingale, Ginseng, Dong Quai, Vitamin B12, Co-Enzyme Q10, L-Carnitine, Vitamins C, E, D, Zinc, Folic Acid, Calcium, Ashwagandha",
    indications: [
      "Male infertility",
      "Oligospermia",
      "Asthenospermia",
      "Teratospermia",
      "Sexual impotency"
    ],
    use: "1 capsule twice daily, or as directed by physician",
    packSize: "30 capsules",
    img: "./assets/images/capsule1.png"
  },
  {
    id: 2,
    name: "Product 2",
    price: 700,
    composition: "Ingredient 1, Ingredient 2",
    indications: ["Indication 1", "Indication 2"],
    use: "As directed",
    packSize: "20 capsules",
    img: "./assets/images/lotion1.png"
  },
  // Add more products similarly
];

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const product = products.find(p => p.id === id);

// Render product details
if (product) {
  const container = document.getElementById("product-details");
  container.innerHTML = `
    <div class="w-full md:w-1/2">
      <img src="${product.img}" alt="${product.name}" class="w-full rounded-md">
    </div>
    <div class="md:ml-6 mt-4 md:mt-0 w-full md:w-1/2">
      <h2 class="text-2xl font-bold">${product.name}</h2>
      <p class="text-xl font-semibold mt-2">৳${product.price}</p>

      <div class="mt-4">
        <h3 class="font-bold text-gray-700">Composition:</h3>
        <p class="text-gray-600 mt-1">${product.composition}</p>
      </div>

      <div class="mt-4">
        <h3 class="font-bold text-gray-700">Indications:</h3>
        <ul class="list-disc list-inside mt-1 text-gray-600">
          ${product.indications.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="mt-4">
        <h3 class="font-bold text-gray-700">Use:</h3>
        <p class="text-gray-600 mt-1">${product.use}</p>
      </div>

      <div class="mt-4">
        <h3 class="font-bold text-gray-700">Pack Size:</h3>
        <p class="text-gray-600 mt-1">${product.packSize}</p>
      </div>

      <a href="https://wa.me/880123456789?text=I want to buy ${product.name}"
         target="_blank"
         class="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
        Buy Now
      </a>
    </div>
  `;
}
