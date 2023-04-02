
let countrys=document.querySelector(".country")
let flags=document.querySelector(".flag")
let imgs=document.querySelector(".flag>img")
let closes=document.querySelector(".close")
let BotCountrys=document.querySelector(".botCountry")
let countryData = JSON.parse(localStorage.getItem("userCountry"))||["https://cdn-icons-png.flaticon.com/512/3909/3909444.png","India"];


flags.addEventListener("click",()=>{
  BotCountry.style.display="flex";
  countrys.style.display="flex";
})
closes.addEventListener("click",()=>{
  BotCountrys.style.display="none";
  countrys.style.display="none";
 })
 
 
document.querySelector(".sc1").addEventListener("click",(e)=>{
  countrys.style.display="none";
  BotCountrys.style.display="none";
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/3909/3909444.png","India"]));
  window.location.reload()
})
document.querySelector(".sc2").addEventListener("click",()=>{
  countrys.style.display="none";
  BotCountrys.style.display="none";
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/197/197484.png","USA"]));
  window.location.reload()
})
document.querySelector(".sc3").addEventListener("click",()=>{
  countrys.style.display="none";
  BotCountrys.style.display="none";
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/197/197374.png","UK"]));
  window.location.reload()
})

imgs.src=countryData[0]
// link with mens.html and write the funtionalities
let urlMens="https://dfabrica-data-app.onrender.com/products?sex=M";
let paginationwrapper=document.getElementById("pagination-wrapper");

let cardContainer = document.getElementById("card-container");
let loader = document.querySelector(".loader");
loader.style.display = 'block';
let totalcount = document.getElementById("total-count");
let cat ="";
let rate = 0;
let dis = 0;
let sort = document.getElementById("filter-sorting-whole");

sort.addEventListener("change",()=>{
  renderData(urlMens,1);
})


async function renderData(urlMen,pageNumber){
  let totalData;
  let totalButtons;
  try {
    loader.style.display = 'block';
    let res = await fetch(urlMen);
    let data = await res.json(); 
    totalData=data.length;
    totalcount.innerText=`(${totalData})`;
    totalButtons= Math.ceil(totalData/9);
    paginationwrapper.innerHTML = null;
    loader.style.display = 'none';

      for (let i = 1; i <= totalButtons; i++) {
        paginationwrapper.append(getAsButton(urlMen,i, i));
      }
  } catch (error) {
    console.log(error)
  }
    try {
      if(cat)
      {
        urlMen +=cat;
      }
      console.log(urlMen);
        let res = await fetch(`${urlMen}&_limit=9&_page=${pageNumber}`);
        console.log(res.headers);
        let data = await res.json();
        if(sort)
        {
            if(sort.value=="rating")
            {
              data.sort((a,b)=>a.rating-b.rating);
            }
            else if(sort.value=="asc")
            {
              data.sort((a,b)=>a.discountPriceInr-b.discountPriceInr);
            }
            else{
              data.sort((a,b)=>b.discountPriceInr-a.discountPriceInr);
        }
        }
         displayData(data);
         console.log(data);
         console.log(data.length);

    } catch (error) {
        console.log(error);
    }
}
renderData(urlMens,1);

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

        let discount=document.createElement("h4");
        discount.innerText=`${ele.discount}% off`

        let MRP= document.createElement("p");
        let cutline=document.createElement("s");
  if(countryData[1]==="India"){
    cutline.innerText="₹"+ele["price-inr"]
    price.innerText=`₹${Math.ceil(ele["price-inr"]-(ele["price-inr"]*ele.discount)/100)}`;
  }
  if(countryData[1]==="USA"){
    cutline.innerText="$"+ele["price-usd"]
    price.innerText=`$${Math.ceil(ele["price-usd"]-(ele["price-usd"]*ele.discount)/100)}`;
  }
  if(countryData[1]==="UK"){
    cutline.innerText="£"+ele["price-pound"]
    price.innerText=`£${Math.ceil(ele["price-pound"]-(ele["price-pound"]*ele.discount)/100)}`;
  }
        MRP.append(cutline);

        cardDiv.append(image,brandName,productName,price,discount,MRP);

        // --------------------------------------------------------------------------------------------
// data will be use for product page
// --------------------------Do Not Touch---------------------------------------------------
let productData=[{
    "id": ele.id,
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
    // ------------------------------------------------------------------------------------------------------
        cardContainer.append(cardDiv);
    })
}
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      coll[i].style.borderRadius = "20px";
      content.style.display = "none";
    } else {
      content.style.display = "block";
      coll[i].style.borderRadius = "20px 20px 0px 0px";
    }
  });
}

function getAsButton(urlMen,text, dataId) {
  let btn = document.createElement("button");
  btn.setAttribute("data-id", dataId);
  btn.innerText = text;

  btn.addEventListener("click", function (e) {
    renderData(urlMen,e.target.dataset.id);
    console.log(e.target.dataset.id);
  });

  return btn;
}

let catfilter = document.getElementsByClassName("cat");
for(let i=0;i<catfilter.length;i++){
  catfilter[i].addEventListener("click",()=>{
    console.log(cat,catfilter[i].innerText);
    cat = catfilter[i].innerText;
    renderData(urlMens,1);
  })
}






