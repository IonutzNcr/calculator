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
    operatorAbuser:true,
    equalAbuser:true,
    isEqual:false,
};

const number = [];

function resetCalc(){
   
    calc.a = null;
    calc.b = null;
    calc.operator = null;
    calc.operatorAbuser = true;
    calc.equalAbuser = true;
    calc.isEqual = false; /* define if an operation was done using equal */
};

buttons.forEach(button=>button.addEventListener("click",displayCalculus))

function displayCalculus(e){
    resetScreen();

    /* When the user click on a digit:
    Put the digit inside the array,
    Display the the previous content on the screen and the current content
    */
    if(e.target.textContent.match(/[0-9]/)){
        if(calc.isEqual = true)
        {
            resetCalc()
        }
        number.push(e.target.textContent);
        document.querySelector(".screen").textContent = number.join("");
    }

    /* When user click on equal */
    if(e.target.textContent.match(/[=]/)){
        calc.isEqual = true
        if(calc.a==null){
            calc.a = +number.join("")
            number.splice(0)
            document.querySelector(".screen").textContent = calc.a;
        }

        if(calc.a != null){
            calc.b = +number.join("")
            number.splice(0)
            calc.a = operate(calc.a,calc.b,calc.operator)
            calc.b = null
            document.querySelector(".screen").textContent = calc.a
        }
    }

    /* 
    When the user click  on an operator (equal is not included):
    */
    if( e.target.textContent.match(/[*/+-]/) ){
        calc.isEqual = false;
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
        
    }
}


function resetScreen(){
    if( document.querySelector(".screen").textContent == "Welcome!" ) {
        document.querySelector(".screen").textContent = "";
    }

    /* if(!document.querySelector(".screen").textContent){
        console.log("maria")
        document.querySelector(".screen").textContent = " ";
    } */
}

