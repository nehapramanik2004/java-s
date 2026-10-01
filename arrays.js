let fruits= ["apple", "mango", "kiwi","banana"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[fruits.length -1]);
fruits.push("grapes");
fruits.pop();
fruits[1] ="fig";
fruits.unshift("pineapple");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.includes("mango"));
fruits[4] ="orange";
console.log(fruits);
console.log(fruits.includes("mango"));
fruits[4]="mango";
console.log(fruits);
fruits[5]="pineapple";
console.log(fruits);
// loop through
let pets=["dog", "cat", "parrot"];
for (let pet of pets){
    console.log(`I like my ${pet}`);
}
//example 4
for (let i = 0; i <pets.length; i++){
    console.log(`${i}: ${pets[i]}`);
}
//example 5
let prices = [20, 50, 30, 40];
let total = 0;
for(let p of prices){
    total += p;
}
console.log(total);
// task 
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
