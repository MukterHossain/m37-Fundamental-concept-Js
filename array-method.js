const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'golden'},
    {name: 'phone', price: 900, brand: 'iphone', color: 'silver'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
]
//  loop throw করে return দেয়। 
const brands = products.map(product => product.brand);
console.log(brands)
const prices = products.map(product => product.price);
console.log(prices)


//  loop throw করে return না। 
products.forEach(product => console.log(product)) // single line
products.forEach(product => console.log(product.color))
products.forEach(product => {                        // multi line

})



//3. filter-  match শর্ত পুরণ করলে loop throw করে array return দেয়। 
const cheap = products.filter(product => product.price <= 5000)
console.log(cheap)
const specificName = products.filter(product => product.name.includes('n'))
console.log(specificName)


// //4. Find- যেটি match করবে তার প্রথমটি direct object দিয়ে দিবে। 
const special = products.find(pro => pro.name.includes('n'))
console.log(special)
