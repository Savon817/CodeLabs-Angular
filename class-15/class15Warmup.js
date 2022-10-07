let numbers = []
for (let i = 0; i <= 50; i++){
    numbers.push(i);
}

num = numbers.filter((i) => i % 2 == 1);

let sum = 0;
for( let i = 0; i < numbers.length; i++){
    sum += num[1];
}

console.log(num);
console.log(numbers);
console.log(sum);