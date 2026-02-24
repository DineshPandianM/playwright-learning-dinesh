const employee = "Pandi"
let base_salary = 50000
let bonus = 20
let tax = 3

function Salcalculate() {
    let bonus_Amount = (base_salary * bonus) / 100
    let tax_amount = (base_salary * tax) / 100
    let final_Sal = base_salary + bonus_Amount - tax_amount
    return final_Sal
}

let Takehome = Salcalculate()
console.log("Employee_Name : " + employee)
console.log(Takehome)