// Question 1
 student_name ="neha"
 student_age = 22
 student_coursefee = 12000
 ispaid = false

 console.log(`I am ${student_name} and My age is ${student_age},My courseFee is ${student_coursefee} which is ${ispaid?"paid":"Not paid" }`)

// Question 2
let marks = 80;
let attendance = 85;
let hasSubmittedProject = false;
if(marks< 0 || marks > 100){
    console.log("Invalid marks");
}
else if(marks >= 60 && attendance >= 75 && hasSubmittedProject)
{
    console.log("Eligible for certificate");
}
else if(marks >=60 && attendance >= 75 && !hasSubmittedProject)
{
    console.log("Conditional approval");
}
else {
    console.log("Not eligible");
}
//Question 3
const calculatebill =(price, quantity, discountPrecent= 0,taxPrecent= 18) =>{
    const total_amount = price*quantity
    const discount_amount = total_amount * (discountPrecent/100) 
    const tax_amount = discount_amount * (taxPrecent/100)
    const final_amount = (total_amount - discount_amount)+ tax_amount
    return{discount : discount_amount, total : final_amount,tax_amount}
}
const result= calculatebill(100,5,5,25)
console.log(result)

// Question 4
const students =['aniket','PRIYA','rohit','Neha'];
const names = students.map(name =>{
    name = name.trim().toLowerCase();
    return name [0].toUpperCase()+ name.slice(1);
});
names.push("Aman");
console.log(names);
names.shift();
console.log(names);
console.log(names.includes("Rohit"));
console.log(names.join(","));

// Question 5
const Student ={
    name:"Neha",
    age:22,
    course:"Mern stack",
    Skills:["Html","Css","JavaScript"],
    Address:{
        pin: 832108,
        city:"Aditypur",
    }
}
// const name= Student.name
// const age= Student.age
const {name,age:myage,Skills,Address}=Student
console.log(name,myage)