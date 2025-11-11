console.log("=====================(Printing and Declaring stuff)")
//this will print to the console, not the actual webpage
console.log("Hey Javascript, please be nice to me"); //you don't need a semicolon , but I like them

//Javascript is a loosely typed language, so I can change the type of value a variable holds
let a = 100;
console.log(a); //prints 100

a = true;
console.log(a); //prints true

a = null;
console.log(a); //prints null

a = "Now I'm a string!";
console.log(a); //prints Now I'm a string!

var b;
console.log("hello" + b)

//JS will add "var" implicitly if it's the first time the variable appears
c = "I wasn't declared. JS will do the workd for me";
console.log(typeof c);

//let's write a function that compares two vars
function test(var1, var2) {
    console.log(var1 + " compared to " + var2);
    console.log("loose")
    console.log(var1 == var2); //loose equality
    console.log("strict")
    console.log(var1 === var2); //strict equality
}

console.log("=====================(Function Calls)")
test(100, "100")
test(0, false)
test(1, true)
test(2, true)
test(2, false)

//while 2 is truthy, the boolean true is evaluated as the number 1 and false as 0


//some if statements to drive the point home
console.log("=====================(if statement)")
if (2) {
    console.log("2 is truthy");
} else {
    console.log("2 is falsey");
}

if (0) {
    console.log("0 is truthy")
} else {
    console.log("0 is falsey")
}

//some more false tests
console.log("more falsey tests");
test('', false);
test(null, undefined);

//when you compare a boolean to a non-boolean, it turns into a number
test("string", true); //compares "string" to 1; //false
test("true", true)//compares "true"=="1"; //false

console.log("=====================arrays==============")
//Array Literals
let myArrLiteral = ["one", "two", "three"]
console.log(myArrLiteral);

//Array using new keyword
let primes = new Array(2, 3, 5, 7);
console.log(primes);

//Array methods
console.log(primes.length);
let morePrimes = primes.concat(11);
console.log(morePrimes);

//forEach
primes.forEach((value) => {
    console.log(value);
})

//using for loop to iterate
for (let index = 0; index < primes.length; index++) { //length is a property not a method
    console.log(primes[index]);
}

//enhanced for loop
for (let prime of primes) {
    console.log(prime)
}

//reassigning a value by its index
primes[1] = 13;

console.log(primes);

//push
primes.push(17);

console.log(primes);
//pop to remove
primes.pop();
console.log(primes);

console.log(primes.splice(2, 1)); //removes from start to delete amount

console.log(primes);

//map 
let primesTimes2 = primes.map((value) => {
    return value * 2
})
console.log(primesTimes2);

//chain calls
let primesTimes2Plus2 = primes.map((x) => {
    return x * 2
}).map((x) => { return x + 2 });

console.log(primesTimes2Plus2)


//try out these functions as well:
//filter
//sort
//reduce

console.log("===template literals======")
let x=5;
let y=10;

console.log(`The sum of ${x} and ${y} is ${x+y}.`);