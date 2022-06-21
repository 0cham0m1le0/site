let field = document.querySelector('.calcInput');


function inputSmth(symbol){
    field.value += symbol;
}

function c(){
    field.value = '';
}


function calcResult(){
    field.value;
    result = eval(field.value)
    field.value = result;
}


function calcDel(){
    stroka = field.value;
    end = stroka.length - 1;
    stroka = field.value.slice(0, end);
    field.value = stroka; 
}