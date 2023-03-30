// link with mens.html and write the funtionalities
let urlMens="https://fine-puce-vulture-garb.cyclic.app/DFabrica?sex=M";
console.log("hi");

let cardContainer = document.getElementById("card-container");

async function renderData(){
    try {
        let data = await fetch(urlMens);
         data = await data.json();
         displayData(data);
         console.log(data);

    } catch (error) {
        console.log(error);
    }
}
renderData();

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
        price.innerText=ele["price-inr"]

        cardDiv.append(image,brandName,productName,price);
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