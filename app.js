const btn =document.querySelector("#submit-btn");
const uName= document.querySelector("#username");
const uAge= document.querySelector("#age")
const uPassword= document.querySelector("#password")
const bjpD = document.querySelector("#bjpD")


const users=[
    {
        userName:"Murtaza",
        age:21,
        password:"hello123"
    },
    {
        userName:"Manprit",
        age:21,
        password:"abcdefgh"
    },
    {
        userName:"Paridhi",
        age:21,
        password:"12345678"
    },

]

function checkpassword(e){
    e.preventDefault();
    
    for(let i =0;i<users.length;i++){
        if(uName.value===users[i].userName&&uPassword.value===users[i].password&&uAge.value==users[i].age){
            window.location.href="voting.html"
        }
    }
    
    
    
}

btn.addEventListener('click',checkpassword)