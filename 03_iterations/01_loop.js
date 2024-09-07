// For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i} `);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`)
    }
    
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);   
    }    
}


let myArr = ["flash", "batman", "superman"];

for (let i = 0; i < myArr.length; i++) {
    // console.log(myArr.length);
    
    const element = myArr[i]
    //  console.log(element);
}

// break 
// continue


for (let index = 1; index <=20 ; index++) {

    if (index == 5) {
        // console.log('detected 5');
        break;
        
    }

    // console.log(`value of index ${index}`);
    
    
}


for (let index = 1; index <=20 ; index++) {

    if (index == 5) {
        // console.log('detected 5');
        continue;
        
    }

    // console.log(`value of index ${index}`);
    
    
}

// while and do while loop

// while (condition) {
    
// }

let index = 0

while (index <= 10 ) {
    // console.log(`value os index = ${index}`);
    
    index = index +2
}
let arr = 0
while ( arr <myArr.length) {
    // console.log(myArr[arr]);
    arr = arr + 1;
}

// do while loop

let score = 11;
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);