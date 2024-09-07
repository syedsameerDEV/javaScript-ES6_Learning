function multBy5(num) {
    return  num * 5;

}

multBy5.power = 2

console.log(multBy5(5));
console.log(multBy5.power);
console.log(multBy5.prototype);
multBy5.length = 5
console.log(multBy5.length);



function creatUser(userName, score) {
    this.userName = userName
    this.score = score
}

// creatUser.prototype.increment = function(){
//     this.score += 1
// }

creatUser.prototype.in


