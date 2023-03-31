const userAPIurl = `https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/users`;

const inputs = document.querySelectorAll(".input");

let dataBase;

fetch(`https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/users`)
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    dataBase = data;
    })

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

let loginbtn = document.getElementById("login");
let signupbtn = document.getElementById("signup");
let detailslog = document.getElementById("login-info");
let detailssign = document.getElementById("sigup-info");

loginbtn.addEventListener("click",()=>{
    signupbtn.classList.remove("selected");
    loginbtn.classList.add("selected"); 
    detailssign.classList.add("noshow");
    detailslog.classList.remove("noshow");
    document.getElementById("submit").value = "Login";

})

signupbtn.addEventListener("click",()=>{
    signupbtn.classList.add("selected");
    loginbtn.classList.remove("selected");    
    detailslog.classList.add("noshow");
    detailssign.classList.remove("noshow");
    document.getElementById("submit").value = "Sign Up";
})

let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(document.getElementById("submit").value == "Login")
    login();
    else
    signup();
})

function login(){
    console.log("Inside login button");
    console.log(document.getElementById("username"))
    logincall(document.getElementById("username").value,document.getElementById("password").value);
}

function signup(){
    console.log("Inside signup button");
    register(document.getElementById("first-name").value,document.getElementById("second-name").value,document.getElementById("email").value,document.getElementById("signpass").value);
}


function logincall(user,pass){
    console.log(user,pass);
    fetch(`https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/users`)
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    dataBase = data;

    for(let i = 0 ; i<dataBase.length ; i++)
    {
        if(dataBase[i].email == user && dataBase[i].password === pass)
        {
            alert("login Sucessfull");
            localStorage.setItem("login-info",dataBase[i]);
            window.location.href = "./index.html";
        }
    }
})
}
function register(fname,lname,email,pass){
    let obj = {
        firstname:fname,
        lastname : lname,
        email:email,
        password: pass,
        id: dataBase.length+1
    }
    if(verify(obj.email)){
        alert("Email verified");
    fetch(`https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/users`,{
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body :JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
    console.log(data);
    localStorage.setItem("login-info",data);
    })
    console.log(obj);
    }
    else
    {
        console.log("Error in login check the info provided");
    }

}


function verify(email){
    const fname = document.getElementById('first-name');
    const lname = document.getElementById('second-name');
    const otp = Math.floor(Math.random() * 9000 + 1000);
    let ebody = `
    <h2>Hi</h2>
    <h3>${fname.value}${lname.value},</h3>
    <h1>YOUR OTP is ${otp}</h1>
    `;

    Email.send({
        SecureToken : "2521c93e-d04f-4e79-b347-e4320a19584f", //add your token here
        To : email, 
        From : "sanjucool1000@gmail.com",
        Subject : "Registration Verification DFabrica",
        Body : ebody
    }).then(
      message => alert('OTP sent to mail :: dont forget to check the Spam :)')
    );

    if(otp==inotp())
    return true;
    else
    return false;
}

function inotp(){
    let save = document.body.innerHTML;
    document.body.innerHTML = `<div class="otp-container">
    <form action="#">
      <div class="input-field">
        <input type="number" />
        <input type="number" disabled />
        <input type="number" disabled />
        <input type="number" disabled />
      </div>
      <button>Verify OTP</button>
</div>`;

}