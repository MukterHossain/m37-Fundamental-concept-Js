// 1. JSON > stringify , parse
const student = {
    name : 'salib Khan',
    age: 32,
    movies : ['king khan', 'Dhakar Mastan']
}

// convert object to JSON.stringify
const studentJSON = JSON.stringify(student);
console.log(student)
console.log(studentJSON)

// convert   JSON.stringify to object
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)



// 2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));
//or
// .then(data =>  function());

// keys, values
const keys = Object.keys(student)
const values = Object.values(student)


// for - loop  in the array 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num))  // if not want return
numbers.map(num => num * 2); // if want return

// for of on array like object
// loop on an object using (for in) loop

// add or remove from an array

const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'golden'},
    {name: 'phone', price: 900, brand: 'iphone', color: 'silver'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
]

const newProduct = {name: 'webcam', price:700, brand:'Lal'};
//copy products array and then add newProduct
const newProducts = [...products, newProduct]

//create a new array without one specific item
// remove phone means create a new array without the  phone
const remaining = products.filter(pro => pro.name !=='phone')
