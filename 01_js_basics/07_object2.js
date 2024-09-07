// object-2

const obj = new Object() //-> this is singleTon object 

const obj2 = {} // -> This is Non singleTon object
console.log(obj);

const tinderUser = {};
tinderUser.id = "1234"
tinderUser.name = "John"
tinderUser.age = 25
tinderUser.isLoggedIn = false

const regularUser = {
    email: "xyz@gmail.com",
    fullName: {
        firstName: "John",
        lastName: "Doe",
    },
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.firstName);

const newObj1 = {1: "a", 2: "b"}
const newObj2 = {3: "a", 4: "b"}
const newObj3 = {5: "a", 6: "b"}

// const newObj3 = {newObj1, newObj2}
const newObj = Object.assign({},newObj1,newObj2,newObj3)
console.log(newObj);


// spreadOperator
const spreadObj = {...newObj1,...newObj2,...newObj3}

console.log(spreadObj);

const user = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "John"},
]

console.log(user[1].name);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
