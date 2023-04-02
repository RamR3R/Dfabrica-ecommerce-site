// This file is to linked with admin side login funtionalities
let hide = document.querySelector(".input-field-show");
let form = document.getElementById("formID");
let navImg = document.getElementById("brandImg");

let adminData;
let adminUrl = `https://dfabrica-data-app.onrender.com/admin`;
fetch(adminUrl)
.then(res=>res.json())
.then(data=>{
  adminData = data;
  console.log(data);
})

navImg.addEventListener("click", function () {
  window.location.href = "index.html";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = document.getElementById("username");
  let pass = document.getElementById("password");

  adminData.forEach(element => {
    if(element.username == user.value && element.password == pass.value)
    {
      localStorage.setItem("admin-info",JSON.stringify(element));
      alert("Login as Super Admin");
      window.location.href = "./adminDashboard.html";
    }  
  });
});




let button = document.getElementsByClassName("btn");
let input_field = document.getElementsByClassName("cont1");
window.addEventListener("load", function () {
  const cont1 = document.querySelector(".cont1");
  cont1.classList.remove("input-field-hide");
});
const cont3 = document.querySelector(".cont3");
const nextButton = document.querySelector(".cont1 button.btn");
nextButton.addEventListener("click", function (event) {
  event.preventDefault();

  const cont1 = document.querySelector(".cont1");
  cont1.classList.add("input-field-hide");

  const cont2 = document.querySelector(".cont2");
  cont2.classList.remove("input-field-hide");

  cont3.classList.remove("input-field-hide");
});
