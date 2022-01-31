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
const result = {
    a:null,
    b:null,
    operator:null,
    isEqual:false,
};
const number = [];

function displayCalculus(e){
    if(document.querySelector(".screen").textContent == "Calculus displayus"){
        document.querySelector(".screen").textContent = "";
     }

    document.querySelector(".screen").textContent += e.target.textContent

    if(e.target.textContent=="="){
        
        result.b = +number.join("")
        number.splice(0)
        console.log("a=",result.a,"b=",result.b)
        const output = operate(result.a,result.b,result.operator);
        document.querySelector(".screen").textContent = output;
        result.a = output;
        result.isEqual = true;
        return 0
    }
    if(e.target.textContent == "C") {
        document.querySelector(".screen").textContent = "";
        number.splice(0);
        result.a = null;
        result.b = null;
        result.operator = null;
        result.isEqual = false;
        return 0
    }
    if(e.target.textContent == "/" || e.target.textContent == "+" ||  e.target.textContent == "-" || e.target.textContent == "*"){
      
        // Prevent adding numbers on the screen after the equal sign
       result.isEqual = false;
        // Change the operator value depending on what u click 
       result.operator = e.target.id; 
       
        // Initialize a when a is null!
        // Reset the number array
        // Leave the function once the condition actions are done 
        if (result.a == null && result.b == null ) {
            result.a = +number.join("") 
            number.splice(0)
            return 0
        }
        //Initialize b w/ a number when b is null & a isn't null ! 
        //Change  value of result.a  with operate function depending on the operator 
        //reset number array to an empty array
        //reset result.b to a null value 

        if (result.b == null && result.a != null ){
            result.b = +number.join("")
            result.a = operate(result.a,result.b,result.operator)
            console.log("b=",result.b,"a=",result.a)
            number.splice(0)
            result.b = null;
            return 0
        }
        
    }
    //Tant que tu click sur un digit tu l'ajoute dans l'array number 
    //reset B to null 
    //Prevent to add numer to the final output 
    //Allow to reset the calcul after entering a digit after clicking on equal
    if(e.target.textContent != "/" && e.target.textContent != "+" &&  e.target.textContent != "-" && e.target.textContent != "*"){
        number.push(e.target.textContent);
        result.b = null;
        if(result.isEqual) {
            document.querySelector(".screen").textContent = e.target.textContent;
            result.a = null;
            result.b = null;
            result.operator = null;
            result.isEqual = false;
        }   
    }   
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




