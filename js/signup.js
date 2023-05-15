let emailSign=document.getElementById("emailSign");
let emailSignErrMsg=document.getElementById("emailSignErrMsg");

let passwordSign=document.getElementById("passwordSign");
let passwordSignErrMsg=document.getElementById("passwordSignErrMsg");

let conformPasswordSign=document.getElementById("conformPasswordSign");
let conformPasswordSignErrMsg=document.getElementById("conformPasswordSignErrMsg");

let myFormSign=document.getElementById("myFormSign");

let formData={
    email:"",
    createPassword:"",
    conformPassword:"" 
};


emailSign.addEventListener("change",function(event){
    if(event.target.value===""){
        emailSignErrMsg.textContent="Required*";
    }else{
        emailSignErrMsg.textContent="";
    }
    formData.email=event.target.value;
});

passwordSign.addEventListener("change",function(event){
    if(event.target.value===""){
        passwordSignErrMsg.textContent="Required*";
    }else{
        passwordSignErrMsg.textContent="";
    }
    formData.password=event.target.value;
});

conformPasswordSign.addEventListener("change",function(event){
    if(event.target.value===""){
        conformPasswordSignErrMsg.textContent="Required*";
    }else{
        conformPasswordSignErrMsg.textContent="";
    }
    formData.conformPassword=event.target.value;
});

function validateFormData(formData){
    let {email,createPassword,conformPassword}=formData;
    
    if (email===""){
        emailSignErrMsg.textContent="Required*";
    }
    if(createPassword===""){
        passwordSignErrMsg.textContent="Required*";
    }
    if(conformPassword===""){
        conformPasswordSignErrMsg.textContent="Required*";
    }
    
}

function submitFormData(formData){
    let url="https://gorest.co.in/public-api/users";
    let options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
        },
        body:JSON.stringify(formData)
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
    });
}

myFormSign.addEventListener("submit",function(event){

    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});
