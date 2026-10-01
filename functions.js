function check_even(num){
    if(num%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
check_even(6)
check_even(17)
check_even(10)

function sum2num(a,b){
    return a+b
}
let n=sum2num(12,8)
console.log(n)
//variable based function
const checkeven= function(n){
    if(n%2==0){
        return 'true'
    }
}
let even=checkeven(20)
console.log(even)

//arrow function
const isEven=(no)=>{
    if(no%2==0){
        console.log("Even")
        return true
    }
}
console.log(checkeven(10))
