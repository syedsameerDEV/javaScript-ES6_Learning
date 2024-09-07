// scope

var c = 300
{
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);

{
}

let a = 12
console.log(a);

 a = 20

//  nested Scope

function one() {
    const name = "hitesh"

    function two() {
        const website = "youtube"
        console.log(name);
        console.log(website);       
    }
    // console.log(website);
    // two()
    
}

one()


// +++++++++++++++++++++++++++intresting hosting

console.log(addOne(5));
 
function addOne(num) {
    return num + 1 
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));