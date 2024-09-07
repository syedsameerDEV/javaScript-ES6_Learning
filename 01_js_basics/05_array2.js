// array proto types

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

console.log(marvel.concat(dc));
// Output: ['thor', 'ironman', 'spiderman', 'superman','flash', 'batman']

// spreadOperator
const newHero = [...marvel,...dc];
console.log(newHero);

const anotherArr = [1,2,3,[1,2,3],4,[1,2,3,[1,2],4],5];
const flatArr = anotherArr.flat(Infinity);
console.log(flatArr);


console.log(Array.isArray("Hello"));
// Output: false
console.log(Array.from("hello"));
// Output: ['h', 'e', 'l', 'l', 'o']

console.log(Array.from({name: "hello"})); // intresting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

