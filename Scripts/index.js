// JS file for the landing page of the Site that is Index file


// country flag change function

let country=document.querySelector(".country")
let flag=document.querySelector(".flag")
let img=document.querySelector(".flag>img")
let close=document.querySelector(".close")
let BotCountry=document.querySelector(".botCountry")
let countryData = JSON.parse(localStorage.getItem("userCountry"))||["https://cdn-icons-png.flaticon.com/512/3909/3909444.png","India"];


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
// slider1 active function
let productContainers = [...document.querySelectorAll('.slider1')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];
let preBtn = [...document.querySelectorAll('.pre-btn')];



productContainers.forEach((item, i) => {

    let containerWidth = 650;

    setInterval(() => {
      item.scrollLeft += 930;
      setTimeout(() => {
        item.scrollLeft -= 1000;
      }, 3000); 

    }, 5000);
     
   
    
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



// slider2 active function

let firstImage = document.querySelector(".fImage1");
let firstImage1 = document.querySelector(".fImage2");



function slideshow(slide,firstImage){
  Imagein = 0;
  let upImage = document.createElement("img");
  upImage.src = slide[0]
  firstImage.append(upImage)
  
  setInterval(function(){
  Imagein++;
  
  if(Imagein==slide.length-1){
  Imagein=0;
  }
  upImage.src = slide[Imagein];
  
  firstImage.append(upImage);
  
  
  
  },2000)
  
  }
  
  
  
  let slide1 = ["https://images.bewakoof.com/uploads/grid/app/peanuts-x-snoopy-mid-new-1678791444.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081.jpg","https://images.bewakoof.com/uploads/grid/app/peanuts-x-snoopy-mid-new-1678791444.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-B3AT999-1679317081.jpg"];
  let slide2=["https://images.bewakoof.com/uploads/grid/app/new-mid-banner-anime-wo-bdayunit-1680005306.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1679900209.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-anime-wo-bdayunit-1680005306.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1679900209.jpg"]
  let slide3=["https://images.bewakoof.com/uploads/grid/app/new-mid-banner-ovrszd-srtwr-dresses-1675243399.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-bts-new--1--1678448933.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-ovrszd-srtwr-dresses-1675243399.jpg","https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg"]
  let slide4=["https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg","https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-ovrszd-srtwr-dresses-1675243399.jpg","https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-bts-new--1--1678448933.jpg"]
  window.addEventListener("load", function () {

  slideshow(slide1,firstImage)
  slideshow(slide2,firstImage)
  slideshow(slide3,firstImage1)
  slideshow(slide4,firstImage1)
 

  // add event-listeners;
  });
   

    
