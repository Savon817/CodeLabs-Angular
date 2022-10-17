// function isAnagram(first, second){
// 	let firstStr = first.split("").sort().join();
// 	let secStr = second.split("").sort().join();
    
// }

// isAnagram("cinema", "iceman"); // true 
// isAnagram("organge", "yellow"); //false

function isAnagram(first, second){
	let firstStr = first.split("").sort().join();
	let secStr = second.split("").sort().join();
    return firstStr === secStr;
}

console.log(isAnagram("cinema", "iceman")); // true 
console.log(isAnagram("organge", "yellow"));//false

// function nameCount(name, sentence){
//     let str = sentence.split("");
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i].includes(name)){
//             count++
//         }
//     }
//     console.log(count);
// }

// let person = "John";
// let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

// nameCount(person, announcement); // 3

function nameCount(name, sentence){
    let str = sentence.split(" ");
    let count = 0;
    let containStr = str.filter(element => element.includes(name));
    count = containStr.length;
    console.log(count);
}

let person = "John";
let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

nameCount(person, announcement); // 3