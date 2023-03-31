// Js file for appending all the individual product data in the DOM

// flag change 

let country=document.querySelector(".country")
let flag=document.querySelector(".flag")
let img=document.querySelector(".flag>img")
let close=document.querySelector(".close")
let BotCountry=document.querySelector(".botCountry")
let flagDelivery=document.querySelector(".flagDelivery")
flag.addEventListener("click",()=>{
  BotCountry.style.display="flex";
  country.style.display="flex";
})
close.addEventListener("click",()=>{
  BotCountry.style.display="none";
  country.style.display="none";
 })

document.querySelector(".sc1").addEventListener("click",(e)=>{
  img.src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png"
  country.style.display="none";
  BotCountry.style.display="none";
  flagDelivery.src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png"
})
document.querySelector(".sc2").addEventListener("click",()=>{
 img.src="https://cdn-icons-png.flaticon.com/512/197/197484.png"
  country.style.display="none";
  BotCountry.style.display="none";
  flagDelivery.src="https://cdn-icons-png.flaticon.com/512/197/197484.png"
})
document.querySelector(".sc3").addEventListener("click",()=>{
  img.src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
  country.style.display="none";
  BotCountry.style.display="none";
  flagDelivery.src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
})
// -----------------------------------------------------
let data=[{
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
  "rating":3.9
}];
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
let dummyData=localStorage.setItem("myData",JSON.stringify(data))||data
let dataC=localStorage.getItem(JSON.stringify("myData"))
console.log(dataC)
function displayData(data){
  data.forEach((e) => {
    mainImg.src=e.image4
  smallImg[0].src=e.image4
  smallImg[1].src=e.image3
  smallImg[2].src=e.image2  
  smallImg[3].src=e.image1  
  price.innerHTML=e["price-inr"]
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
  });
 
}



  

displayData(dummyData)
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