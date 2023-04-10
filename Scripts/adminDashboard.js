let totalCustomers = document.getElementById("totalCustomers");
let totalProducts = document.getElementById("totalProducts");

let APIURLUSERS = "https://dfabrica-data-app.onrender.com/users";
let APIURLPRODUCTS = "https://dfabrica-data-app.onrender.com/products";

async function productData() {
  try {
    let res = await fetch(APIURLPRODUCTS);
    let data = await res.json();
    let producrTotalData = data.length;
    // console.log(producrTotalData);
    totalProducts.innerText = producrTotalData;
  } catch (error) {
    console.log(error);
  }
}
productData();
userData();
async function userData() {
  try {
    let res = await fetch(APIURLUSERS);
    let data = await res.json();
    let userTotalData = data.length;
    // console.log(userTotalData);
    totalCustomers.innerText = userTotalData;
  } catch (error) {
    console.log(error);
  }
}

const table = document.querySelector("table tbody");
const prevButton = document.querySelector("#prev-page");
const nextButton = document.querySelector("#next-page");
let currentPage = 1;
const pageSize = 10;
let totalproducts = 100;

function renderProducts(products) {
  table.innerHTML = "";
  products.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td><img src="${product.image1}" alt="Product Image"></td>
      <td>${product["price-inr"]}</td>
      <td>${product["price-usd"]}</td>
      <td>${product["price-pound"]}</td>
      <td>${product.discount}</td>
      <td>${product.description}</td>
      <td>${product.sex}</td>
      <td>${product.category}</td>
      <td>${product.stock}</td>
      <td>${product.size}</td>
      <td>${product.rating}</td>
    `;

    table.appendChild(row);
  });
}

function updatePaginationButtons() {
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentPage === Math.ceil(totalproducts / pageSize)) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function fetchProducts(page) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  fetch(
    `https://dfabrica-data-app.onrender.com/products?_limit=${pageSize}&_page=${page}`
  )
    .then((response) => {
      updatePaginationButtons();
      return response.json();
    })
    .then((products) => renderProducts(products))
    .catch((error) => console.error(error));
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchProducts(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < Math.ceil(totalproducts / pageSize)) {
    currentPage++;
    fetchProducts(currentPage);
  }
});

fetchProducts(currentPage);
