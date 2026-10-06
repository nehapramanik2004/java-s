// Select element via document getElement by id
const para = document.getElementById("para");
const heading = document.getElementById("heading");
const button = document.getElementById("btn");
const body = document.getElementById("body");
const inpt = document.getElementById("myinpt");

console.log(para, heading);
console.log(document.getElementById("btn"));

// // Inner Html ( Change Or Read Value Via JS)
// console.log(body);
// console.log(body.innerHTML);
// body.innerHTML = `
// <div>
// <h1> This is new H1 old data is removed via js </h1>
// <p> This is para </p>
// </div>
// `;

// Inner text ( Change and read via innerText)
// console.log(body.innerText);
// heading.innerText = "My Home";

// // Style add via dom
heading.style.backgroundColor = "darkblue";
heading.style.color = "white";
heading.style.fontSize = "20px";
heading.style.padding = "10px";
button.style.backgroundColor = "blue";
button.style.color ="white";
// Style Via Css Class Selector
// console.log(heading.classList);
// heading.classList.add("p-23");
// console.log(heading.classList);
// heading.classList.remove("head");
// console.log(heading.classList);

// addEventListener

button.addEventListener("click", () => {
  console.log("click detect hua hai button mai");
  button.innerText = "subscribed";
  heading.innerText = "Welcome! To our team";
  // we can read inner html value using ".value"
  para.innerText = `Input box value is ${inpt.value}`;
});