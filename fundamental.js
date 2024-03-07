//  1. How to declare a variable using let and const
const fatherName = 'Arnold'; // no change 
let season = 'rainy';  // change
season= 'winter';


//2. 6 basic  conditions >, <, ===, !==, <=, >=
// multiple conditions: &&, ||


if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}


// 3. array
// index
// length, push(set new value)
const numbers = [89, 35, 98, 10]
numbers[0] = 120; //push(set new value)

// 4. loop = for loop , while loop
for(let i =0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}

// 5. function 
function multiply (num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
console.log(output)

// 6. Object (অনেকগুলো বৈশিষ্ট্যের সমাহার)  declare with third bracket/{}
// 3 ways to access property by name
const student = {
    name : 'salib Khan',
    age: 32,
    movies : ['king khan', 'Dhakar Mastan']
}
const myVariable = 'age';
console.log(student.age) //1. direct by property
console.log(student['age']) //2. access via property name string
console.log(student[myVariable]) //3. access via property name in a variable

// array declare with third bracket /[] 


