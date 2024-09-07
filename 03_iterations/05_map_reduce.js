const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = number.map((num) => {
  return num + 10;
});

console.log(newNums);

const anotherNum = [];
number.forEach((num) => {
  anotherNum.push(num + 10);
});
// console.log(anotherNum);

// array method chaining
const newVal = number
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num >= 40);

// console.log(newVal);

// reduce

const val = [1, 2, 3, 4, 5];

const total = val.reduce((acc, currentVal) => {
  console.log(`acc: ${acc}, curentVal: ${currentVal}`);

  return acc + currentVal;
}, 0);

console.log(total);

const shoppingCart = [
  {
    item: "js Course",
    price: 10,
  },
  {
    item: "python Course",
    price: 20,
  },
  {
    item: "react Course",
    price: 30,
  },
];

const cart = shoppingCart.reduce((acc,item)=>{
  return acc + item.price
},0)

console.log(cart);

