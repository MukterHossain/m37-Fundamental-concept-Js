const numbers = [89, 35, 98, 10]

const student = {
    name : 'salib Khan',
    age: 32,
    movies : ['king khan', 'Dhakar Mastan']
}

// 1. Template string
const about = ` My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;  // array থেকে কোন মান নিতে তার index number কে call করতে হয়

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 55;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z)=> x + y + z;
const doMath = (num1,  num2)=>{
    const sum = num1 + num2;
    return sum;
}


// spread operator
// const newNumbers = numbers;
const newNumbers = [...numbers];    // spread operator

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumbers)
console.log(numbers)


console.log(newNumbers)
console.log(numbers)
console.log(currentNumbers)