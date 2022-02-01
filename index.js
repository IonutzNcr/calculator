function add (a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

 function divide(a,b){
    return a/b
}

function operate(a,b,operator){
    switch (operator){
        case "add" : return add(a,b);
        
        case "substract" : return substract(a,b);

        case "divide" : return divide(a,b);

        case "multiply" : return multiply(a,b);

        default : console.log("you pick an undefined case");
    }
}

const buttons = document.querySelectorAll("button");
const calc = {
    result :null,
    a:null,
    b:null,
    operator:null,
    isEqual:false,
    isAllowed:false,
};

const number = [];

function resetCalc(){
    calc.result = null;
    calc.a = null;
    calc.b = null;
    calc.operator = null;
    calc.isEqual = false;
    calc.isAllowed = false;
}

function displayCalculus(e){
    
    if(document.querySelector(".screen").textContent == "Calculus displayus"){
        document.querySelector(".screen").textContent = "";
     }
    if(e.target.textContent != "=" && e.target.textContent != "/" && e.target.textContent != "*" && e.target.textContent != "+" && e.target.textContent != "-" && e.target.textContent != "C" ){
        number.push(e.target.textContent)
        console.log(number)
    } 
    
    if(e.target.textContent == "=" || e.target.textContent == "/" || e.target.textContent == "*" || e.target.textContent == "+" || e.target.textContent == "-" ){
        calc.isAllowed = false;
        if (isAllowed == true) {
        
        }
    }

    //if(calc.result==null){

    //} 
  
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




