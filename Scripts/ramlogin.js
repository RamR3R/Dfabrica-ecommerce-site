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