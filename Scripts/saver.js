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
    window.location.href = "./index.html";
    })
    console.log(obj);
    }
    else
    {
        console.log("Error in login check the info provided");
    }

}

function verify(email){
    
    let  check = displayOtp(otp);
    if(check)
    {
        alert("Logged In");
        localStorage.setItem("login-info",data);
        window.location.href = "./index.html";
    }
}

function displayOtp(n){
    document.getElementById("otp-main").classList.add("show");
    document.getElementById("otp-main").classList.remove("noshow");
    button.addEventListener("click",()=>{
        let otp = "";
        for(let i = 0  ;i<4 ;i++)
        {
            otp+=inputnodes[i].value;
        }    
        console.log(otp);
        if(n==otp){
            alert("Email verified");
            window.location.href = "./index.html";
        }
        else{
            alert("Invalid OTP");
            window.location.href = "./LoginNew.html";
        }
    })

    let cancel = document.getElementById("cancel");
    cancel.addEventListener("clcik",()=>{
        window.location.href = "./LoginNew.html";
    })
}