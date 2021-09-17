const btn = document.querySelector("#submit")
const party = document.querySelector("#parties")
const bjp =document.querySelector("#countBJP")
const congress =document.querySelector("#countCongress")
const aap =document.querySelector("#countAAP")
const sVote = document.querySelector("#success")
const bjpD= document.querySelector("#bjpD")
const congressD= document.querySelector("#congressD")
const aapD= document.querySelector("#aapD")


function addVote(e){
    e.preventDefault();
    console.log(party.value)
    if(party.value=="BJP"){
        bjp.innerHTML=`1`;
        btn.disabled=true;
        btn.textContent="Voted"
        }
        if(party.value=="Congress"){
            congress.innerHTML=`1`;
            btn.disabled=true;
        btn.textContent="Voted"
        }
        if(party.value=="AAP"){            
            aap.innerHTML=`1`;
            btn.disabled=true;
        btn.textContent="Voted"
        }
        sVote.style.display="block";
}

function bjpDetails(){
    alert("Party Leader : Narendra Modi")
}

function congressDetails(){
    alert("Party Leader : Rahul Gandhi")
}
function aapDetails(){
    alert("Party Leader : Arvind Kejriwal")
}


bjpD.addEventListener('click',bjpDetails)
congressD.addEventListener('click',congressDetails)
aapD.addEventListener('click',aapDetails)

btn.addEventListener('click',addVote)