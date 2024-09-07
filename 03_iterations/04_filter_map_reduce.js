const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by Apple",
};

// for of was not work in object

// for in

for (const key in myObj) {
  //    console.log(key , " " , myObj[key]);
}

const arr = ["js", "cpp", "py"];

for (const key in arr) {
  // console.log(key);
  // console.log(arr[key]);
}

const map = new Map();
map.set("IN", "india"); //-> it will hold key value pairs, no dublactie value it will not contain
map.set("USA", "United state of America");
map.set("UK", "United Kingdom");
map.set("UK", "United Kingdom"); // it will not add duplicate value

for (const key in map) {
  console.log(key);
}

// for of
// for of is used for array and set and map and string and typed array and map and set
// it will give us index of array and value of array and string and map and set and typed
// array and map and set and map and set and map and set and map and set and map

// for in
// for in is used for object and array and map and set and map and set and map and
// it will give us index of array and key of object and value of object and map and set
// it will give us index of array and key of object and value of object and map and set

// foreach

const coding = ["js", "java", "py", "ruby", "swift"];

// coding.forEach(function(items) {
//     console.log(items);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

//  coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);

// })

const myCoding = [
  {
    name: "js",
    file: "javascript",
  },
  {
    name: "java",
    file: "java",
  },
  {
    name: "py",
    file: "python",
  },
];

// const val = myCoding.forEach((item)=>{
//     console.log(item.name);
//     return item;
// })
//  console.log(val); // undefined

const val = myCoding.filter((item) => {
  return item.name === "js";
});

console.log(val);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  if (num > 4) {
    return num;
  }
});
console.log(newNums); // [5,6,7,8,9,10]

const anotherNum = [];

myNums.forEach((num) => {
  if (num > 4) {
    anotherNum.push(num);
  }
});
console.log(anotherNum);

const books = [
  {
    title: "Book 1",
    author: "Author 1",
    genre: "fiction",
    publish: 1981,
    edition: 2002,
  },
  {
    title: "Book 2",
    author: "Author 2",
    genre: "history",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book 3",
    author: "Author 3",
    genre: "Non-fiction",
    publish: 1999,
    edition: 2005,
  },
  {
    title: "Book 4",
    author: "Author 4",
    genre: "fiction",
    publish: 1989,
    edition: 2010,
  },
  {
    title: "Book 5",
    author: "Author 3",
    genre: "history",
    publish: 2009,
    edition: 2014,
  },
  {
    title: "Book 6",
    author: "Author 6",
    genre: "science",
    publish: 1987,
    edition: 2010,
  },
  {
    title: "Book 7",
    author: "Author 7",
    genre: "Non-fiction",
    publish: 1986,
    edition: 1996,
  },
  {
    title: "Book 8",
    author: "Author 8",
    genre: "science",
    publish: 2011,
    edition: 2016,
  },
];

// const userBooks = books.filter( (book)=>{
//   return book.genre === "history"
// })



const userBooks = books.filter((book)=>{
  return book.publish >= 1995 && book.genre === "history"
})

console.log(userBooks);
