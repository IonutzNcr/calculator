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
};

const number = [];

function resetCalc(){
   
    calc.a = null;
    calc.b = null;
    calc.operator = null;
    calc.operatorAbuser = true;
    calc.equalAbuser = true;
};

buttons.forEach(button=>button.addEventListener("click",displayCalculus))

function displayCalculus(e){
    resetScreen();

    if(e.target.textContent.match(/[0-9]/)){
        /* checkElements() */
        number.push(e.target.textContent);
        document.querySelector(".screen").textContent += e.target.textContent;
    }

    if( e.target.textContent.match(/[*/=+-]/) ){
        if(calc.a==null)
        calc.a = +number.join("")
        number.splice(0);
        document.querySelector(".screen").textContent = calc.a + e.target.textContent
        calc.operator=e.target.textContent
        checkElements()
         }

        if(calc.a!=null){
        calc.b= +number.join("")
        number.splice(0);
        
        document.querySelector(".screen").textContent = calc.a + e.target.textContent
        calc.a= operate(calc.a,calc.b,calc.operator)
        calc.operator = e.target.textContent
        }
        
    }


function resetScreen(){
    if( document.querySelector(".screen").textContent == "Welcome!" ) {
        document.querySelector(".screen").textContent = "";
    }
}

function checkElements(){
    console.log("calc.a =",calc.a)
    console.log("calc.b =",calc.b)
    console.log("calc.operator =",calc.operator)
}