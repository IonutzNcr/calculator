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
    allowedDot : true,
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
    calc.allowedDot = true;
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
    if(e.target.textContent.match(/[0-9.]/)){

        if(number.length == 10){
            return
        }

        if(calc.allowedDot==false && e.target.textContent.match(/[.]/)){
            return
        }

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

        if(calc.allowedDot==true && e.target.textContent.match(/[.]/)){
            calc.allowedDot=false;
        }
    }

    /* When user click on equal */
    if(e.target.textContent.match(/[=]/)){

        if(calc.a== null){
            document.querySelector(".screen").textContent = "Welcome!"
            return
        }

        if(calc.allowedEqual == true){
            calc.allowedEqual = false;
            calc.allowedOperator = true;
            calc.allowedReset = true;
            calc.allowedDot = true;
            if(calc.a==null){
                calc.a = +number.join("")
                number.splice(0)
                document.querySelector(".screen").textContent = calc.a;
                return 
            }
    
            if(calc.a != null){
                calc.b = +number.join("")
                number.splice(0)
                calc.a = Math.round(operate(calc.a,calc.b,calc.operator)*10000)/10000;
                if(calc.a == Infinity){
                    document.querySelector(".screen").textContent = "You can't do that !"
                    resetCalc()
                    return
                }
                calc.b = null
                document.querySelector(".screen").textContent = calc.a;
                calc.operator = null;
            }
            
        }
       
    }

    /* 
    When the user click  on an operator (equal is not included):
    */
    if( e.target.textContent.match(/[*/+-]/) ){

        
        /* prevent the empty screen because of the reset function at the begining of the big function */
        if(calc.allowedOperator==false){
           
            document.querySelector(".screen").textContent = "Welcome!"
            return
        
        }

        

        calc.allowedEqual = false;
        calc.allowedOperator = false;
        calc.allowedReset = false;
        calc.allowedDot = true;

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
        return 
        }

        /* If there is only a number saved:
        Add the number inside calc.b , 
        Empty the array ,
        Add the result of a operate b in calc.a using the previous operator,
        Disply calc.a next to the operator , 
        Save the new operator inside calc.operator ,
        */
        if(calc.a!=null && calc.operator != null ){
        
       
        calc.b= +number.join("")
        number.splice(0);
        calc.a= Math.round(operate(calc.a,calc.b,calc.operator)*10000)/10000;
        if(calc.a == Infinity){
            document.querySelector(".screen").textContent = "You can't do that !"
            resetCalc()
            return
        }
        document.querySelector(".screen").textContent = calc.a + e.target.textContent
        calc.operator = e.target.textContent

        }

        if(calc.a!=null && calc.operator == null ){
            calc.operator = e.target.textContent
            document.querySelector(".screen").textContent = calc.a + e.target.textContent
        }
        
    }
}


function resetScreen(){
    if( document.querySelector(".screen").textContent == "Welcome!" ) {
        document.querySelector(".screen").textContent = "";
    }
}

/*
    Keyboard support 
    Same logic same code but some minor changes that's it 
*/

document.querySelector("body").addEventListener("keydown",displayKey)

function displayKey(e){

    resetScreen();

    if(e.key == "c" || e.key == "C" ){
        resetCalc()
        document.querySelector(".screen").textContent = "Welcome!" 
        number.splice(0)
        return 
        
    }

    if(e.key== "Backspace"){
        number.pop()
        document.querySelector(".screen").textContent = number.join("");

    }
    
    if(e.key.match(/[0-9.]/)){

        if(number.length == 10){
            return
        }

        if(calc.allowedDot==false && e.key.match(/[.]/)){
            return
        }

        if(calc.allowedReset==true){
            resetCalc();
            calc.allowedReset = false;
        }

        calc.allowedOperator = true;
        calc.allowedEqual = true;
        number.push(e.key);
        document.querySelector(".screen").textContent = number.join("");

        if(calc.allowedDot==true && e.key.match(/[.]/)){
            calc.allowedDot=false;
        }
    }

   
    if(e.key.match(/[=]/) || e.key == "Enter"){

        if(calc.a == null){
            document.querySelector(".screen").textContent = "Welcome!"
            return
        }

        if(calc.allowedEqual == true){
            calc.allowedEqual = false;
            calc.allowedOperator = true;
            calc.allowedReset = true;
            calc.allowedDot = true;
            if(calc.a==null){
                calc.a = +number.join("")
                number.splice(0)
                document.querySelector(".screen").textContent = calc.a;
                
                return 
            }
    
            if(calc.a != null){
                calc.b = +number.join("")
                number.splice(0)
                calc.a = Math.round(operate(calc.a,calc.b,calc.operator)*10000)/10000;
                if(calc.a == Infinity){
                    document.querySelector(".screen").textContent = "You can't do that !"
                    resetCalc()
                    return
                }
                calc.b = null
                document.querySelector(".screen").textContent = calc.a
                console.log("a!=nul")
                calc.operator = null;
            }
            
        }
       
    }

    if( e.key.match(/[*/+-]/) ){

        
        
        if(calc.allowedOperator==false){
            document.querySelector(".screen").textContent = "Welcome!"
            return
        }

        calc.allowedEqual = false;
        calc.allowedOperator = false;
        calc.allowedReset = false;
        calc.allowedDot = true;

        if(calc.a == null){
        console.log(number)
        calc.a = +number.join("")
        number.splice(0);
        document.querySelector(".screen").textContent = calc.a + e.key
        calc.operator = e.key;
        return 
        }

        if(calc.a!=null && calc.operator != null ){
         
        calc.b= +number.join("")
        number.splice(0);
        calc.a= Math.round(operate(calc.a,calc.b,calc.operator)*10000)/10000;

        if(calc.a == Infinity){
            document.querySelector(".screen").textContent = "You can't do that !"
            resetCalc()
            return
        }

        document.querySelector(".screen").textContent = calc.a + e.key
        calc.operator = e.key
        }

        if(calc.a!=null && calc.operator == null ){
            calc.operator = e.key
            document.querySelector(".screen").textContent = calc.a + e.key
        }
        
    }
}

