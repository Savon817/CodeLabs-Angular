
for(let i = 0; i <5; i++){
    let repeatStr = '*';
    console.log(repeatStr.repeat(i+1));
}

for(let i = 3, j =1; i > 0; i--, j+=2){
    console.log("-".repeat(i)+ "*".repeat(j)+"-".repeat(i));
}