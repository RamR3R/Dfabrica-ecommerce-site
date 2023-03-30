const inputs = document.querySelectorAll(".input");


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
}
function register(fname,lname,email,pass){
    let obj = {
        firstname:fname,
        lastname : lname,
        email:email,
        password: pass
    }

    console.log(obj);
}