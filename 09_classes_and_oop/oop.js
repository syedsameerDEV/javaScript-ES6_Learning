// object literal 

const user = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
        },
        getUserDetails : function(){
            // console.log(`got user details from database`);
            console.log(`username: ${this.name}`);
        }
}

// console.log(user.getUserDetails());
// console.log(this);

const user2 = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
        },
        getUserDetails : function(){
            // console.log(`got user details from database`);
            // console.log(`username: ${this.name}`);
        }
}




let myarr = [1,2,3,4,5,6,6]

let teo = myarr.map((num)=>{
    return num*3
})
let newArr = [];
newArr.push(...teo)

// console.log(newArr);

// constructor function


// const promise1 = new Promise((resolve, reject) => {
    
// })

// const date = new Date()

function newUser (userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`welcome ${this.userName}`);
        
    }
    return this
}

const userOne = new newUser("hitesh", 12, true)
const userTwo = new newUser("chai", 2, false)
console.log(userOne.constructor);
// console.log(userTwo);
