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

const cartItems = [];
function addToCart(productId) {
  // Find the product using the productId
  const product = products.find((product) => product.id === productId);
  //Add the product to cart
  cartItems.push(product);
  //Add the cartItems array into localstorage
  localStorage.setItem("cart", JSON.stringify(cartItems));
  console.log(cartItems);
}
