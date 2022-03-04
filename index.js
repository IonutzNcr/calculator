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
        case "+" : return add(a,b);
        
        case "-" : return substract(a,b);

        case "/" : return divide(a,b);

        case "*" : return multiply(a,b);

        default : console.log("you pick an undefined case");
    }
}

const buttons = document.querySelectorAll("button");

const calc = {
    
    a:null,
    b:null,
    operator:null,
    allowedEqual:false,
    allowedOperator : false,
    allowedReset : false,
};

const number = [];

function resetCalc(){
   
    calc.a = null;
    calc.b = null;
    calc.operator = null;
    calc.allowedEqual = false; /* define if an operation was done using equal 
    + define if we can use an operator (because if we can use equal we can also use an operator))*/
    calc.allowedOperator = false;
    calc.allowedReset = false;
};

buttons.forEach(button=>button.addEventListener("click",displayCalculus))

function displayCalculus(e){
    resetScreen();

    if(e.target.textContent.match(/[C]/)){
        resetCalc()
        document.querySelector(".screen").textContent = "Welcome!" 
        number.splice(0)
        return 
        
    }

    if(e.target.textContent.match(/[AC]/)){
        number.pop()
        document.querySelector(".screen").textContent = number.join("");

    }
    /* When the user click on a digit:
    Put the digit inside the array,
    Display the the previous content on the screen and the current content
    */
    if(e.target.textContent.match(/[0-9]/)){
        /* When a result is displayed using equal sign and then the user click on a digit:
        the outcome to be expected is to reset everthing */
        if(calc.allowedReset==true){
            resetCalc();
            calc.allowedReset = false;
        }
        calc.allowedOperator = true;
        calc.allowedEqual = true;
        number.push(e.target.textContent);
        document.querySelector(".screen").textContent = number.join("");
    }

    /* When user click on equal */
    if(e.target.textContent.match(/[=]/)){

        if(calc.allowedEqual == true){
            calc.allowedEqual = false;
            calc.allowedOperator = true;
            calc.allowedReset = true;
            if(calc.a==null){
                calc.a = +number.join("")
                number.splice(0)
                document.querySelector(".screen").textContent = calc.a;
                console.log("a==nul")
                
                
                return 
            }
    
            if(calc.a != null){
                calc.b = +number.join("")
                number.splice(0)
                calc.a = operate(calc.a,calc.b,calc.operator)
                calc.b = null
                document.querySelector(".screen").textContent = calc.a
                console.log("a!=nul")
            }
            
        }
       
    }

    /* 
    When the user click  on an operator (equal is not included):
    */
    if( e.target.textContent.match(/[*/+-]/) ){
        /*  If there is not a number created by the array:
        Create a nuberd inside calc.a ,
        Empty the array ,
        Display the number inside calc.a and the operator
        */
        if(calc.a == null){
        console.log(number)
        calc.a = +number.join("")
        number.splice(0);
        document.querySelector(".screen").textContent = calc.a + e.target.textContent
        calc.operator = e.target.textContent;
        }

        /* If there is only a number saved:
        Add the number inside calc.b , 
        Empty the array ,
        Add the result of a operate b in calc.a using the previous operator,
        Disply calc.a next to the operator , 
        Save the new operator inside calc.operator ,
        */
        if(calc.a!=null && calc.operator != null){
        
        console.log("why")
        calc.b= +number.join("")
        number.splice(0);
        calc.a= operate(calc.a,calc.b,calc.operator)
        document.querySelector(".screen").textContent = calc.a + e.target.textContent
        calc.operator = e.target.textContent

        }
        calc.allowedEqual = false;
        calc.allowedOperator = false;
        calc.allowedReset = false;
    }
}


function resetScreen(){
    if( document.querySelector(".screen").textContent == "Welcome!" ) {
        document.querySelector(".screen").textContent = "";
    }
}

