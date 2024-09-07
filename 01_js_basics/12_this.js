// This Key word

// arrow function


const user = {
    name: 'John',
    age: 30,
    sayHello: function(){
        console.log(`${this.name}, Welcome to Chai Code`)
        // console.log(this);
        
    }
}
// user.sayHello() // John, Welcome to Chai Code
// user.name = "sameer"
// user.sayHello() // sameer, Welcome to Chai Code

console.log(this);
// window
// this is global object in browser
// this is global object in node.js
// this is global object in react
// this is global object in angular
// this is global object in vue.js
// this is global object in ember.js


function Chai() {
    let userName = "code"
    console.log(this.userName);// in function this key will not work it will work only in object.
}

Chai();

const code = function () {
    let userName = "sameer"
    console.log(this.userName);
    // this will not work here because this is not an object
    // this is a function

}
code();


const chai = ()=>{
    let userName = "sameer"
    console.log(this.userName);
}
chai();