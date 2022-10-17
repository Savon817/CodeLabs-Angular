let users = [
    {
        username: "John123",
        confirmation_email: true
    },
    {
        username: "Amy123",
        confirmation_email: false
    },
    {
        username: "Jamie123",
        confirmation_email: true
    },
];

const confirmedEmail = users.filter(checkConfirmation);

function checkConfirmation(users){
    if (users.confirmation_email === true){
        return users;
    }
}

console.log(confirmedEmail);

let kilometer = 1;

function kmToMiles(kilometer){
    let miles = (kilometer * 0.62137119)
    return miles;
}


let distanceToStl = 300;

console.log("Kilometers to Miles: " + kmToMiles(distanceToStl));

// function onKmToMiles(){
//     let userInput = document.getElementById("userInput").value;
//     let conversion = kmToMiles(userInput);
//     let someStr = document.getElementById("conversion");
//     return someStr.innerHTML("conversion") = conversion;   
// }