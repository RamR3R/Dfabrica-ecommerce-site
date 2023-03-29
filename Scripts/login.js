// Login and Signup can use same JS file for funtionalities


//create account for users //

let home=document.querySelector("#home");

home.addEventListener("click",()=>{
    window.location.href="index.html";
});

let UserForm=JSON.parse(localStorage.getItem('user'))||[];
let formSubmit=document.querySelector("#form");


formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    let fName = document.querySelector("#firstName").value;
    let lName = document.querySelector("#lastName").value;
    let name = fName + " " + lName;
    let email = document.querySelector("#email").value;
    let gender = document.getElementsByName("gender");
    let password = document.querySelector("#password").value;
    let confirm_pass = document.getElementById("verifyPass");
    let zipCode = document.querySelector("#ZipCode").value;
    let phoneNumber = document.querySelector("#Phone").value;
    let brtdyMonth = document.querySelector("#birthMonth").value;
    let brtdate = document.querySelector("#birthDay").value;
    let birthDay = brtdyMonth + " " + brtdate;

    UserForm.forEach(element => {
        if(element.email == email){
            alert("User already exists..!");
            email.focus();
            return false;
        }
    });

    let selectedGender = null;
    for(let el of gender){
        if(el.checked){
            selectedGender = el.value;
        }
    }

    if(password.length < 8){
        alert("Please Create password as per the condition..!");
        password.focus();
        return false;
    }
    if(password != confirm_pass.value){
        alert("Password didn't match..!");
        confirm_pass.focus();
        return false;
    }

    var obj={
        name: name,
        email: email,
        password:password,
        zipCode: +zipCode,
        phone: +phoneNumber,
        gender: selectedGender,
        Birthday: birthDay, 
        address: [],
        orders: [],
        cart: []
    }
    
   UserForm.push(obj);

   localStorage.setItem("user", JSON.stringify(UserForm));


    fName.value = "";
    lName.value = "";
    email.value = "";
    gender.value = "";
    password.value = "";
    confirm_pass.value = "";
    zipCode.value = "";
    phoneNumber.value = "";
    brtdyMonth.value = "";
    brtdate.value = "";

    alert("Account Created Successfully...!")
    window.location.href = "./logIn.html";

});


     