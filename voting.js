const btn = document.querySelector("#submit")
const party = document.querySelector("#parties")
const bjp =document.querySelector("#countBJP")
const congress =document.querySelector("#countCongress")
const aap =document.querySelector("#countAAP")
const sVote = document.querySelector("#success")


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

btn.addEventListener('click',addVote)