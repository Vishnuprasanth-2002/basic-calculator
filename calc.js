const display = document.getElementById('inputBox');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equalto = document.getElementById('equal');
let firstOperation = "";
let operation = "";
let secondOperation = "";

function calculate(){
    switch (operation){
        case '+':
            output.value =firstOperation+operation+secondOperation+"=";
            display.value = Number(firstOperation) + Number(secondOperation) ;
            break;
        case '-':
            output.value =firstOperation+operation+secondOperation+"=";
            display.value = Number(firstOperation) - Number(secondOperation) ;
            break;
        case '*':
            output.value =firstOperation+operation+secondOperation+"=";
            display.value = Number(firstOperation) * Number(secondOperation) ;
            break;
        case '/':
            output.value =firstOperation+operation+secondOperation+"=";
            display.value = Number(firstOperation) / Number(secondOperation) ;
            break;
        case '%':
            output.value =firstOperation+operation+secondOperation+"=";
            display.value = Number(firstOperation) % Number(secondOperation) ;
            break;
        default:
            break;
    }
}

buttons.forEach(button =>{
    button.addEventListener('click',() =>{
        const buttonValue = button.textContent;
        if(operation==""){
            firstOperation+= buttonValue;
            display.value= firstOperation;
        }
        else{
            display.value = "";
            secondOperation +=buttonValue;
            display.value = secondOperation;
        }
       
})
})
operators.forEach(operate =>{
    operate.addEventListener('click',() =>{
        if(operation==""){
         operation = operate.textContent;
         display.value = firstOperation;
         output.value = display.value+operation;
        }else{
            calculate();
            operation = operate.textContent;
            firstOperation = display.value;
            secondOperation="";
            output.value = firstOperation+operation;
            display.value =firstOperation;
        }
    })
})
document.querySelector("#equal").addEventListener('click', calculate);

document.querySelector(".clr").addEventListener('click', clear);
function clear(){
    display.value = "";
    firstOperation = "";
    operation = "";
    secondOperation = "";
    output.value="";
};

document.querySelector(".del").addEventListener('click',function(){
    if(secondOperation){
        secondOperation = secondOperation.slice(0,-1);
        display.value =display.value.slice(0,-1);
    }
    else if(operation){
        operation = "";
        display.value =display.value.slice(0,-1);
    }
    else{
        firstOperation = firstOperation.slice(0,-1);
        display.value =display.value.slice(0,-1);
    }
})