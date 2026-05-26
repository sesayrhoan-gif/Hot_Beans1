const firstname=document.getElementById("fname")

const lastname=document.getElementById("lname")

function onlyletters(field) {
    const regex=/^[A-Za-z]+$/;
    
    if(!regex.test(field.value)){
        alert("please use only character from A-Z, with no symbols and number")

        return false;

    }
    
        return true;

    
}

firstname.addEventListener("input",function(){
    onlyletters(firstname) /*only letter*/
});

lastname.addEventListener("input",function(){
    onlyletters(lastname) /*only letter*/
});

