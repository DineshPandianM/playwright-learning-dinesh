let firstName = "  DINESH"
let lastName = "Pandian   "

//String Operation 

//lenght of string
console.log("The Length of the First Name is  "+ firstName.length) 
//Coverting lower/upper case
console.log("The Lowercase of the First Name is  "+ firstName.toLowerCase()) 
console.log("The Uppercase of the Last Name is  "+ lastName.toUpperCase()) 
//Template string 
console.log(`Combining both First & Last Name is" ${firstName}${lastName}`); 
//Triming the unwanted space
console.log("Removing unwanted space on First Name is  "+ firstName.trim()) 
//include check if it contain or not
console.log("To check name is there or not  "+ firstName.includes("Pandian")) 
//Replace the words
console.log("Replacing the Name  is  "+ firstName.replace("DINESH","PANDI"))
//Chatat - checking the letter on it
console.log(" 3 character of my name is  "+ firstName.charAt(3))

