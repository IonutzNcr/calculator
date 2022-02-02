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
    result :false,
    a:null,
    b:null,
    operator:null,
    isEqual:false,
    isAllowed:false,
};

const number = [];

function resetCalc(){
    calc.result = false;
    calc.a = null;
    calc.b = null;
    calc.operator = null;
    calc.isEqual = false;   // click on equal is allowed
    calc.isAllowed = false; // click on operator is allowed 
}

function displayCalculus(e){
    
    if(document.querySelector(".screen").textContent == "Calculus displayus"){
        document.querySelector(".screen").textContent = "";
     }
     
    

    if(e.target.textContent != "=" && e.target.textContent != "/" && e.target.textContent != "*" && e.target.textContent != "+" && e.target.textContent != "-" && e.target.textContent != "C" ){
        if(document.querySelector(".screen").textContent == "Pick a number"){
            document.querySelector(".screen").textContent = "";
        }
        if(calc.result==true){
            document.querySelector(".screen").textContent = "";
            resetCalc();
        }
        document.querySelector(".screen").textContent += e.target.textContent
        number.push(e.target.textContent)
        calc.isAllowed = true;
        
        

        if(calc.a != null) {
            calc.isEqual = true;// c'est pas ici;
                return 0
        }
        
    } 
    //working on equal 
    if(e.target.textContent == "="){
       
        if(calc.isEqual == true){

            calc.b = +number.join("")
            number.splice(0)

            calc.a = operate(calc.a,calc.b,calc.operator);
            document.querySelector(".screen").textContent = calc.a;
            //calc.b = null;

            calc.result = true;
            calc.isEqual = false;
            calc.operator = null;
            calc.isAllowed = true;
        }
    }

    if( e.target.textContent == "/" || e.target.textContent == "*" || e.target.textContent == "+" || e.target.textContent == "-" ){
       
        if(document.querySelector(".screen").textContent == "" ) {
            document.querySelector(".screen").textContent = "Pick a number";
            return 0
        }

        if(calc.isAllowed == true){
            calc.isAllowed = false;
                // the problem is after the equal you can't use operator ;
            if(calc.result == true){
                calc.a = +document.querySelector(".screen").textContent
                calc.operator = e.target.id;
                document.querySelector(".screen").textContent = calc.a + e.target.textContent 
                //calc.result = false; //il faut pas le mettre ici
                console.log(calc.a , calc.b, calc.operator)
                //return 0
            }

            if(calc.a==null){
                calc.a = +number.join("");
                calc.operator = e.target.id;
                number.splice(0);

                document.querySelector(".screen").textContent = calc.a + e.target.textContent;
                return 0
            }

            if(calc.b==null){
                calc.b = +number.join("");
                console.log(calc.b)
                number.splice(0);
                calc.a = operate(calc.a,calc.b,calc.operator);
               
                calc.operator = e.target.id ;
                document.querySelector(".screen").textContent = calc.a + e.target.textContent;
                calc.b = null;
                
            }
        }
         
       
    }
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




