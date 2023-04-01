let userData = JSON.parse(localStorage.getItem("userdata"))||[];

let formData = document.getElementById("checkout");

formData.addEventListener("submit",()=>{
    console.log("form submitted");
})







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