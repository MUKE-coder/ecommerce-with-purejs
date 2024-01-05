const products = JSON.parse(localStorage.getItem("products")) ?? [];
const productsContainer = document.querySelector(".products");
// console.log(products);

function renderProducts() {
  const productsHtml = products
    .map((product) => {
      return `<div class="product">
        <img
          src=${product.image}
          alt=""
        />
        <h2>${product.title}</h2>
        <p>Ugx ${product.price}</p>
        <div class="buttons">
          <button onclick="addToCart(${product.id})">Add to Cart</button>
          <button>Add to ❤</button>
        </div>
      </div>`;
    })
    .join("");
  // console.log(productsHtml);
  productsContainer.innerHTML = productsHtml;
}
renderProducts();

const cartItems = JSON.parse(localStorage.getItem("cart")) ?? [];
function addToCart(productId) {
  // Find the product using the productId
  const product = products.find((product) => product.id === productId);
  //Add the product to cart
  cartItems.push(product);
  //Add the cartItems array into localstorage
  localStorage.setItem("cart", JSON.stringify(cartItems));
  console.log(cartItems);
  //Update the cart Count
  updateCartCount();
  //Show Notification
  showNotification("Item Added successfully");
}

function updateCartCount() {
  const cartCountEl = document.getElementById("cartCount");
  cartCountEl.textContent = cartItems.length;
}
updateCartCount();
console.log(cartItems);

function showNotification(msg) {
  const msgTextEl = document.querySelector(".msg");
  const msgEl = document.querySelector(".success-msg");
  msgEl.style.display = "inline-flex";
  msgTextEl.textContent = msg;
  //hide the message after 3s

  setTimeout(() => {
    msgEl.style.display = "none";
  }, 2000);
}
