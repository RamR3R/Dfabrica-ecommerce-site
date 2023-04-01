let currentUser = JSON.parse(localStorage.getItem("current-user"));

let dummyData=  [{
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

  

  let Container = document.getElementById("cart-container");
  
 
 

function displayCart(product){
    
                        /* my code start here */
 
                        let total=document.getElementById("cart-total");
                        Container.innerHTML="";

                        currentUser.forEach((product) =>{
                            let card = document.createElement("div");
                            let image=document.createElement("img");
                            let cartProductTitle = document.createElement("h2");
                            let productName = document.createElement("h2");
                            let productCategory=document.createElement("h2");
                            let productDescription=document.createElement("h4");
                        let productDiscount=document.createElement("p");
                       let productPriceinr=document.createElement("p");
                       let productRating=document.createElement("p");
                    let productsex=document.createElement("p");
                       let productSize = document.createElement("p");
                      let productStock = document.createElement("p");
                      let quantity = document.createElement("span");

                      let Remove = document.createElement("button");
                     let Increment = document.createElement("button");
                     let Decrement = document.createElement("button");

                     quantity.textContent=product.quantity

                     Remove.textContent = "Remove";
                     Increment.textContent="+";
                     Decrement.textContent="-";

                      image.src = product.img;
                      cartProductTitle.textContent=product.cartProductTitle;
                      productName.textContent=product.productName;
                      productCategory.textContent=product.productCategory;
                      productDescription.textContent=product.productDescription;
                      productDiscount.textContent="Discount : "+product.discount; 
                      productPriceinr.textContent="Price-INR : "+product["price-inr"];
                      productRating.textContent="Rating : "+product.rating;
                      productsex.textContent=="Gender : "+product.sex; 
                      productSize.textContent="Size: " +product.size;
                      productStock.textContent="Stock : "  +product.stock;

                      Remove.addEventListener("click", () => {
                        currentUser=currentUser.filter((ele)=>{
                          return ele.id!==product.id
                        })
                        localStorage.setItem("current-user",JSON.stringify(currentUser))
                        displayCart();
                    });


                    Increment.addEventListener("click", () => {
                        product=product.quantity++
                        localStorage.setItem("current-user",JSON.stringify(currentUser))
                        displayCart();
                      });
                      Decrement.addEventListener("click", () => {
                        if(product.quantity>1){
                          product=product.quantity--
                        localStorage.setItem("current-user",JSON.stringify(currentUser))
                        displayCart();
                        }
                      });
                      card.append(image,cartProductTitle,productName,productCategory,productDescription,productDiscount,productPriceinr,productRating,productsex,productSize,productStock,quantity,Increment,Decrement,Remove);
                      Container.append(card);
                    });
                    let sum=0
                      for(let i=0;i<currentUser.length;i++){
                         sum+=currentUser[i].productPriceinr*currentUser[i].quantity
                     }
                    total.textContent=sum

                     }
                     displayCart();


                


                    

               
               

       