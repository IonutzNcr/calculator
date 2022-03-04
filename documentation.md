
    

I do really need to understand regExp to prevent writing too much code in vain;

------------------------------------------------------------------------------
Explication : 

calc.allowedEqual = false; means that there is not possible to use equal 

calc.allowedEqual = true; means that you can use equal  to fulfil its purpose. 

allowedEqual should be false: - when there isn't any number on the screen;
                              - when you clicked on equal 
                              - when you clicked on an operator

allowedEqual should be true : - wehn you clicked on a digit 

--------------------------------------------------------------------------
calc.allowedOperator = false; means that you can't use any operator 

calc.allowedOperator = true; means that you can use  operators

allowedOperator should be false: - when there isn't any number on the screen
                                 - when you already clicked on an operator

allowedOperator should be true : - when you clicked on a digit
                                 - after the result of an operation using equal

-------------------------------------------------------------------------------------
allowedReset = false;  means it will nos reset on clicking on a digit

allowedReset = true; means it will reset clicking on a digit

allowedReset should be false when : 
                                    - after you clicked on an operator

resetCalc() should be used : -After the result of an operation using equal if you click on    a digit                       
                             - Using AC button

--------------------------------------------------------------------------------------------
C BUTTON :  Remove a number from the number array if there is any 

-------------------------------------------------------------------------------------------

allowedDot = true means that u can use the dot

allowedDot = false means u can't use the dot

allowedDot should be true when : - at the beginining , 
                                - after equal and operator,

allowedDot should be false after clicking on dot.