<<<<<<< HEAD
// link with mens.html and write the funtionalities
let urlMens="https://extinct-boa-zipper.cyclic.app/Dfabrica?sex=M";
=======
let urlMens="https://fine-puce-vulture-garb.cyclic.app/DFabrica?sex=M";
>>>>>>> 8d15971bb9b618bf45d0d6a580aaeae4dfbbd7ff
console.log("hi");

let cardContainer = document.getElementById("card-container");

async function renderData(){
  let totalData;
  try {
    let res = await fetch(urlMens);
    let data = await res.json();
    console.log(data.length);
  } catch (error) {
    console.log(error)
  }
    try {
        let res = await fetch(`${urlMens}&_limit=9&_page=1`);
        console.log(res.headers);
        let data = await res.json();
         displayData(data);
         console.log(data.length);

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
<<<<<<< HEAD



// let paginationWrapper = document.getElementById("pagination-wrapper");

// // Event listeners
// fetchAndRenderUsers(2);

// // Fetch & render users
// function fetchAndRenderUsers(pageNumber) {
//   fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
//   )
//     .then((res) => {
//       let totalPosts = res.headers.get("X-Total-Count");
//       let totalButtons = Math.ceil(totalPosts / 10);

//       paginationWrapper.innerHTML = null;

//       for (let i = 1; i <= totalButtons; i++) {
//         paginationWrapper.append(getAsButton(i, i));
//       }

//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       mainSection.innerHTML = null;

//       const cardList = getCardList(data);
//       mainSection.append(cardList);
//     });
// }

// // utilites

// function getAsButton(text, dataId) {
//   let btn = document.createElement("button");
//   btn.setAttribute("data-id", dataId);
//   btn.innerText = text;

//   btn.addEventListener("click", function (e) {
//     fetchAndRenderUsers(e.target.dataset.id);
//     console.log(e.target.dataset.id);
//   });

//   return btn;
// }
=======
>>>>>>> 8d15971bb9b618bf45d0d6a580aaeae4dfbbd7ff
