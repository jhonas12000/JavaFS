console.log("====================================(Functions)")

//this is a basic names JS function.
//Note because of hoisting we can call the function before we declare it.

helloWorld();

function helloWorld(){
    console.log("HELLO WORLD!")
}

//Here's an Anonymous function it hasn't been named but it's been assigned to a variable
let anon = function(){
    console.log("I'm an anonymous function")
}

anon(); //using the anonymous function

//arrow functions are pretty much like Java Lambdas (arguments => expression)

let arrow = () => {console.log("I'm an arrow function!")}
arrow();

//callback functions
function func1(x){
    console.log("Inside func1");
    console.log("x = " + x)
}

function func2(y, cb){
    console.log("Inside func2");
    cb(y); //so cb is intended to be a function, and take y as an argument
}

func2(9,func1); //so let's call func2, and pass in func1 as the "cb" argument

//let's pass in an arrow function as the "cb" argument instead

func2(5, (x)=>{console.log("You gave the arrow function: "+x)});

// in these two cases, func1 and the arrow function are the callback functions func2 is invoking!

//Finally lets look at closures

console.log("=====================Closures============================")

let HelloName = function (name){
    return function(){
        console.log("Hello "+ name);
    }
}

let nameTim = HelloName("Tim");

nameTim();

HelloName = HelloName("Luke");
//now we can never change the name value from Luke
HelloName();

let nameJohn = HelloName("John"); //this just causes helloName to run, with an argument it ignores;

//nameJohn(); //error: nameJohn is not a function! it's not recognized by the compiler

console.log("================================(Global Scope)");
