const a ={
    name:"Neha",
    roll: 12 ,
    class:'5'
}
console.log(a.name)
a.name ="Nishu"
console.log(a)
a.section ="A"
console.log(a)
//method of objects
//1. Object.keys()
let student ={
    name: "Neha",
    age: 21
};
console.log(Object.keys(student));
console.log(Object.values(student)); // 2. Object.values()
console.log(Object.entries(student)); // 3. Object.entries()
// 4.Object.assign()
let students ={ name:"Neha"};
let course ={ subject:"MCA"};

Object.assign(students, course);
console.log(students);
//5. Object.fromEntries()
let data = [
    ["name", "Neha"],
    ["age", 21]
];
console.log(Object.fromEntries(data));

// 6. Object.freeze()
let Students = {
    name : "Neha",
    age : 21
};
 
Object.freeze(Students);
Object.seal(Students);
Students.age = 22;

console.log(Students);
console.log(Students); //7. Object.seal()
console.log(Object.hasOwn(Students,"name")); // 8. Object.hasOwn

// Destructuring
const b = { name :"neha" , sem :"3rd"}
const {name:myname , sem }=b
console.log(myname,sem)