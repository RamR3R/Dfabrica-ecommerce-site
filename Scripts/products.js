// Js file for appending all the individual product data in the DOM

// flag change 

let country=document.querySelector(".country")
let flag=document.querySelector(".flag")
let img=document.querySelector(".flag>img")
let close=document.querySelector(".close")
let BotCountry=document.querySelector(".botCountry")
let flagDelivery=document.querySelector(".flagDelivery")
let countryData = JSON.parse(localStorage.getItem("userCountry"));


flag.addEventListener("click",()=>{
  BotCountry.style.display="flex";
  country.style.display="flex";
})
close.addEventListener("click",()=>{
  BotCountry.style.display="none";
  country.style.display="none";
 })
 
 
document.querySelector(".sc1").addEventListener("click",(e)=>{
  country.style.display="none";
  BotCountry.style.display="none";
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/3909/3909444.png","India"]));
  window.location.reload()
})
document.querySelector(".sc2").addEventListener("click",()=>{
  country.style.display="none";
  BotCountry.style.display="none";
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/197/197484.png","USA"]));
  window.location.reload()
})
document.querySelector(".sc3").addEventListener("click",()=>{
  country.style.display="none";
  BotCountry.style.display="none";
  localStorage.setItem("userCountry", JSON.stringify(["https://cdn-icons-png.flaticon.com/512/197/197374.png","UK"]));
  window.location.reload()
})

img.src=countryData[0]
flagDelivery.src=countryData[0]

// -----------------------------------------------------
let data=JSON.parse(localStorage.getItem("product"))
console.log(data)
// data=data[0]
function stringToArray(string){
  let arr ;

  string = string.slice(1,-1);
  arr = string.split(`,`);
  console.log(arr);
  return arr;
}
let mainImg=document.querySelector(".mainImg")
let smallImg=document.getElementsByClassName("smallImg")
let price=document.querySelector(".priceTag")
let rating=document.querySelector(".rating h3")
let item=document.querySelector(".big>div img");
let zoomImg=document.querySelector(".zoomImg")
let zoomedImg=document.querySelector(".zoomImg img")
let detailsProduct=document.querySelector(".detailsProduct")
let nameOfProduct=document.querySelector(".nameOfProduct")
let categoryOfProduct=document.querySelector(".categoryP")
let sizeBox=document.querySelectorAll(".sizeBox div")
// let dummyData=localStorage.setItem("myData",JSON.stringify(data))||data
// let dataC=localStorage.getItem(JSON.stringify("myData"))
let cartBtn=document.querySelector(".cart")
let wishBtn=document.querySelector(".wish")

let cart=JSON.parse(localStorage.getItem("cart"))||[];

let wish=JSON.parse(localStorage.getItem("wish"))||[];

function displayData(data){
  data.forEach((e) => {
    mainImg.src=e.image4
  smallImg[0].src=e.image4
  smallImg[1].src=e.image3
  smallImg[2].src=e.image2  
  smallImg[3].src=e.image1  

  
  
  if(countryData[1]==="India"){
    price.innerHTML="₹"+e["price-inr"]
  }
  if(countryData[1]==="USA"){
    price.innerHTML="$"+e["price-usd"]
  }
  if(countryData[1]==="UK"){
    price.innerHTML="£"+e["price-pound"]
  }
  rating.innerText=e.rating
  nameOfProduct.innerHTML=e.name

  
let ul = document.createElement("ul");
let desc = stringToArray(e.description);
console.log(desc);
desc.forEach((ele) => {
  
  let li = document.createElement("li");
  li.innerText = ele;
  ul.append(li);
});
  detailsProduct.append(ul)
  categoryOfProduct.innerText=`Category:${e.category}`




  let productData={
    "id": e.id,
    "name": e.name,
    "image1": e.image1,
    "image2": e.image2,
    "image3": e.image3,
    "image4": e.image4,
    "price-inr": e["price-inr"],
    "price-usd": e["price-usd"],
    "price-pound": e["price-pound"],
    "discount": e.discount,
    "description": e.description,
    "sex": e.sex,
    "category": e.category,
    "stock": e.stock,
    "size": e.size,
    "rating":e.rating
};



cartBtn.addEventListener("click",()=>{

  cart.push(productData)
  localStorage.setItem("cart", JSON.stringify(cart));
        })
        
console.log(productData.id)
        wishBtn.addEventListener("click",()=>{
          // wish= new set(wish)
          wish.push(productData)
          
         localStorage.setItem("wish", JSON.stringify(wish));
         
          })
         

                })


 
}

displayData(data)
// displayData(dummyData)
zoomedImg.src=smallImg[0].src;

// -----------------------------------------
// size box styling
sizeBox[0].addEventListener("click",()=>{
  sizeBox[0].style["box-shadow"]="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
  sizeBox[1].style["box-shadow"]="none";
  sizeBox[2].style["box-shadow"]="none";
  sizeBox[3].style["box-shadow"]="none";
  sizeBox[4].style["box-shadow"]="none";
})
sizeBox[1].addEventListener("click",()=>{
  sizeBox[1].style["box-shadow"]="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
  sizeBox[0].style["box-shadow"]="none";
  sizeBox[2].style["box-shadow"]="none";
  sizeBox[3].style["box-shadow"]="none";
  sizeBox[4].style["box-shadow"]="none";

}) 
sizeBox[2].addEventListener("click",()=>{
  sizeBox[2].style["box-shadow"]="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
  sizeBox[0].style["box-shadow"]="none";
  sizeBox[1].style["box-shadow"]="none";
  sizeBox[3].style["box-shadow"]="none";
  sizeBox[4].style["box-shadow"]="none";
})
sizeBox[3].addEventListener("click",()=>{
  sizeBox[3].style["box-shadow"]="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
  sizeBox[0].style["box-shadow"]="none";
  sizeBox[2].style["box-shadow"]="none";
  sizeBox[1].style["box-shadow"]="none";
  sizeBox[4].style["box-shadow"]="none";
})
sizeBox[4].addEventListener("click",()=>{
  sizeBox[4].style["box-shadow"]="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
  sizeBox[0].style["box-shadow"]="none";
  sizeBox[2].style["box-shadow"]="none";
  sizeBox[3].style["box-shadow"]="none";
  sizeBox[1].style["box-shadow"]="none";
})


// ----------------------------------------------------------
// main image changing function



smallImg[0].addEventListener("click",()=>{
  mainImg.src=smallImg[0].src;
  zoomedImg.src=smallImg[0].src;
})

smallImg[1].addEventListener("click",()=>{
  mainImg.src=smallImg[1].src;
  zoomedImg.src=smallImg[1].src;
})
smallImg[2].addEventListener("click",()=>{
  mainImg.src=smallImg[2].src;
  zoomedImg.src=smallImg[2].src;
})
smallImg[3].addEventListener("click",()=>{
  mainImg.src=smallImg[3].src;
  zoomedImg.src=smallImg[3].src;
})


// -----------------------------------------------------------
// zoom effect



item.addEventListener("mousemove",(e)=>{
zoomImg.style.display="block"
let y=(e.clientY/308)
let x=(e.clientX-345)/(514-365)

console.log(x,y)

if(x>=3){
  x=3
}

  
zoomedImg.style.transform=`translate3d(-${200*1.6*x}px,-${520*y}px,0px)`

})
item.addEventListener("mouseleave",()=>{
  zoomImg.style.display="none"
})


// ------------------------------------------------
// add to cart function
