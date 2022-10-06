let numbers = []
for (let i = 0; i < 51; i++){
    numbers.push(i).filter((i) => i % 2 == 1); //will not work
}

console.log(numbers);