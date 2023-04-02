// this is common in all pages so edit with caution


let country=document.querySelector(".country")
let flag=document.querySelector(".flag")
let img=document.querySelector(".flag>img")
let close=document.querySelector(".close")
let BotCountry=document.querySelector(".botCountry")
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
})
document.querySelector(".sc2").addEventListener("click",()=>{
 img.src="https://cdn-icons-png.flaticon.com/512/197/197484.png"
  country.style.display="none";
})
document.querySelector(".sc3").addEventListener("click",()=>{
  img.src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
  country.style.display="none";
})