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
    if(document.querySelector(".screen").textContent == "Calculus displayus"){
        document.querySelector(".screen").textContent = "";
     }

    document.querySelector(".screen").textContent += e.target.textContent

    if(e.target.textContent=="="){
        // Here i should write operate with the object properties 
        //also check to see where u need to display the line above. 
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
       
       
       result.operator = e.target.id
       
        if (result.a == null && result.b == null ) {
            result.a = +number.join("") 
            console.log("a=",result.a)
            number.splice(0)
            return 0
        }
        if (result.b == null && result.a != null ){
            result.b = +number.join("")
            result.a = operate(result.a,result.b,e.target.id)
            console.log("b=",result.b,"a=",result.a)
            number.splice(0)
            result.b = null;
            return 0
        }
        
    }
    if(e.target.textContent != "/" && e.target.textContent != "+" &&  e.target.textContent != "-" && e.target.textContent != "*"){
        number.push(e.target.textContent)
        
    }
    
    
    
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




