const calcBox=document.getElementById("calc-box");
let number1=0;
let number2=0;
let operator=-1;
let answer=0;
let displayNumber=0;

document.getElementById("^").addEventListener("click",makeNumber);
document.getElementById(".").addEventListener("click",makeNumber);
document.getElementById("1").addEventListener("click",makeNumber);
document.getElementById("2").addEventListener("click",makeNumber);
document.getElementById("3").addEventListener("click",makeNumber);
document.getElementById("4").addEventListener("click",makeNumber);
document.getElementById("5").addEventListener("click",makeNumber);
document.getElementById("6").addEventListener("click",makeNumber);
document.getElementById("7").addEventListener("click",makeNumber);
document.getElementById("8").addEventListener("click",makeNumber);
document.getElementById("9").addEventListener("click",makeNumber);
document.getElementById("0").addEventListener("click",makeNumber);
document.getElementById("+").addEventListener("click",makeNumber);
document.getElementById("-").addEventListener("click",makeNumber);
document.getElementById("*").addEventListener("click",makeNumber);
document.getElementById("/").addEventListener("click",makeNumber);
document.getElementById("=").addEventListener("click",makeNumber);
document.getElementById("AC").addEventListener("click",clearNumber);

function makeNumber(e) {
    if(e.target.id>="0" && e.target.id<="9") {
        if(displayNumber==0) {
            displayNumber=e.target.id;
        }else{
           displayNumber= displayNumber+e.target.id; 
        }
        
    }else if(e.target.id==="+" && operator===-1) {
        number1=displayNumber;
        operator="+";
        displayNumber=displayNumber + " + ";
        
    }else if(e.target.id==="/" && operator===-1) {
        number1=displayNumber;
        operator="/";
        displayNumber=displayNumber + " \u00f7 ";
    }else if(e.target.id==="-" && operator===-1) {
        number1=displayNumber;
        operator="-";
        displayNumber=displayNumber + " - ";
    }else if(e.target.id==="*" && operator===-1) {
        number1=displayNumber;
        operator="*";
        displayNumber=displayNumber + " \u00d7 ";
    }else if(e.target.id==="^" && operator===-1) {
        number1=displayNumber;
        operator="^";
        displayNumber=displayNumber + "^";
    }else if(e.target.id==="Sqroot" && operator===-1) {
         if(displayNumber==0) {
            displayNumber=e.target.id;
        }
        number1=displayNumber;
        operator="Sqroot";
        displayNumber=displayNumber + "\u221a ";
    }else if(e.target.id==="=" && operator!=-1) {
        if(operator==="+") {
            let item=displayNumber.indexOf("+");
            let start= item+1;
            number2=displayNumber.substring(start);
            number1=Number(number1);
            number2=Number(number2);
            answer=number1+ number2;
            displayNumber=answer;
            operator=-1;
        }else if(operator==="-") {
           let item=displayNumber.indexOf("-");
            let start= item+1;
            number2=displayNumber.substring(start);
            number1=Number(number1);
            number2=Number(number2);
            answer=number1- number2;
            displayNumber=answer; 
            operator=-1;
        }else if(operator==="*") {
            let item=displayNumber.indexOf("\u00d7");
            let start= item+1;
            number2=displayNumber.substring(start);
            number1=Number(number1);
            number2=Number(number2);
            answer=number1* number2;
            displayNumber=answer;
            operator=-1;
        }else if(operator==="/") {
            let item=displayNumber.indexOf("\u00f7");
            let start= item+1;
            number2=displayNumber.substring(start);
            number1=Number(number1);
            number2=Number(number2);
            answer=number1/ number2;
            displayNumber=answer;
            operator=-1;
        }else if(operator==="^") {
            let item=displayNumber.indexOf("^");
            let start= item+1;
            number2=displayNumber.substring(start);
            number1=Number(number1);
            number2=Number(number2);
            answer=Math.pow(number1,number2);
            displayNumber=answer;
            operator=-1;
        }
    }else if(e.target.id===".") {
        if(displayNumber==0) {
            displayNumber=e.target.id;
        }else{
           displayNumber= displayNumber+e.target.id; 
        }
    }
    calcBox.value= displayNumber;
}
function clearNumber(e) {
    calcBox.value=0;
    displayNumber=0;
    operator=-1;
    
}