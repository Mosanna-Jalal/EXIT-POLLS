var aap=0,bjp=0,congress=0;

function handleBJP(){
     bjp=bjp+1;
     console.log("bjp="+bjp);
     let x=document.getElementById("x");
    x.innerText="BJP votes="+bjp;
}

function handleCongress(){
    congress=congress+1;
    console.log("congress="+congress);
    let x=document.getElementById("y");
    x.innerText="INC votes="+congress;
    
}

function handleAAP(){
    aap=aap+1;
    console.log("aap="+aap);
    let x=document.getElementById("z");
    x.innerText="AAP votes="+aap;
}
function handleResult(){

    var final="";
if(aap>congress&&aap>bjp){
    final="AAP wins";
}
else if(bjp>congress&&bjp>aap){
    final="BJP wins";
}

else if(congress==bjp||bjp==aap||aap==congress){
    final="Tied for now.Vote more."
}

let result=document.getElementById("res");
result.style.fontSize="50px";
result.innerText=final;
}
