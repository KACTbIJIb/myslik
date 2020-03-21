/* do {
var num1 = +prompt ('Введите число 1');
var num2 = +prompt ('Введите число 2');
var result = num1 + num2;
alert("Резельтат:" + result);
var isProcess = confirm ('Продолжить');
} while (isProcess) */

function getValues () {
var result = [];
var i = 0;
do {
    result[i] = +prompt ('Введите число');
    i++
    var isProcess = confirm ('Продолжить');
}while (isProcess);

return result;

}

do {
    var numbers = getValues();
    alert(numbers);
    var isProcess = confirm ('Продолжить');
}while (isProcess);