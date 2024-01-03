const productForm = document.getElementById("productForm");
const clearBtn = document.getElementById("clearBtn");
console.log(productForm);
const titleEl = document.getElementById("title");
const priceEl = document.getElementById("price");
const imageEl = document.getElementById("image");

const products = JSON.parse(localStorage.getItem("products")) ?? [];
console.log(products);
productForm.addEventListener("submit", (e) => {
  console.log("running submit");
  e.preventDefault();
  //Get form Values
  const title = titleEl.value;
  const price = priceEl.value;
  const image = imageEl.value;

  //Check for empty Values
  if (title == "" || price == "" || image == "") {
    alert("All Fields are required");
    return;
  }
  //Created a rondom Id 0-1000
  const id = Math.floor(Math.random() * 1000);
  console.log(id);
  //Create a product Object from the values
  const newProduct = {
    id,
    title,
    price,
    image,
  };
  //Clear the form
  titleEl.value = "";
  priceEl.value = "";
  imageEl.value = "";

  //Add Our Object into the productS Array
  products.push(newProduct);

  //Save the Array to the Localstorage
  localStorage.setItem("products", JSON.stringify(products));
  console.log(products);
  //Redirect to the homepage
  window.location.assign("/");
});
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("products");
});
