let valName = document.getElementById("valName")
let valEmail = document.getElementById("valEmail")
let valNumber = document.getElementById("valNumber")
let valWebsite = document.getElementById("valWebsite")
let valSubject = document.getElementById("valSubject") 
let valDescription = document.getElementById("valDescription")
let valSubmit = document.getElementById("valSubmit")

function validateName(){
    var namee = document.getElementById('namee').value

    if(namee.length == 0){
        valName.innerHTML= "Name is Require";
        return false
    }


    if(namee.length<5){
        valName.innerHTML= "Write Valid Name"
        return false    
    }

    valName.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateNumber(){
    var number = document.getElementById('number').value

    if(number.length == 0){
        valNumber.innerHTML= "Number is Required";
        return false
    }
    
    
        if(number.length !== 11){
            valNumber.innerHTML= "Number Should be 11digits";
            return false
        }

    if(!number.match(/^[0-9]{11}$/)){
        valNumber.innerHTML= "Phone No is required"
        return false    
    }

    valNumber.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateEmail(){
    var email = document.getElementById('email').value

    if(email.length == 0){
        valEmail.innerHTML = "Email is required"
        return false
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        valEmail.innerHTML="Email Invalid"
        return false
    }
    valEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validateDescription(){
    let descritption = document.getElementById('descritption').value
    let required = 30 
    let left = required - descritption.length 

    if(left> 0){
        valDescription.innerHTML = left + " more character is required"
        return false
    }

    valDescription.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}
function validateSubject(){
    let subject = document.getElementById('subject').value
    let required = 10 
    let left = required - subject.length 

    if(left> 0){
        valSubject.innerHTML = left + " more character is required"
        return false
    }

    valSubject.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validateForm(){
    if( !validateName() || !validateEmail() ||  !validateNumber() || !validateSubject() || !validateDescription()){
        valSubmit .style.display = "block";
        valSubmit.innerHTML= "*Please Fill Input Field"
        setTimeout(function() {valSubmit.style.display = 'none'},3000)
        return false
    }
}


