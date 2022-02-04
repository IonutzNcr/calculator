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
    isEqual:false,
    doubleClick:false,
    notAllowedEqual:true,
    notAllowedOperator:true,
    isAllowedFloat:false,
    
};

const number = [];

function resetCalc(){
   
    calc.a = null;
    calc.b = null;
    calc.operator = null;
    calc.notAllowedOperator = true; // Prevent the use of operator before taping numbers; 
    calc.isEqual = false;   // Regulate the way it happens after some1 clicked on equal but doesnt prevent the unusual way of using equal;
    calc.doubleClick = false; // Prevent double click but doesn't prevent the unusual way of using operator:(e.g : using before taping a number )
    calc.notAllowedEqual = true; // Prevent equal to display thing to the screen if there is no numbers;
    calc.isAllowedFloat = false;
   
}

function displayCalculus(e){

    
    
    if(document.querySelector(".screen").textContent == "Welcome!"){
        document.querySelector(".screen").textContent = "";
     }

     if(document.querySelector(".screen").textContent == "ERROR"){
        document.querySelector(".screen").textContent = "";
     }
     
     

     if(number.length == 1 && calc.isEqual==false){
         
         calc.isAllowedFloat = true;
     }

     if(e.target.textContent == "."){

        if(calc.isEqual == true){
            
            calc.isAllowedFloat == false;
            return 0
        }
         
        if(calc.isAllowedFloat==true){
            
            number.push(e.target.textContent);
            document.querySelector(".screen").textContent += e.target.textContent;
            calc.isAllowedFloat = false;
            return 0
        } else {
             document.querySelector(".screen").textContent = "ERROR";
             resetCalc();
             return 0
        }
     }

     if(e.target.textContent=="AC"){
        
        if(calc.a==null){
            number.pop();
            document.querySelector(".screen").textContent= number.join("");
            resetCalc();
            return 0
        }

        if(calc.a!=null && calc.isEqual == false){
            number.pop();
            document.querySelector(".screen").textContent= calc.a + calc.operator + number.join("");
            return 0
        }

        if(calc.isEqual==true){
            number.pop();
            document.querySelector(".screen").textContent= "ERROR";
            return 0
        }
        
     }

     if(e.target.textContent=='C'){
         resetCalc();
         number.splice();
         document.querySelector(".screen").textContent = "Welcome!";
         return 0
     }
    
     //**Here click on digit  **/
    if(e.target.textContent != "=" && e.target.textContent != "/" && e.target.textContent != "*" && e.target.textContent != "+" && e.target.textContent != "-" && e.target.textContent != "C" && e.target.textContent != "." ){
       
        if(calc.a==null){
            calc.notAllowedOperator = false;
        }

        calc.doubleClick = false;

        if(calc.a!=null && calc.doubleClick==false){
            calc.notAllowedEqual = false;  
        }


        if(calc.isEqual==true){
            document.querySelector(".screen").textContent = "";
            resetCalc();
            number.push(e.target.textContent);
            document.querySelector(".screen").textContent = e.target.id;
            return 0
        }
        
        number.push(e.target.textContent);
        document.querySelector(".screen").textContent += e.target.textContent;

        
    } 

    //**Click on operator**/
    if( e.target.textContent == "/" || e.target.textContent == "*" || e.target.textContent == "+" || e.target.textContent == "-" ){
        
        

        if(calc.notAllowedOperator == false){
            if(calc.doubleClick == false){
                
                calc.doubleClick = true;
    
                if(calc.a==null){
                    calc.operator=e.target.textContent;
                    calc.a = +number.join("");
                    number.splice(0);
                    document.querySelector(".screen").textContent = calc.a + e.target.textContent;
                    return 0
                }
         
                if(calc.a != null && calc.b == null && calc.isEqual==false){
                    
                    calc.b = +number.join("");
                    number.splice(0);
                    calc.a = Math.round((operate(calc.a,calc.b,calc.operator)*10000)/10000);
                    if(calc.a == Infinity || calc.a == -Infinity){
                        isInfinite();
                        return 0
                    }
                    calc.operator=e.target.textContent;
                    calc.b = null; 
                    document.querySelector(".screen").textContent = calc.a + e.target.textContent;
                    return 0 
                }
         
                if(calc.a!=null && calc.b==null && calc.isEqual==true){
                    calc.operator=e.target.textContent;
                    calc.isEqual = false;
                    document.querySelector(".screen").textContent = calc.a + e.target.textContent;
                    return 0
                }
            } 
        }else{
            document.querySelector(".screen").textContent = "ERROR";
            resetCalc();
            number.splice(0);
            return 0
        }
    
    }

    //**Click on equal **/
    if(e.target.textContent == "="){
        if(calc.notAllowedEqual == false){
            
            calc.b = +number.join("");
            number.splice(0);
             calc.isEqual = true;
            calc.a = Math.round(operate(calc.a,calc.b,calc.operator)*10000)/10000;
            if(calc.a == Infinity || calc.a == -Infinity){
                isInfinite();
                return 0
            }
            calc.b = null;
           document.querySelector(".screen").textContent = calc.a; 
           calc.notAllowedEqual == true;
           return 0
        } else {
            document.querySelector(".screen").textContent = "ERROR";
            resetCalc();
            number.splice(0);
            return 0
        }
        
       
    }
    
}

buttons.forEach(button=>button.addEventListener("click",displayCalculus))




function checkElements(){
    console.log("calc.a =",calc.a)
    console.log("calc.b =",calc.b)
    console.log("calc.operator =",calc.operator)
    console.log("calc.notAllowedOperator =",calc.notAllowedOperator)
    console.log("calc.notAllowedEqual =",calc.notAllowedEqual)
    console.log("calc.doubleClick =",calc.doubleClick)
    console.log("calc.isEqual =",calc.isEqual)
}

function isInfinite(){
    document.querySelector(".screen").textContent = "ERROR";
    resetCalc();
    number.splice(0);
    
}

//**Make keyboard support */

function displayKey(e){
    
    if(e.key.match(/[a-z]/i ) && e.key != "Enter" && e.key != "Backspace"){
        console.log(e.key)
        return 0
    }

    if(document.querySelector(".screen").textContent == "Welcome!"){
        document.querySelector(".screen").textContent = "";
     }

     if(document.querySelector(".screen").textContent == "ERROR"){
        document.querySelector(".screen").textContent = "";
     }
     
     

     if(number.length == 1 && calc.isEqual==false){
         
         calc.isAllowedFloat = true;
     }

     if(e.key == "."){

        if(calc.isEqual == true){
            
            calc.isAllowedFloat == false;
            return 0
        }
         
        if(calc.isAllowedFloat==true){
            
            number.push(e.key);
            document.querySelector(".screen").textContent += e.key;
            calc.isAllowedFloat = false;
            return 0
        } else {
             document.querySelector(".screen").textContent = "ERROR";
             resetCalc();
             return 0
        }
     }

     if(e.key=="AC" || e.key =="Backspace"){
        
        if(calc.a==null){
            number.pop();
            document.querySelector(".screen").textContent= number.join("");
            resetCalc();
            return 0
        }

        if(calc.a!=null && calc.isEqual == false){
            number.pop();
            document.querySelector(".screen").textContent= calc.a + calc.operator + number.join("");
            return 0
        }

        if(calc.isEqual==true){
            number.pop();
            document.querySelector(".screen").textContent= "ERROR";
            return 0
        }
        
     }

     if(e.key=='C'){
         resetCalc();
         number.splice();
         document.querySelector(".screen").textContent = "Welcome!";
         return 0
     }
    
     //**Here click on digit  **/
    if(e.key != "=" && e.key != "/" && e.key != "*" && e.key != "+" && e.key != "-" && e.key != "C" && e.key != "." && e.key != "Enter"){
       
        if(calc.a==null){
            calc.notAllowedOperator = false;
        }

        calc.doubleClick = false;

        if(calc.a!=null && calc.doubleClick==false){
            calc.notAllowedEqual = false;  
        }


        if(calc.isEqual==true){
            document.querySelector(".screen").textContent = "";
            resetCalc();
            number.push(e.key);
            document.querySelector(".screen").textContent = e.key;
            return 0
        }
        
        number.push(e.key);
        document.querySelector(".screen").textContent += e.key;

        
    } 

    //**Click on operator**/
    if( e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-" ){
        
        

        if(calc.notAllowedOperator == false){
            if(calc.doubleClick == false){
                
                calc.doubleClick = true;
    
                if(calc.a==null){
                    calc.operator=e.key;
                    calc.a = +number.join("");
                    number.splice(0);
                    document.querySelector(".screen").textContent = calc.a + e.key;
                    return 0
                }
         
                if(calc.a != null && calc.b == null && calc.isEqual==false){
                    
                    calc.b = +number.join("");
                    number.splice(0);
                    calc.a = Math.round((operate(calc.a,calc.b,calc.operator)*10000)/10000);
                    if(calc.a == Infinity || calc.a == -Infinity){
                        isInfinite();
                        return 0
                    }
                    calc.operator=e.key;
                    calc.b = null; 
                    document.querySelector(".screen").textContent = calc.a + e.key;
                    return 0 
                }
         
                if(calc.a!=null && calc.b==null && calc.isEqual==true){
                    calc.operator=e.key;
                    calc.isEqual = false;
                    document.querySelector(".screen").textContent = calc.a + e.key;
                    return 0
                }
            } 
        }else{
            document.querySelector(".screen").textContent = "ERROR";
            resetCalc();
            number.splice(0);
            return 0
        }
    
    }

    //**Click on equal **/
    if(e.key == "=" || e.key == "Enter"){ // search here there is a problme when pressin enter;
        if(calc.notAllowedEqual == false){
            
            calc.b = +number.join("");
            number.splice(0);
             calc.isEqual = true;
            calc.a = Math.round(operate(calc.a,calc.b,calc.operator)*10000)/10000;
            if(calc.a == Infinity || calc.a == -Infinity){
                isInfinite();
                return 0
            }
            calc.b = null;
           document.querySelector(".screen").textContent = calc.a; 
           calc.notAllowedEqual == true;
           return 0
        } else {
            document.querySelector(".screen").textContent = "ERROR";
            resetCalc();
            number.splice(0);
            return 0
        }
        
       
    }
    
}

document.querySelector("body").addEventListener("keydown",displayKey)