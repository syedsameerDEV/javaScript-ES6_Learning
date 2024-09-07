// object
//singleTon ->

//object Literals

const sym = Symbol("Key1")
console.log(typeof sym);
 

const jsUser = {
  name: "John Doe",
  age: 30,
  "occupation": "Software Engineer",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  isLoggedIn : false,
  lastLoginDays: ["Monday", "Saturday"],

  [sym] : "myKey1"

};

console.log(jsUser.name);
// console.log(jsUser."occupation");

console.log(jsUser["occupation"]);
console.log( typeof jsUser[sym]);


jsUser.isLoggedIn = true;
console.log(jsUser);

// Object.freeze(jsUser);

jsUser.lastLoginDays.push('Sunday');
 console.log(jsUser);
 
 jsUser.greetings = function () {
    console.log(`Hello js user `);  
 }

 console.log(jsUser.greetings());

 jsUser.greetingsTwo = function(params) {
    console.log(`hello js user ${this.name}, `);
    
 }
 console.log(jsUser.greetingsTwo());
 