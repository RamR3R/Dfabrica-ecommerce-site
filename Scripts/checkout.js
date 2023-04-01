let userData = JSON.parse(localStorage.getItem("userdata"))||[];

let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobileno");
let doorno = document.getElementById("drno");
let street = document.getElementById("street");
let area = document.getElementById("area");
let pincode = document.getElementById("pincode");
let city = document.getElementById("city");
let state = document.getElementById("state");
let country = document.getElementById("country");
let formData = document.getElementById("checkout");
rednerUserData();
pincode.addEventListener("change",()=>{
  renderCheckoutData();
})

formData.addEventListener("submit",(e)=>{
    e.preventDefault();
    const response = confirm(`Confirm your Delivery Address
    to check it click Cancel`);
    if (response) {
    console.log('ok clicked bro');
    let obj = {
      name:name.value,
      email :email.value,
      mobile:mobile.value,
      doorno : doorno.value,
      street : street.value,
      area : area.value,
      pincode : pincode.value,
      state :state.value,
      country : country.value
    }
    localStorage.setItem("userAddress",JSON.stringify(obj))
    } else {
    console.log("cancel clicked broo!!");
    return 0;
    } 
    console.log("form submitted");
})


function rednerUserData(){
  let data = JSON.parse(localStorage.getItem("login-info"));
  name.value = `${data.firstname} ${data.lastname}`;
  email.value = data.email;  
}

function renderCheckoutData(){
  let pin = pincode.value;
  renderLocationData(pin);
}

function renderLocationData(pincode){
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAiLQ70ekD061TSmXQK007xKOCJHaUystk&components=postal_code:${pincode}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        console.log(data.results[0])
        console.log(data.results[0].geometry.location)
        let location  = data.results[0].geometry.location;
        let l = data.results[0].address_components.length;
        city.value = data.results[0].address_components[l-3].long_name;
        state.value = data.results[0].address_components[l-2].long_name;
        country.value = data.results[0].address_components[l-1].long_name;
        // let l = document.getElementById("locate");
        localStorage.setItem("user-location",JSON.stringify(location));

        // l.href =`https://maps.google.com/?q=${location.lat},${location.lng}`;
    })
    .catch(err=>console.log(err));
}





// the below code is for the otp part so don't touch it

const inputs = document.querySelectorAll(".input");
const inputnodes = document.querySelectorAll(".inputs"),
button = document.querySelector("#otp-btn");

inputnodes.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {
  const currentInput = input,
    nextInput = input.nextElementSibling,
    prevInput = input.previousElementSibling;

  if (currentInput.value.length > 1) {
    currentInput.value = "";
    return;
  }

  if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }

  if (e.key === "Backspace") {
    inputnodes.forEach((input, index2) => {
      if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }

  if (!inputnodes[3].disabled && inputnodes[3].value !== "") {
    button.classList.add("active");
    return;
  }
  button.classList.remove("active");
});
});

window.addEventListener("load", () => inputnodes[0].focus());