let APIURLPRODUCT = "https://dfabrica-data-app.onrender.com/products";
let totalProduct = document.getElementById("totalProducts");
let APIURLUSER = "https://dfabrica-data-app.onrender.com/users";
let totalCustomer = document.getElementById("totalCustomers");

//fetching the data to print the total number Product in Inventory
async function productData() {
  try {
    let res = await fetch(APIURLPRODUCT);
    let data = await res.json();
    let productTotalData = data.length;
    totalProduct.innerText = productTotalData;
  } catch (error) {
    console.log(error);
  }
}

//fetching the data to print the total number Users

async function userData() {
  try {
    let res = await fetch(APIURLUSER);
    let data = await res.json();
    let userTotalData = data.length;
    // console.log(userTotalData);
    totalCustomer.innerText = userTotalData;
  } catch (error) {
    console.log(error);
  }
}
userData();

// getting the form
const form = document.getElementById("add-product-form");

// adding event listner on form
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent form submission

  //getting the value of all inputs so that i can POST it.
  const formData = {
    name: form.elements["name"].value,
    image1: form.elements["image1"].value,
    image2: form.elements["image2"].value,
    image3: form.elements["image3"].value,
    image4: form.elements["image4"].value,
    "price-inr": form.elements["price-inr"].value,
    "price-usd": form.elements["price-usd"].value,
    "price-pound": form.elements["price-pound"].value,
    discount: form.elements["discount"].value,
    description: form.elements["description"].value,
    sex: form.elements["sex"].value,
    category: form.elements["category"].value,
    stock: form.elements["stock"].value,
    size: form.elements["size"].value,
    rating: form.elements["rating"].value,
    color: form.elements["color"].value,
  };
  // console.log(formData);

  try {
    // const formData = new FormData(form);
    const response = await fetch(APIURLPRODUCT, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log(response);

      let productTotalData = parseInt(totalProduct.innerText);
      totalProduct.innerText = ++productTotalData;

      form.reset();
    }
  } catch (error) {
    console.log(error);
  }
});
productData();
