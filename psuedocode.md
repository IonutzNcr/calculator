PSEUDO CODE

Take two numbers 
    Take a number 
        If click on operator OR equal and no number stored 
            Do nothing
            Display nothing 
            Wait for another event
        Do this tant qu'il click dans sur un digit (NOT AFTER EQUAL)
            Take the number 
            Keep it 
            Display it on the screen next to the previous if it exist
        If click on an operator OR equal and there is a number 
            Make a number with the previous numbers 
            Keep the number
            Keep the operator 
            Display the operator next to the number 
        If click on an operator or equal and there is two numbers stored 
            Do the operation with the previous operator
            Display the result 
            Keep the result
            Store the new operator 
            Display the new operator next to the result
        Else if click on an operator and there is already a result displayed
            Operate the new number with the result 
            Store the result 
            Display the new result 
        If click on an operator or equal and you already click on it (double click )
            Do nothink
            Display nothing
            Wait for another event
        If click on equal 
            Operate with the current operator 
            Store the result
            Display the result
            Store the new operator 
            Operate with the previous operator 
            Display the result 
        If click on a digit after the equal sign was clicked
            Reset everything
        Else if Click on an operator after the equal sign was clicked 
            Store the operator 
            Wait for the next event 
            

        Explain simple and briefly how the calculator should work
    
    The user will click on digits to form a number . The number is formed when the user will click on an operator except equal. Then he will click on another number then an equal or another operator. If h's clicking on equal the number will be formed and the result will be displayed. If h's clicking on another operateur the number is formed and the result will be done with the previous operator then displayed on the screen next to the current operator.
    What is not allowed is to double click on operator. Or on equal. 
    Apres un equal si il tape sur un digit tout se reset sinon la logic continue avec le resultat . 

    
