let nameStr = "Amy";

function updateNames(newStr){
    let sentence = "Hello, name is John. My friend's name is also John.";

    let result = sentence.replaceAll("John", newStr);
    return result;
}

console.log(updateNames(nameStr));

let newSentence = "My name is John!"

function reverse(str) {
    let reverseStr ='';

    for (let i = str.length - 1; i >= 0; --i){
        reverseStr += str[i];
    }

    return reverseStr;
  }
  
  console.log(reverse(newSentence));

