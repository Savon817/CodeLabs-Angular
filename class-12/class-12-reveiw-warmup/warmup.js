let nameStr = "Amy";

function updateNames(newStr){
    let sentence = "Hello, name is John. My friend's name is also John.";

    let result = sentence.replaceAll("John", newStr);
    return result;
}

console.log(updateNames(nameStr));

let newSentence = "My name is John!"

function reverse(str) {
    let reverseStr = str.split('').reverse().join('');
    return reverseStr;
  }
  
  console.log(reverse(newSentence));

