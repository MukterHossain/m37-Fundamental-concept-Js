// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy
let myVar = 5;
//check any truthy
// if(myVar){
//     myVar = numbers *100;
// }
// else{
//     myVar = 0;
// }

let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}
const money = 800;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit'
}


//ternary operator
let food1 = money> 100? 'biryani' : 'cha biscut';
console.log(food1)

let drink = (money > 100 && myVar > 100)? 'cock': 'filter water';



// number to string conversion
const num1 = 52;
// console.log(num1)
const numStr = num1 + '';
// console.log(numStr)


// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum)

// 
let isActive = true;
// const isActive = false;
const shoUser = () => console.log('display User');
const hideUser = () => console.log('hide User')
// isActive ? shoUser(): hideUser();

// use && if the left side is true then right side will be executed
isActive && shoUser();

// user || if the left side is false then right side will be executed
isActive || hideUser();

//toggle boolean
isActive = !isActive;