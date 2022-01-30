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

const buttons = document.querySelectorAll("button")


function displayCalculus(e){
    
    if(e.target.textContent=="C") {
        document.querySelector(".screen").textContent = "";
        return 0
    }
    if(document.querySelector(".screen").textContent == "Calculus displayus"){
       document.querySelector(".screen").textContent = "";
    }
    document.querySelector(".screen").textContent += e.target.textContent
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




