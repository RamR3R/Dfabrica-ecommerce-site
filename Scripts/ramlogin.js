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

let login = document.getElementById("login");
let signup = document.getElementById("signup");

login.addEventListener("click",()=>{
    signup.classList.remove("selected");
    login.classList.add("selected");    
})

signup.addEventListener("click",()=>{
    signup.classList.add("selected");
    login.classList.remove("selected");    
})