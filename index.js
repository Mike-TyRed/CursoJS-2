//session 1

// var age;
// age = 26;

// document.getElementById('div1').innerHTML = 'Hello world';

/* 
nuevo comentario, si.
*/

// var button = document.getElementById('btn');
// button.addEventListener('click', function(){

//     var name = document.getElementById('name').value;
//     document.getElementById('answer').innerHTML = 'hi ' + name;

// });

// session 2

// var button = document.getElementById('btn');

// button.addEventListener('click', function(){
//     var number_1 = parseFloat(document.getElementById('number_1').value);
//     var number_2 = parseFloat(document.getElementById('number_2').value);

//     var result = number_1 + number_2;

//     document.getElementById('total').innerHTML = result;
// });

// session 3

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    var number_1 = parseFloat(document.getElementById('number_1').value);
    var number_2 = parseFloat(document.getElementById('number_2').value);
    var operation = parseInt(document.getElementById('operation').value);
    var result;

    switch(operation){
        case 1:
            result = addup(number_1, number_2);
            break;
        case 2:
            result = subtract(number_1, number_2);
            break;
        case 3:
            result = multiply(number_1, number_2);
            break;
        case 4:
            result = divide(number_1, number_2);
            break;
    }

    document.getElementById('total').innerHTML = result;
});

function addup(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}