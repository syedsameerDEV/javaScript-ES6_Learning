// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World"

for (const greet of greetings) {
    if (greet === ' ') {
        continue;
    }
console.log(`each character is : ${greet}`)

}


// maps

const map = new Map()
map.set('IN', "india") //-> it will hold key value pairs, no dublactie value it will not contain
map.set('USA', "United state of America")
map.set('UK', "United Kingdom")
map.set('UK', "United Kingdom") // it will not add duplicate value

// console.log(map);

for (const [key, value] of map) {
    console.log(key,' ', value);
    
}

const myObj = {
    game1 : "NFS",
    game2 : "FIFA",
    game3 : "PUBG",
    game4 : "Fortnite",
    game5 : "Call of duty"
}

for (const [key] of myObj) {
    // console.log(key); // object is not iterable
    
}