//Task 1 – Create a Simple Object

let mobile = {
    brand : "Apple",
    model : "iphone 16",
    price : 59000,
    color : "Black"
}
console.log("The Mobile model is "+mobile.model)
console.log("The Price of the  Mobile is "+mobile.price)

//Task 2 – Loop Through Object

 for (key in mobile){
     console.log(key + " : "+ mobile[key])
 }

 //Task 3 - Object with Array
 let student = {
name: "Dinesh",
marks: [80,75,90,85]
}
 for (key in student){
    console.log(student[key])
 }
 //Task 4 – Count Even Numbers from Object Array
 let numbers = {
values: [10,15,20,25,30,35]
}

let num = numbers.values;

for ( i=0;i<num.length;i++){
 
    if(num[i]%2==0)
        console.log(num[i])
}