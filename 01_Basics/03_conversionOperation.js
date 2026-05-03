// *********************** Conversion ***************************//

let score = false

console.log(typeof score)
console.log(typeof(score))

// number
let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Bollean
let isLoggedIn = 1
console.log( typeof isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)


// ********************** Operations ***************************//

let value = 3
let negvalue = -value
console.log(negvalue)

// arthimetic operator
console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2/3);
console.log(2**3);
console.log(2%3);

// string opertion 
let str1 = "Zoro"
let str2 = " Singh"
str3 = str1 +str2
console.log(str3);

// some rule for string conversion automally
console.log(1+"2");
console.log("1"+2);

console.log("1"+2+2); // after the string use it consider as string
console.log(1+2+"2"); // before the string it consider as no number which can be add normally 

console.log(true);
console.log(+true);
console.log(+" ");

// postfix and prefix 
let gameCounter = 100
gameCounter++;
console.log(gameCounter);







