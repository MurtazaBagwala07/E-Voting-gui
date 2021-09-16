const btn =document.querySelector("#submit-btn");
const uName= document.querySelector("#username");
const uAge= document.querySelector("#age")
const uPassword= document.querySelector("#password")

var id="manprit";
var password ="abcdefgh"
var age = 25


function checkpassword(e){
    e.preventDefault();
    if(uName.value===id&&uPassword.value===password&&uAge.value==age){
        window.location.href="voting.html"
    }
    else{
        alert("Wrong Details")
    }
}


btn.addEventListener('click',checkpassword)