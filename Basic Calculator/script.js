let display = document.querySelector("#display");
let expression='';

function clearDisplay(){
    display.value='';
    expression='';
}

function addCharacter(char){
    expression += char;
    display.value=expression 
}

function calculate(){
    try{
        expression = eval(expression);
        display.value= expression ;
    }
    catch(error){
        display.value= "Error";
        expression='';
    }
}