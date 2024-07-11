let userChoice=document.querySelectorAll('.choice');
let mssg=document.getElementById("mssg");
let uScore=document.getElementById("yours-scores").firstElementChild;
let cScore=document.getElementById("comp-scores").firstElementChild;
let userscore=0;
let compscore=0;
let winSound=new Audio('mixkit-instant-win-2021.mp3');
let loseSound=new Audio('mixkit-lose-fairy-shine-2022.mp3');
userChoice.forEach(element => {
   element.addEventListener('click',()=>{
    checkWin(element.getAttribute("id"));
   })
});


function checkWin(userinput)
{
    let compinput=compInput();
    if(userinput===compinput)
    {
       mssg.innerHTML="Draw Match";
       mssg.style.boxShadow="0px 0px 0px 0px white";
       mssg.style.color="white";
    }
    else if(userinput==="rock")
    {
     if(compinput==="paper")
     {
        mssg.innerHTML=`You lose ${compinput} beats ${userinput}`;
        mssg.style.boxShadow="2px 7px 15px 5px red"
        mssg.style.color="red";
        compscore++;
        cScore.innerHTML=compscore;
        loseSound.play();
     }
     else{
        mssg.innerHTML=`you win ${userinput} beats ${compinput}`;
        mssg.style.boxShadow="2px 7px 15px 5px yellow"
        mssg.style.color="green";
        userscore++;
        uScore.innerHTML=userscore;
        winSound.play();
     }
    }
    else if(userinput==="paper")
    {
     if(compinput==="scissor")
     {
        mssg.innerHTML=`you lose ${compinput} beats ${userinput}`;
        mssg.style.boxShadow="2px 7px 15px 5px red";
        mssg.style.color="red";
        compscore++;
        cScore.innerHTML=compscore;
        loseSound.play();
     }
     else{
        mssg.innerHTML=`you win ${userinput} beats ${compinput}`;
        mssg.style.boxShadow="2px 7px 15px 5px yellow";
        mssg.style.color="green";
        userscore++;
        uScore.innerHTML=userscore;
        winSound.play();
     }
    }
    else if(userinput==="scissor")
    {
     if(compinput==="rock")
     {
        mssg.innerHTML=`You lose ${compinput} beats ${userinput}`;
        mssg.style.boxShadow="2px 7px 15px 5px red";
        mssg.style.color="red";
        compscore++;
        cScore.innerHTML=compscore;
        loseSound.play();
    }
    else{
       mssg.innerHTML=`you win ${userinput} beats ${compinput}`;
       mssg.style.boxShadow="2px 7px 15px 5px yellow";
       mssg.style.color="green";
       userscore++;
       uScore.innerHTML=userscore;
       winSound.play();
    }
    }
}

function compInput()
{
    let arr=["rock","paper","scissor"];
    return(arr[Math.floor(Math.random()*3)]);
}