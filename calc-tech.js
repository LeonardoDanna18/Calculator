const clacBox=document.getElementById("calc-box");
let number=0;

document.getElementById("1").addEventListener("click",makeNumber)
document.getElementById("2").addEventListener("click",makeNumber)
document.getElementById("3").addEventListener("click",makeNumber)
document.getElementById("4").addEventListener("click",makeNumber)
document.getElementById("5").addEventListener("click",makeNumber)
document.getElementById("6").addEventListener("click",makeNumber)
document.getElementById("7").addEventListener("click",makeNumber)
document.getElementById("8").addEventListener("click",makeNumber)
document.getElementById("9").addEventListener("click",makeNumber)
document.getElementById("0").addEventListener("click",makeNumber)
document.getElementById("+").addEventListener("click",makeNumber)
document.getElementById("-").addEventListener("click",makeNumber)
document.getElementById("*").addEventListener("click",makeNumber)
document.getElementById("/").addEventListener("click",makeNumber)
document.getElementById("=").addEventListener("click",makeNumber)
document.getElementById("AC").addEventListener("click",clearNumber)


function makeNumber(e) {
    e.target.id=number + e.target.id;
}