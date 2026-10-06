console.log("JavaScript connected");
const randomNumber = Math.floor(Math.random() * 10) + 1 ;
console.log("Random Number:",randomNumber);
const input = document.getElementById("guessInput");
const button = document.getElementById("checkBtn");
const para = document.getElementById("result");

button.addEventListener("click",function(){
    console.log("Button Clicked");
    if(input.value === ""){
        para.innerText = "Please enter a number!";
        para.style.color = "red";
        return;
    }
    const guess = Number(input.value);
    console.log("Your Guess:", guess);
    if (guess === randomNumber){
        para.innerText = "Correct!";
        para.style.color = "green";
    }
    else if (guess< randomNumber){
        para.innerText = "Too Low!";
        para.style.color = "orange";
    }
    else {
        para.innerText = "Too High!";
        para.style.color ="red";
    }
    input.value = ""; 
});
