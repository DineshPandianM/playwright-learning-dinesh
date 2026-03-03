

function  fullName(a,b) {
    return a + " "+b;
}
const FullName = fullName("Dinesh","Pandian");
console.log(FullName);


//Task 2 Create a function that returns age category

function  checkAge(age){
     if (age < 13){
    return "Child"
    }
     else if (age < 20){
        return "Teen"
    }
    else {
        return "Adult"
    }
    }
    let result = checkAge(22);
    console.log(result)

    //Task 3 Write an arrow function for square of a number

    const square =(n)=> n*n 
   console.log(square(5));

   //Task 4 Function Expression

   const  greeting = function (){
    console.log("Hello Dinesh")
   }
   greeting();

   // Task 5 Default paramter and passing 

   function country(name = "india") {
    console.log("Country name is "+ name)
    
   }
   country();
   country("USA");


 