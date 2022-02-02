PSEUDO CODE ; 

Prend un nombre 
Stock le dans une variable 

Prend un operateur 
Stock le dans une variable

Prend un autre nombre 
Stock le dans une variable 

Operate (a,b,operator)
Display the result 


Quand on click sur nombre 
    store le chiffre dans l'array 
    isAllowed = true 
    if(operator != null)
        Alors isEqual == true

Quand t'appuie sur un operator 
    if(isAllowed = true)
        Si a == nul 
            Alors transforme les chiffre en un numero et stock le dans a 
            Et sauvegarde l'operateur
        Else if b == nul 
            Sauvegarde l'operator 
        Else a != null & b != null 
            Alors transforme  les chiffres en un numero et stock le dans b 
            Assign a la valeur de operate (a,b,ancien operator)
            operator = current operator
     

        Is equal = false // tu ne peux pas utiliser equal apres un operator
        isAllowed = false //  peux pas utiliser un  operator apres un operator
    Sinon 
        Rien

Quand t'appuie sur equal sign 

    If(isEqual == true){
        calc.a = operate(a,b, operator)
        isEqual == false 
        isResult == true;
    }

