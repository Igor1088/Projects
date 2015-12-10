document.addEventListener('DOMContentLoaded', function(){
    var number = '';
    var number2 = '';
    var operator = '';
    var totalDiv = document.getElementById('total');
    var listNumbers=document.querySelectorAll('#numbers span');
    var listOperators = document.querySelectorAll('#operators span');
    totalDiv.innerHTML = '0';


    function add(n1, n2){
        return (parseFloat(n1)+parseFloat(n2)).toString(10);
    }

    function substract(n1, n2){
        return (parseFloat(n1) - parseFloat(n2)).toString(10);
    }

    function multiply(n1, n2){
        return (parseFloat(n1) * parseFloat(n2)).toString(10);
    }

    function divide(n1, n2){
        return (parseFloat(n1) / parseFloat(n2)).toString(10);
    }

    for(var i=0; i<listNumbers.length; i++){
        listNumbers[i].onclick = function(){
            number += this.innerHTML;
            totalDiv.innerHTML = number;

        };
        
    }


    for(var j=0; j<listOperators.length; j++){
        listOperators[j].onclick = function(){
            operator = this.innerHTML;
            number2 = number;
            number = '';
            totalDiv.innerHTML = '0';
        };
    }

    document.getElementById('clear').addEventListener('click', function(){
        number = '';
        number2 = '';
        totalDiv.innerHTML='0';
    });

    document.getElementById('equals').addEventListener('click', function(){
        if(operator === '+'){
            number = add(number2, number);
        } else if(operator === '-'){
            number = substract(number2, number);
        } else if(operator === '*'){
            number = multiply(number2, number);
        } else if(operator === '/'){
            number = divide(number2, number);
        }
        totalDiv.innerHTML = number;
        
    });

    document.getElementById('decimal').addEventListener('click', function(){
        var numOfDecimals = 0;
        for(var k=0; k<number.length; k++){
            if(number[k] === '.'){
                numOfDecimals++;
            }
        }

        if(numOfDecimals === 0){
            if(number === ''){
                number = '0' + this.innerHTML;
                totalDiv.innerHTML = number;
            }else{
                number += this.innerHTML;
                totalDiv.innerHTML = number;
            }
        }
    });
});