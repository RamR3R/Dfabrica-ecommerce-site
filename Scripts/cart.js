let cartTableBody = document.getElementById("cart-table-body");
let currentUser = [{
    "id": 1,
    "name": "Women's Pink Relaxed Fit Puffer Jacket",
    "image1": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663674-6.jpg",
    "image2": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663658-3.jpg",
    "image3": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663669-5.jpg",
    "image4": "https://images.bewakoof.com/t1080/women-s-rose-solid-puffer-jackets-498989-1665663664-4.jpg",
    "price-inr": 3499,
    "price-usd": 44,
    "price-pound": 35,
    "discount": 70,
    "description": "[`Relaxed fit - Fits just right, not too tight not too loose`,`100% Nylon fabric is strong, durable and lightweight.`]",
    "sex": "F",
    "category": "Winterwear",
    "stock": 31,
    "size": "[S,M,L,XL,XXL]",
    "rating": 3.9
  }]
let totalItems = document.getElementById("total-items");
let userData = JSON.parse(localStorage.getItem("user"));
let subTotalPrice = document.getElementById("sub-total-price");
let cartTotal = document.getElementById("cart-total");
let selectDeliveryAddress = document.getElementById("select-address");
let checkoutBtn = document.getElementById("checkout-button");
let updateCartText = document.getElementById("update-cart-text");

if(currentUser.length != 0){
    updateCartText.style.display = "none";
}

let count = 1;
function createAddressList(adrs){
    let option = document.createElement("option");
        option.value = count;
        option.text = adrs.addressType;
    selectDeliveryAddress.append(option);
}


currentUser.address.forEach(adrs => {
    createAddressList(adrs);
    count++;
})




let totalPrice = 0;
let subTotal = 0;
currentUser.forEach(product => {
    totalPrice += product.price;
})

function displayCart(product){
    let cartRow = document.createElement("tr");
        let cartData = document.createElement("td");
            let cartProductImageTitle = document.createElement("div");
                cartProductImageTitle.classList.add("cart-product-image-title");

                let cartProductImage = document.createElement("div");
                    cartProductImage.classList.add("cart-product-image");

                    let productImage = document.createElement("img");
                        productImage.setAttribute("src", product.image1);
                    cartProductImage.append(productImage);

                let cartProductTitle = document.createElement("div");
                    cartProductTitle.classList.add("cart-product-title");

                    let productName = document.createElement("h4");
                        productName.innerText = product.name;

                    let productSize = document.createElement("p");
                        productSize.innerText = "Size: " +product.size;

                    let productType = document.createElement("p");
                        productType.innerText = "Type: " + product.type;

                    let productDelete = document.createElement("button");
                        productDelete.setAttribute("id", "delete-cart-product");
                        productDelete.innerText = "DELETE";

                        productDelete.addEventListener("click", () => {
                            let deleteFromCart = currentUser.cart.filter(pdt => {
                                if(product.name == pdt.name){
                                    return false;
                                }else{
                                    return true;
                                }
                            })
                            
                            currentUser.cart = deleteFromCart;
                            localStorage.setItem("current-user", JSON.stringify(currentUser));
                            let updatedUserData = JSON.parse(localStorage.getItem("current-user"));
                            cartTableBody.innerHTML = null;
                            location.reload();
                            updatedUserData.cart.forEach(p => {
                                displayCart(p);
                            })
                        })

                    cartProductTitle.append(productName, productSize, productType, productDelete);
                
                cartProductImageTitle.append(cartProductImage, cartProductTitle);
            cartData.append(cartProductImageTitle);
            
        let productPrice = document.createElement("td");
            productPrice.classList.add("cart-table-data");
            productPrice.innerText = product.price;

        let productQuantity = document.createElement("td");
            productQuantity.classList.add("cart-table-data");
            let selectQty = document.createElement("select");
                let option1 = document.createElement("option");
                let option2 = document.createElement("option");
                let option3 = document.createElement("option");
                let option4 = document.createElement("option");
                let option5 = document.createElement("option");

                option1.innerText = 1;
                option2.innerText = 2;
                option3.innerText = 3;
                option4.innerText = 4;
                option5.innerText = 5;

                option1.value = 1;
                option2.value = 2;
                option3.value = 3;
                option4.value = 4;
                option5.value = 5;

                selectQty.add(option1, null);
                selectQty.add(option2, null);
                selectQty.add(option3, null);
                selectQty.add(option4, null);
                selectQty.add(option5, null);

            productQuantity.append(selectQty);

            

        let subTotalData = document.createElement("td");
            subTotalData.classList.add("cart-table-data");
            subTotalData.innerText = product.price;

            selectQty.addEventListener("change", () => {
                subTotalData.innerText = selectQty.value*product.price;
                totalItems.innerText = currentUser.cart.length + +selectQty.value - 1 + " ITEMS";
                subTotal = +subTotalData.innerText;
                product.subTotal = subTotal;
                localStorage.setItem("current-user", JSON.stringify(currentUser));
                let updatedUser = JSON.parse(localStorage.getItem("current-user"));
                totalPrice = 0;
                updatedUser.cart.forEach(prod => {
                    totalPrice += +prod.subTotal;
                })
                subTotalPrice.innerText = "$" + (totalPrice).toFixed(2);
                cartTotal.innerText = "$"+ (totalPrice+6).toFixed(2);
            })

        cartRow.append(cartData, productPrice, productQuantity, subTotalData);
        cartTableBody.append(cartRow);
        totalPrice += subTotal;
        subTotalPrice.innerText = "$" + (totalPrice).toFixed(2);
        cartTotal.innerText = "$" + (totalPrice+6).toFixed(2);
}

totalItems.innerText = currentUser.length + " ITEMS";
currentUser.forEach(product => {
    displayCart(product);
})


checkoutBtn.addEventListener("click", () => {
    currentUser.totalPrice = (totalPrice+6).toFixed(2);
    localStorage.setItem("current-user", JSON.stringify(currentUser));
    window.location.href = "./payment.html";
})