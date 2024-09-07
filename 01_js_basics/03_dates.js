// Dates

let myDate = new Date();
console.log(myDate); 
console.log(myDate.toString()); 
console.log(myDate.toLocaleString()); 
console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 14)
// console.log(myCreateDate.toDateString());
let myCreateDate = new Date(2024, 0, 14, 5, 3)
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());


console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDay());


