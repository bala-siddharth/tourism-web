let firstNameE1=document.getElementById("firstName");
let lastNameE1=document.getElementById("lastName");
let emailE1=document.getElementById("email");
let subjectE1=document.getElementById("subject");
let leaveUsMessageE1=document.getElementById("leaveUsMessage");
let submitBtn=document.getElementById("submitBtn");

let formData={
    firstName:"",
    lastName:"",
    email:"",
    subject:"",
    leaveUsMessage:"" 
};


firstNameE1.addEventListener("change",function(event){
    formData.firstName=event.target.value;
});

lastNameE1.addEventListener("change",function(event){
    formData.lastName=event.target.value;
});

emailE1.addEventListener("change",function(event){
    formData.email=event.target.value;
});
subjectE1.addEventListener("change",function(event){
    formData.subject=event.target.value;
});
leaveUsMessageE1.addEventListener("change",function(event){
    formData.leaveUsMessage=event.target.value;
});

function submitFormData(formData){
    let url="https://engage.wixapps.net/_api/presence-service/v1/set-data";
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

submitBtn.addEventListener("submit",function(event){
    event.preventDefault();
    submitFormData(formData);
});