let n;
let i;
const prompt = require("prompt-sync")();

n = prompt("Enter your a Number: ");
n = Number(n);

for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log("Even Number is " + i);
    } else {
        console.log("Odd Number is " + i);
    }
}