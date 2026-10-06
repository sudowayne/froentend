//  console.log('hello world');
//         let a = 5;
//         const b = 6

//         a =     10;
        
//         console.log(a);
//         console.log(b);

// //primitive data type
const name = "wasiu"// string
const age = 25// number
const isAlive = true// boolean
const nul = null// null
const und = undefined// undefined

//typeof
console.log(typeof name)
console.log(typeof age)
console.log(typeof isAlive)
console.log(typeof nul)
console.log(typeof und)

//type coercion
console.log('5' + 3); // string concatenation   
console.log('5' - 3); // number
console.log('5' * 3); // number
console.log('5' == 3); // false-- loose equality
console.log('5' === 3); // false-- strict equality

// conditional and comparison
   // if / else if / else 

    const score = 50;
   if (score >= 70) {
    console.log("good");
   } else if (score >= 60) {
    console.log("better");
   } else {
    console.log("Average");
   }

   // ternary operator
   // syntax: condition ? value_if_true : value_if_false

   let isAdult = 16;
   const result =  isAdult >= 18 ? "Adult" : "Minor";
   console.log(result);

   //truthy and falsy -- js lie detcector
     // falsy values -- false, 0, "", null, undefined, NaN
     // truthy values -- true, 1, -1, "hello", {}, []

   
//logical operators
// AND (&&) 
// OR (||)
// NOT (!)

const isOldEnough = true;
const hasPermission = false;

// AND (&&) -- all conditions must be true
console.log(isOldEnough && hasPermission); // false

// OR (||) -- at least one condition must be true
console.log(isOldEnough || hasPermission); // true

// NOT (!) -- inverts the boolean value
console.log(!isOldEnough); // false
console.log(!hasPermission); // true    
   
// nullish coalescing
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 
// It is a shorthand for the if statement: 
//   if (left === null || left === undefined) {
//     return right;
//   } else {
//     return left;
//   }

const userName = null
const displayName = userName ?? "Guest"
console.log(displayName);

//optinal chainging
const student = { firstName: "wasiu", age: 25, state: "lagos"}
console.log(student?.firstName);
console.log(student?.lastName);
console.log(student?.age);
console.log(student?.state);
console.log(student?.address);


// function  
// 3 ways to write funtion

//1. funtion declation (Classic)
function greet(name)   {
    return "Welcome to CIH " + name + "!"
}

console.log(greet("wasiu"));
console.log(greet('swain'));
console.log(greet('ameen'));

//2. function expression (store in a variable)
const multiply = function(num1, num2){
    return num1 * num2;
}
console.log(multiply(2, 20));
console.log(multiply(4, 5));
console.log(multiply(10, 10));

//3. arrow function
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(2, 20));



//short arrow function  (one linear implicit return, no need for {} and return)
const double = num => num * 2;
console.log(double(2));
console.log(double(4));
console.log(double(6));
console.log(double(8));
console.log(double(10));

//DEFAULT PARAMETER
const createStudent = (name, course="Unknown") => {
    return { name, course }
}
console.log(createStudent("Wasiu", "Computer Science"));
console.log(createStudent("ameen", "Mass Comm"));
console.log(createStudent("AbdulRauf"));


//callbacks
const processStudent = (name, callback) => {
    console.log("processing:", name);
    callback(name);
}

const sendWelcmoneMessage = (name) => {
    console.log("Welcome to CIH", name);
} 

processStudent("wasiu", sendWelcmoneMessage);
processStudent("ameen", sendWelcmoneMessage);
processStudent("AbdulRauf", sendWelcmoneMessage);

//setTimeOut = built-in callback function that excutes a function after a specified time interval
// console.log("order placed");
// setTimeout(()=>{
// console.log("suya is ready after 7 seconds");
// },9000);
// console.log("doing other things while waiting");


//array
const fruits = ["mango", "orange", "apple", "banana", "grapes", "kiwi"];
console.log(fruits[5]);
console.log(fruits.length);
fruits.push("strawberry");
console.log(fruits);
fruits.pop();
console.log(fruits);


//for each
const courses = ["Math", "Physics", "Computer Science", "Chemistry", "Biology"];

courses.forEach((name,index) => {
    console.log(`${index +1}. ${name}`);
    
})


//map
const numbers = [1,2,3,5]

const doubles = numbers.map((num) => num * 2);
console.log(doubles);
console.log(numbers);

//filter = returns a new array with all elements that pass the test implemented by the provided function
const studentScores = [90, 85, 70, 65, 60, 55, 50];
const passed = studentScores.filter((score) => score >= 60);
console.log(passed);

const studentName = ["wasiu", "ameen", "AbdulRauf"]
const names = studentName.filter((n) => n.toLowerCase().startsWith("a"));
console.log(names);
//find
// const students = ["wasiu", "ameen", "AbdulRauf"]
// const studentqq = students.find((n) => n.toLowerCase().startsWith("a"));
// console.log(studentqq);

const food = [
    {id: 1, name:"Rice", price: 2000},
    {id: 2, name:"Beans", price: 1000},
    {id: 3, name:"Yam", price: 3000},
    {id: 4, name:"Plantain", price: 4000},
    {id: 5, name:"Bread", price: 5000},
]

const mark = food.find((f)=> f.id === 20)
console.log(mark);

const noMark = food.find((f)=> f.id === 2)
console.log(noMark);


//spread operator
const oldStudents = ["wasiu", "ameen", "AbdulRauf"];
const newStudents = ["Wasiu", "ameen", "AbdulRauf", "Fatimah", "Hameed"];

console.log(oldStudents);
console.log(newStudents);

//removing an item without mutating the array
const withoutMark = oldStudents.filter((s) => s !== "wasiu")
console.log(withoutMark);

//rest operator
const sum = (...nums) => {
    return nums.reduce((total,num) => total + num, 0);
}

console.log(sum(1,2,3))
console.log(sum(10,20,30,40));

//`...` in function parameter = Rest (collect many into one aaray)
//`...` in array/object = spread (unpack many into individual elements)

// another spread example
const cars = ["toyota", "benz", "honda"]
console.log(cars)

const newCars = [...cars, "ferrari", "porch"]
console.log(newCars);

//object 
const person = {
    name: "Wasiu",
    age: 25,
    city: "Ibadan",
    state: "Oyo",
    country: "Nigeria",
    occupation: "Student",
    address: {
        street: "123 Main St",
        city: "Ibadan",
        state: "Oyo",
        zip: "123456"
    }
}



//Acesss with dot notation

console.log(person.name);
console.log(person.address.street);

//accesss with bracket notation(when key is dynamis or has specail chars)
const key = "address"
console.log(person[key]);


// destructuring - unpacking the values from an array or properties from an object

const {country, state, city} = person
console.log(country);
console.log(state);
console.log(city);

//renaming while destrcutting
const {name: fullName, age: currentAge} = person
console.log(fullName);

//nested destrcuuring
const {address: {city: homeCity}} = person
console.log(homeCity);


// default values
const {phoneNum = "N/A"} = student
console.log(phoneNum);

//spread on object--- cloning and updating
const updatePerson = {...person, age: 26, city: "osogbo", occupation: ""}

console.log(updatePerson.age);

//object utility method
console.log(Object.keys(person)); //list all field names of an object
console.log(Object.values(person)); //list all field values of an object
console.log(Object.entries(person)); //list all key-value pairs of an object
 

//array destructuring
const colors = ["red", "green", "blue"];
const [firstColor,secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

//skip items with commas
const [ , ,fifthColor] = colors;
console.log(fifthColor);


//template literals and string method
const newName = "saliu"
const newAge = 25
const newCouse = "computer scince"

const oldWay = "welcome " + newName + " you are " + newAge + " years old and you are  a student of " + newCouse;
console.log(oldWay);

const newWay = `welcome ${newName}, you are ${newAge} years old and you are a student of ${newCouse}`
console.log(newWay);

//expression on template literals
console.log(`next year will be ${newAge + 1}`);

const card = `   
naming: ${newName}
age: ${newAge}
course: ${newCouse}
`;

console.log(card);


//html with template literal
const studentHTML = `
    <div>
        <h2>${newName}</h2>
        <p>Age: ${newAge}</p>
        <p>Course: ${newCouse}</p>
    </div>
`;

console.log(studentHTML);

//string method
const input = "     Hey Wasiu    " 

console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.includes("Wasiu"));
console.log(input.trim());
console.log(input.replace("Hey", "Hi"))


//scope,closure and hoisting

//block scoping
const global = "i am visible everywhere";

if(true){
    const blockScope = "i am only visible in this block";
    let seeMeHere = "i am visible in this block";
    var youCantFindMe = "i am visible in this block";
    console.log(blockScope);
    console.log(global);   
}

// console.log(blockScope);
// console.log(seeMeHere);
console.log(youCantFindMe);


//closure

//lexical closure
const createCount = () => {
    let count = 0;
    
    return {
        increment: () => count++,
        decrement: () => count--,
        logcount: () => console.log(`Count: ${count}`)
    }
}
const counter = createCount();
counter.logcount();
counter.increment();
counter.increment();
counter.logcount();
counter.decrement();
counter.logcount();



//hoisting
//function declaration are hoisted
sayHello();

function sayHello() {
    console.log("Hello");
}

//var is hoisted but not initialized
var myVar = 10;
console.log(myVar);


//let and const are not hoisted
// console.log(myLet);
// let myLet = 20;

// console.log(myConst);
// const myConst = 30;

//promises, asyn/await and fetch

//promisses
const cookFood = (dish) => {
    return new Promise((resolve, reject) => {
        console.log(`cooking ${dish}`)

    setTimeout(() => {
        if (dish === "suya") {
            resolve(`${dish} is ready`);
        } else {
            reject(`${dish} is not ready`);
        }
    }, 2000);
    })
}

// //using .then or .catch to handle promise

// cookFood("suya")
//     .then((result) => console.log(`success ${result}`))
//     .catch((error) => console.log(`error ${error}`));

// cookFood("rice")
//     .then((result) => console.log(`success ${result}`))
//     .catch((error) => console.log(`error ${error}`));

//async/await

const orderDinner = async () => {
    try {
        console.log("placing order")
        const result = await cookFood("rice")
        console.log(`success ${result}`)
        console.log("eating dinner");
    } catch (error) {
        console.log(`error ${error}`);
    }
}

orderDinner();  







//non-primitive data type
//object
// array
// function