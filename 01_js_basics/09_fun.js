// Functions

function sayMyName() {
    console.log("J");
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("S");
    console.log("C");
    console.log("R");
    console.log("I");
    console.log("P");
    console.log("T");
}

// sayMyName -> reference
// sayMyName -> excute

// function addTwoNum(num1,num2) {
//     console.log(num1 + num2);
// }
// addTwoNum(3, "a");


function addTwoNum(num1,num2) {
//   let result = num1 + num2
//   console.log("welcome");
//   return result
return num1 + num2;
  console.log("welcome");
  
}

const res = addTwoNum(3, 5);
console.log(`result: ${res}`); // undefined

function loginUserMessage(userName) {
    if (userName === undefined) {
        console.log("Enter the username");
        return
    }
    return `${userName} just logged in`     
}

// console.log(loginUserMessage("sameer"));

console.log(loginUserMessage());


// ! convert false to true
// ! convert true to false

function loginUser(userName = "Guest") {
    if (!userName) {
        console.log("Enter the username");
        return
    }
    return `${userName} just logged in`     
}
console.log(loginUser());
