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
const result = {
    a:null,
    b:null,
    operator:null,
}
const number = []

function displayCalculus(e){
    if(e.target.textContent=="="){
        console.log("c bon")
        return 1
    }
    if(e.target.textContent=="C") {
        document.querySelector(".screen").textContent = "";
        number.splice(0);
        result.a = null;
        result.b = null;
        result.operator = null;
        return 0
    }
    if(e.target.textContent == "/" || e.target.textContent == "+" ||  e.target.textContent == "-" || e.target.textContent == "*"){
        console.log(number)
       result.a = +number.join("") 
       console.log(result.a)
       number.splice(0)
        //if(result.a == null ) {
       //     result.a = 
       // }
    }
    if(e.target.textContent != "/" && e.target.textContent != "+" &&  e.target.textContent != "-" && e.target.textContent != "*"){
        number.push(e.target.textContent)
        console.log(number)
    }
    if(document.querySelector(".screen").textContent == "Calculus displayus"){
       document.querySelector(".screen").textContent = "";
    }
    document.querySelector(".screen").textContent += e.target.textContent
    
    
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




