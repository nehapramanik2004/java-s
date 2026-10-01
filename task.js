//task 1.1 print your name
console.log("Neha Pramanik");
//task 1.2 print your age as a number
console.log(22);
//task 1.3 print12*4
console.log(12*8);
//task 1.4 Add a comment
console.log("Neha Pramanik");
//task 2.1 
const myName ="Neha";
console.log(myName);
//task 2.2
let age = 22;
console.log(age);
age = age + 1;
console.log(age);
// //task2.3
// const school = "vidya bharti high school";
// school = "vidya jyoti school";

//task2.4
let a = 7;
let b = 3;
let sum = a + b;
console.log(sum);

//task 3.1
// let city = "jaipur";
// let students = 50;
// let isSunny = true;

//task 3.2 
let city = "jaipur";
let students = 50;
let isSunny = true;
console.log(typeof city);
console.log(typeof students);
console.log(typeof isSunny);

//task 3.3
console.log(typeof "5");
console.log(typeof 5);

console.log("5"+10);
console.log(5+10);
// task 3.4
let X;
console.log(X);
// task 4.1
console.log(2**8);
// task 4.2
console.log(17 % 2);
console.log(17 % 2 == 0);
//task 4.3
console.log("5" === 5);
//task 4.4
let count = 0;
count++;
count++;
count++;
console.log(count);
//task 5.1
let first =" Neha";
let last = "Pramanik";
console.log(`${first} ${last}`);
//task 5.2
let First = "Neha";
console.log(First.length);
//task 5.3
console.log("javascript".toUpperCase());
console.log("NEHAPRAMANIK".toLowerCase());
//task 5.4
console.log(First[0]);
//task 6.1
let Age = 20;
if (Age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
// task 6.2
let num = 0;
if(num > 0){
    console.log("Positive");
}
else if (num<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}
//task 6.3
let n = 8;
if (n % 2 == 0){
    console.log("even");
}
else{
    console.log("odd");
}
//task 6.4
let fruit = "banana";
switch (fruit){
    case "apple":
        console.log("red");
        break;
    case "banana":
        console.log("yellow");
        break;
        default:
            console.log("grape");
}
//task 7.1
for (let i = 5; i <= 10;i++){
    console.log(i);
}
//task 7.2
//way 1
for(let i = 2;i <=20; i +=2){
    console.log(i);
}
//way 2
for(let i = 2; i<=20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
//task 7.3
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}
//task 7.4
let total = 0;
for (let i =1; i<= 100; i++){
    total = total + i;
}
console.log(total);
//task 7.5
let N = 10;
while ( N >= 1){
    console.log(N);
    N--;
}
console.log("Blast off!");
// task 7.6
for (let i = 1; i <= 10; i++){
    if (i == 6){
        break;
    }
    console.log(i);
}
//task 8.1
function sayHi(){
    console.log("Hi!")
}
sayHi();
sayHi();
sayHi();
// task 8.2
function multiply(a,b){
    return a * b;
}
console.log(multiply(4, 5));
// task 8.3
function isEven(n){
    if(n % 2 === 0){
         return true;
    }
    else{
        return false;
    }
}
    console.log(isEven(6));
    console.log(isEven(7));

    // task 8.4
    const toCelsius = (f) => (f - 32) * 5/9
    console.log(toCelsius(212));
    console.log(toCelsius(32));

    // task 8.5
    function biggest(a,b,c){
         if (a >= b && a >=c){
            return a;
         }
         else if(b >= c){
            return b;
         }
         else{
            return c;
         }
    }
    console.log(biggest(3, 9, 5));
// task 9.1
let foods = ["pizza", "dose", "pasta", "momos", "biryani"];
console.log(foods[0]);
console.log(foods[foods.length - 1]);
// task 9.2
foods.push("idli");
console.log(foods.length);
//task 9.3
for(let food of foods){
    console.log(food);
}
// task 9.4
let nums = [4 ,9 ,2 ,7];
let Total = 0;
for ( let n of nums){
    Total +=n;
}
console.log(Total);

// task 10.1
let book ={
    title:"Wings of Fire ",
    author:"A.P.J.Abdul Kalam",
    pages: 180
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);
// task 10.2
book.pages = 300;
book.year = 2020;
console.log(book);
// task 10.3
let Book ={
    title:"Wings of Fire",
    author:"A.P.J.Abdul Kalam",
    pages: 3000,
    year: 2020,
    describe: function(){
        console.log(`${this.title} by ${this.author}`);
    }
};
Book.describe();
// task 10.4
let student =[{name: "A"}, {name:"B"}, {name: "C"}];
for (let s of student){
    console.log(s.name);
}
//task 11.1
let numms = [3, 6, 9];
let bigger = numms.map(n => n * 10);
console.log(bigger);

// task 11.2
let values = [5, 12, 8, 20, 1];
let result = values.filter(v => v> 7);
console.log(result);

// task 11.3
let animals = ["cat", "elephant","dog"];
let long = animals.find(w => w.length > 3);
console.log(long);

// task 11.4
let marks = [10, 20, 30];
let totals = marks.reduce((sum, m) => sum + m,0);
console.log(totals);
// task 12.1
let earth = "Earth";
function show(){
    let moon = "Luna";
    console.log(planet);
    console.log(moon);
}
// show();
// console.log(planet);
// console.log(moon);

// task 12.2
let color;

if (true) {
    color = "blue";
}

console.log(color);
// task 12.3
let counts = 0;

function addOne() {
    counts++;
}

addOne();
addOne();

console.log(counts);
//13.1
const Students = [
    { name: "Asha", marks: 88 },
    { name: "Ravi", marks: 54 },
    { name: "Meera", marks: 92 },
    { name: "Karan", marks: 67 }
];
function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "F";
    }
}
console.log(getGrade(88));

// Task 13.2
for (let s of Students) {
    console.log(`${s.name}: ${s.marks} (${getGrade(s.marks)})`);
}

// Task 13.3
let passed = Students.filter(s => s.marks >= 60);

passed.forEach(s => console.log(s.name));

// Task 13.4
let Totals = Students.reduce((sum, s) => sum + s.marks, 0);

let avg = Totals / Students.length;

console.log(avg);

// Task 13.5
let top = Students[0];

for (let s of Students) {
    if (s.marks > top.marks) {
        top = s;
    }
}

console.log(`Top Student: ${top.name}`);