let maximumNum= parseInt(prompt("Enter a value"));
while(!maximumNum){
    parseInt(prompt("Enter a valid number"));
}

targetValue = Math.floor(Math.random() * maximumNum) + 1;

let guess = parseInt ( prompt ("Enter your first guess"));
let attempts=1;

while (parseInt(guess) !== targetValue) {
    if (guess === "q") break;
    guess = parseInt(guess);
    if(guess > targetValue){
        guess = prompt("Value is too High");
        attempts++;
    }else if (guess < targetValue) {
       guess = prompt("Value is too Low");
       attempts++;
    } else {
        guess = prompt("Invalid Guess. Please enter a number or press q to quit");
    }
}

if (guess === "q") {
    console.log("OK! You Quit");
} else {
    console.log ("CONGRATS YOU WIN"),
    console.log (`You got it in ${attempts} attempts`);
}