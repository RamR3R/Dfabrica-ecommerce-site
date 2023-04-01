
// link with mens.html and write the funtionalities
let urlWomens="https://dfabrica-data-app.onrender.com/products?sex=F";
let paginationwrapper=document.getElementById("pagination-wrapper");

let cardContainer = document.getElementById("card-container");

let totalcount = document.getElementById("total-count");

async function renderData(urlWomens,pageNumber){
  let totalData;
  let totalButtons;
  try {
    let res = await fetch(urlWomens);
    let data = await res.json();
    totalData=data.length;
    totalcount.innerText=`(${totalData})`;
    totalButtons= Math.ceil(totalData/9);
    paginationwrapper.innerHTML = null;

      for (let i = 1; i <= totalButtons; i++) {
        paginationwrapper.append(getAsButton(urlWomens,i, i));
        console.log(i);
      }
  } catch (error) {
    console.log(error)
  }
    try {
        let res = await fetch(`${urlWomens}&_limit=9&_page=${pageNumber}`);
        console.log(res.headers);
        let data = await res.json();
         displayData(data);
         console.log(data.length);

    } catch (error) {
        console.log(error);
    }
}
renderData(urlWomens,1);

function displayData(data){
    cardContainer.innerHTML=null;
    data.forEach((ele)=>{
        let cardDiv=document.createElement("div");

        let image = document.createElement("img");
        image.src=ele.image4;

        let brandName = document.createElement("h4");
        brandName.innerText="DFabrica";

        let productName = document.createElement("p");
        productName.innerText=ele.name;

        let price = document.createElement("h3");
        price.innerText=`₹${Math.ceil(ele["price-inr"]-(ele["price-inr"]*ele.discount)/100)}`;

        let discount=document.createElement("h4");
        discount.innerText=`${ele.discount}% off`

        let MRP= document.createElement("p");
        let cutline=document.createElement("s");
        cutline.innerText=`₹ ${ele["price-inr"]}`;
        MRP.append(cutline);

        cardDiv.append(image,brandName,productName,price,discount,MRP);
// --------------------------------------------------------------------------------------------
// data will be use for product page
// --------------------------Do Not Touch---------------------------------------------------
        let productData=[{
          "id": 1,
          "name": ele.name,
          "image1": ele.image1,
          "image2": ele.image2,
          "image3": ele.image3,
          "image4": ele.image4,
          "price-inr": ele["price-inr"],
          "price-usd": ele["price-usd"],
          "price-pound": ele["price-pound"],
          "discount": ele.discount,
          "description": ele.description,
          "sex": ele.sex,
          "category": ele.category,
          "stock": ele.stock,
          "size": ele.size,
          "rating":ele.rating
      }]
              cardDiv.addEventListener("click",()=>{
                localStorage.setItem("product", JSON.stringify(productData));
                window. location. replace("product.html") 
              })
//  ---------------------------------------------------------------------------------------------------             
        cardContainer.append(cardDiv);
    })
}
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function getAsButton(urlWomens,text, dataId) {
  let btn = document.createElement("button");
  btn.setAttribute("data-id", dataId);
  btn.innerText = text;

  btn.addEventListener("click", function (e) {
    renderData(urlWomens,e.target.dataset.id);
    console.log(e.target.dataset.id);
  });

  return btn;
}

let catfilter = document.getElementsByClassName("cat");
for(let i=0;i<catfilter.length;i++){
  catfilter[i].addEventListener("click",()=>{
    let catUrl=`${urlWomens}&category=${catfilter[i].innerText}`;
    renderData(catUrl,1);
  })
}





