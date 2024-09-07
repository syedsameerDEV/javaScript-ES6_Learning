// if

// < -> less than
// <= -> less than or equal to
// > -> greater than
// >= -> greater than or equal to
// == -> equal to
// != -> not equal to
// === -> equal to (value and type)
// !== -> not equal to (value and type)


const isUserLoggedIn = true

let temp = 41

if (temp < 50) {
    console.log("temperature is less than 50");
}
// console.log("temperature is greater than 50");
else{
    console.log("temperature is greater than 50");
}

console.log("executed");


const balance = 1000;

// if (balance > 500) console.log("test"),
//  console.log("test2");

// nesting

 if(balance < 500){
    console.log("low balance");
 }else if(balance > 500 && balance < 1000){
    console.log("high balance");
 }else{
    console.log("balance is 1000");
    }


    const userLogIn = true;
    const debitCard = false;
    const logInGoogle = true;
    const logInEmail = false;

    if (userLogIn && debitCard) {
        console.log("user logged in and debit card is available");
    }

    if(logInGoogle || logInEmail){
        console.log("user logged in using google or email");
    }


