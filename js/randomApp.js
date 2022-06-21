let inputMin = document.querySelector('.input-min');
let inputMax = document.querySelector('.input-max');
let generateBtn = document.querySelector('.generate');
let output = document.querySelector('.output');


generateBtn.onclick = function(){
    let min = +inputMin.value;
    let max = +inputMax.value;
    let res = Math.round(Math.random() * (max-min) + min);
    output.innerHTML = res;
}