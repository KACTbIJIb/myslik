/* do {
var num1 = +prompt ('Введите число 1');
var num2 = +prompt ('Введите число 2');
var result = num1 + num2;
alert("Резельтат:" + result);
var isProcess = confirm ('Продолжить');
} while (isProcess) */


/* function getValues () {
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
}while (isProcess); */
/* 
function getValues () {
    var results = [];
    var i = 0;
    do {
        results[i++] = +prompt ('Введите число');
        var isProcess = confirm ('Продолжить');
    }while (isProcess);
    
    return results;
    
    } */
    
  /*   do {
        var numbers = getValues();
        var res = numbers [0];  
        var res = numbers.reduce((acc, v) => acc + v, 0);  
        for(var i = 0; i < numbers.length; i++) {
            res += numbers[i];
        }
        alert('Итого:' +res);

        var isProcess = confirm ('Продолжить');
    } while (isProcess); */

  /*   function calculator () {
        var results = [];
        var i = 0;
        do {
            results[i++] = +prompt ('Введите число');
            var isProcess = confirm ('Продолжить');
        }while (isProcess);
        
        return results;
        
        } */
        
   /*      do {
            var numbers = getValues();
            var res = numbers [0];  
            var res = numbers.reduce((acc, v) => acc + v, 0);  
            for(var i = 0; i < numbers.length; i++) {
                res += numbers[i];
            }
            alert('Итого:' +res);
    
            var isProcess = confirm ('Продолжить');
        } while (isProcess);
 */
    
/* calculator(); */

function triangle(lines, sign) {
    /* var rows = getValues(); */
    var line = sign;

        for (var i = 0; i < lines; i++) {
            console.log(line);
            line += sign;
        }
            
    }
   /*  var rovs = getValues(); */
    triangle(3, '*');
    triangle(5, 'X');

function triangleReverse(lines, sign) {
    var strings = [];
    var line;

    for (var i = 0; i < lines; i++) {
        line = '';
        for (var j = 0; j < lines; j++) {
            line += sign;
        }
    strings[i] = line;
    console.log(strings[i]);
    }

    for (var i = strings.length - 1; i >= 0; i--){
        console.log(strings[i]);
    }
}

triangleReverse(5, '*');


