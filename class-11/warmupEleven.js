function calculate(a, b, operator){
    if(operator === "+"){
        return a + b;
    }else if(operator === '-'){
        return a - b;
    }else if(operator === "*"){
        return a * b;
    }


}

console.log(calculate(1, 1, "+"));
console.log(calculate(2, 2, '-'));