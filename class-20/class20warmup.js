function printDuplicates(arr){
    let newArr =[];
    let eleCompare;
    for(let i = 0; i < arr.length; i++){
        eleCompare = arr[i];
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[j] == eleCompare){
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}

let numbers = [1,1,5,3,7,9,10,4,3,1];
console.log(printDuplicates(numbers));

let characters = ["C", "$", "C", "1", "2", "3", "*", "%", "C", "*"];
console.log(printDuplicates(characters));