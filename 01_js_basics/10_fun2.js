// functions

// restOperators
function cartPrice (num,num1,...num2) {
return  num2
}
console.log(cartPrice(200, 400, 500, 1000));


const product = {
    name: 'Product 1',
    prices: 100,
}

function handelObj(anyObj) {
    return `product name ${anyObj.name}, price is ${anyObj.price}`
}
console.log(handelObj(product)); // product name Product 1, price is 100


const arrayProduct = [200,300,400,500];

function handelArray(anyArray) {
    return anyArray[1]
}
console.log(handelArray(arrayProduct)); // 300