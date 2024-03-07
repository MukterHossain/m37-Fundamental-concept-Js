// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// or
// const [x, y] = [42 , 65]

// or array destructuring
const [x, y] = numbers;

function boxify(num1, num2){
    const nums = [num1, num2];   // make array
    return nums;
}

// const [first, second] = [90, 34];
// const [first, second] = boxify(90, 34);

// console.log(first, second)

const student = {
    name : 'salib Khan',
    age: 32,
    movies : ['king khan', 'Dhakar Mastan']
}
// const [firstMovie, secondMovie] = ['king khan', 'Dhakar Mastan'];
const [firstMovie, secondMovie] = student.movies;
// console.log(student.movies)



// object destructuring

// const {name, age} = {name: 'alu', age:14};
const {name, age} = {id: 12, name: 'alu', salary: 34000, age:14}

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine:'mac',
    language: ['html', 'css', 'js'],
    specification:{
        height:66,
        weight: 57,
        address : 'kumarkhali',
        drink:'water',
        watch:{
            color:'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
const {machine, ide} = employee;
const {weight, address} = employee.specification;
const [mylan, p,   q] = employee.language;
const {brand} = employee?.specification?.watch;  //(optional chaining (?) কোন object name যদি না থাকে

console.log(brand)