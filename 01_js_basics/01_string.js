const name = "Hello";

const name2 = "World";
console.log(name + " " + name2); // Outputs: Hello World    

console.log(name, name2);


const gameName = new String('HelloWorld');

const age = 27
console.log(age.toString());
console.log(typeof(age));

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toString());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newStr = gameName.substring(0,4)
console.log(newStr);


const anotherStr = gameName.slice(-8,8);
console.log(anotherStr);

const newStr2 = "             hello     js"

const newStr3 = newStr2.trim()
console.log(newStr3);


const token = "asajifd%kdvmkldsnvs%knkds%nbdbjs%jnbddjk";
const newToken = token.replaceAll("%", "-");
console.log(newToken);

console.log(token.split('%'));

console.log(token.endsWith('k'));
