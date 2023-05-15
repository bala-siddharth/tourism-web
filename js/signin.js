
let emailE1=document.getElementById("email");
let emailErrMsg=document.getElementById("emailErrMsg");

let passwordE1=document.getElementById("password");
let passwordErrMsg=document.getElementById("passwordErrMsg");

let myFormE1=document.getElementById("myForm");


emailE1.addEventListener("blur",function(event) {
    if(event.target.value===""){
        emailErrMsg.textContent="Required*";
    }else{
        emailErrMsg.textContent="";
    }
});

passwordE1.addEventListener("blur",function(event){
    if(event.target.value===""){
        passwordErrMsg.textContent="Required*";
    }else{
        passwordErrMsg.textContent="";
    }
});

myFormE1.addEventListener("submit",function(event){
    event.preventDefault();
});

