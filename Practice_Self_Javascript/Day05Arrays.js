//Task 1 -Create an array of 5 fruits and print each one

let fruits = ["Mango", "Jackfruit","Banana"]

console.log(fruits)

//Task 2 -Add 2 more fruits using push(). & unshift().

fruits.push("Apple")
fruits.unshift("guava")
console.log("The Fruits added on this "+fruits)

//Task 3 - Check if "apple" is present using includes().

console.log("Is Apple was there on this bucket "+ fruits.includes("Apple"))

//Task 4 - Remove the first item using shift().& pop().
console.log("Removed the first fruit from the bucket was "+fruits.shift())
console.log(fruits)

console.log("Removed the Last fruit from the bucket was "+fruits.pop())
console.log(fruits)


//Task 5 -Loop through the final array and print everything.

for( fruit of fruits){
    console.log(fruit)
}

for (let i=0; i<fruits.length;i++){
    console.log(fruits[i])
    
}
