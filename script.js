let numberOne=""
let numberTwo=""
let operator=""
let resetDisplay= false;

function add(numberOne,numberTwo){
    return numberOne+numberTwo}

function subtract(numberOne,numberTwo){
    return numberOne-numberTwo}

function multiply(numberOne,numberTwo){
    return numberOne*numberTwo}

function divide(numberOne,numberTwo){
    return numberOne/numberTwo}

function operate(numberOne,numberTwo,operator){
    numberOne=parseFloat(numberOne)
    numberTwo=parseFloat(numberTwo)
    if (operator==="+"){
        return add(numberOne,numberTwo)
    }
    else if (operator==="-"){
       return subtract(numberOne,numberTwo)
    }
    else if (operator==="*"){
        return multiply(numberOne,numberTwo)
    }
    else if (operator==="/"){
        return divide(numberOne,numberTwo)
    }
    
}
// add value to display
function appendValue(value){
    const display=document.getElementById("display");
    if(resetDisplay){
        display.value=""
        resetDisplay=false;
    }
    display.value += value
}
// clear the display
function clearDisplay(value){
    const display=document.getElementById("display");
    display.value = ""
}

// delete last character

function backspace(){
    const display=document.getElementById("display");
    display.value=display.value.slice(0,-1)
}

function calculate(){

    const display=document.getElementById("display");
    if (numberOne&&operator){
        numberTwo=display.value
        const result=operate(numberOne,numberTwo,operator)
        display.value=result
        numberOne=result
        numberTwo=""
        operator=""
        resetDisplay=""
    }   
}

document.querySelectorAll("#container button").forEach(button =>{
    button.addEventListener("click",()=>{
        const value=button.innerText;
        if (["+","-","*","/"].includes(value)){
            if (numberOne&&operator){
                calculate();
            }
            numberOne=document.getElementById("display").value;
            operator=value;
            resetDisplay=true;
        }
    })
})











