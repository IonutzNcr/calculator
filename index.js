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
     //working on the display
    document.querySelector(".screen").textContent += e.target.textContent

    //set b to the last number in the screen
    //reset number array to empty array
    //set a with operate() function 
    // display the output ( which should be the final result)
    //prevent the next digit to be display near the final result 
    if(e.target.textContent=="="){
        result.b = +number.join("")
        number.splice(0)
        console.log("a=",result.a,"b=",result.b)
        const output = operate(result.a,result.b,result.operator);
        document.querySelector(".screen").textContent = output;
        result.a = output;
        result.operator = null; // to check 
        result.isEqual = true;
        return 0
    }
    // Screen reset to empty string
    // Set the obj to its initial stage 
    // Quit the function 
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

        if(result.operator == null){
            result.operator = e.target.id; 
        }
        
       
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
            console.log(result.operator)
            result.b = +number.join("")
            result.a = operate(result.a,result.b,result.operator)
            number.splice(0)
            console.log("a",result.a)
            //working on fixing the display of decimals 
            //if(result.a.length>4){
            //    document.querySelector(".screen").textContent = Math.round(result.a+100)/100 + e.target.textContent;
            //} else{
                
            //} document.querySelector(".screen").textContent = result.a + e.target.textContent;
            
            result.b = null;
            result.operator = e.target.id; 
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




