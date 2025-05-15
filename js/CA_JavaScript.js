function nameValidate (){
    /*I used regex to check if the field name there is some number or symbols*/

    let nameInput = document.getElementById("name").value;
    let nameRegex = /^[a-zA-Z\s]*$/;

    if (!nameRegex.test(nameInput)){
        alert("Number and symbols are not allowed in the name field.")
        return false;
    }
        return true;
}

function emailValidate(){
    /*In this case I used regex to check if there are letters or numbers before "@" and some letters after and "."*/
    let emailInput = document.getElementById("email").value;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(emailInput)){
        alert("Please insert a validate email.")
        return false;
    }
    return true;
}

function phoneValidate(){

    /*In this case I am checking if the filed is just numbers.*/
    let phoneInput = document.getElementById("phone").value;
    let phoneRegex = /^[0-9]{9,10}$/;

    if (!phoneRegex.test(phoneInput)){
        alert ("Please insert a valid phone number.")
        return false;
    }
    return true;
}

/*I created this fuction to keep the three previous function in the same function, becausade I could not inset three onsubmit for the same form 
in the html*/
function validateForm() {
    let NameValid = nameValidate();
    let EmailValid = emailValidate();
    let PhoneValid = phoneValidate();
    
    if(NameValid && EmailValid && PhoneValid){
        alert("Thank you! We have received your order and it will be delivered on the requested date.")
        return true;
    }else{
        return false;
    }
    
}

/*I had to creat more function because I couldn't use the previous ones even though the function is the same, 
because the formularies are a little different and the alert text would be different too*/
function emailJoinValidate(){
    let emailJoinInput = document.getElementById("emailJoin").value;
    let emailJoinRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if(!emailJoinRegex.test(emailJoinInput)){
        alert("Please insert a validate email.")
        return false;
    }else{
        alert("Thank you for joining our mailing list! You'll receive some news and offers soon.")
        return true;
    }

}

function nameRecipeValidate (){
    /*I used regex to check if the field name there is some number or symbols*/

    let nameRecipeInput = document.getElementById("nameRecipe").value;
    let nameRecipeRegex = /^[a-zA-Z\s]*$/;

    if (!nameRecipeRegex.test(nameRecipeInput)){
        alert("Number and symbols are not allowed in the name field.")
        return false;
    }
        return true;
}

function emailRecipeValidate(){
    let emailRecipeInput = document.getElementById("emailRecipe").value;
    let emailRecipeRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if(!emailRecipeRegex.test(emailRecipeInput)){
        alert("Please insert a validate email.")
        return false;
    }
    return true;
}

function validateRecipeForm() {
    let NameRecipeValid = nameRecipeValidate();
    let EmailRecipeValid = emailRecipeValidate();
    
    if(NameRecipeValid && EmailRecipeValid){
        alert("Thank you very much! We have received your recipe and we are going to update the website.")
        return true;
    }else{
        return false;
    }
    
}