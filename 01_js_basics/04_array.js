// Arrays 

const myArr = [0,1,2,3,4,5,true,"hello"];
const myArrNew = new Array(1,2,3,4,5)
const myHero = [""]

// array Methods

myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift()
console.log(myArr);


 console.log(myArr.includes(true)); // returns true or false
 console.log(myArr.indexOf(true)); // returns the index of the first occurrence of the value, or

 const myNewArr = myArr.join()
 console.log(myNewArr); // returns a string of all the elements in the array, separated by



 console.log('A', myArr); // returns a new array containing the elements from index

 const myn1 = myArr.slice(1,3)
 console.log(myn1); // returns a new array containing the elements from index 1 to

 console.log('B', myArr);
 
 const myn2 = myArr.splice(1,3)
 console.log(myn2); // returns the elements that were removed from the array
 
 console.log('C',myArr); // returns the array with the elements removed

