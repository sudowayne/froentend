// for loop

// for (let i = 1; i <= 5; i++) {
//    console.log(`this is the output ${i}`);
// } 

//while loop
// let battery = 80

//  while (battery < 100) {
//     battery += 5
//     console.log(`battery is at ${battery}`);
//  }

//  console.log(`fully charged`);
 
//loop cpntrol with break a d continue
// the continue statemnt is used to skip the current iteration of the loop
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

//break-- loop control break 
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

//for... of loop
// const courses = ["js", "python", "html", "css", "react"]

// for (const course of courses) {
//     console.log(course)
// }

// for (let i = 0; i < course.length; i++) {
//     console.log(course[i]);
// }

// array and big 4 array method
// .forEach--- do something with each item
// const names = ["saim","ali", "bilal", "ubaid"]
// names.forEach((name) => {
//     console.log(`hello ${name}`);
// })

//.map method --- transform each item
// const  number = [1,2,3,4,5]
// number.map((num) => {
//     console.log(num * 2);
// })

// const double = number.map((num => num * 2))
// console.log(double);


//.filter method
// const score = [10, 20, 30, 40, 50]

// const  passed = score.filter((num) => num >= 30)
// console.log(passed);

// const names = ["saim", "ali", "bilal", "ubaid"]

// const filterdNames = names.filter((name) => name.startsWith('a'))
// console.log(filterdNames);

//.find method  ---find the first item that match the condition
const numbers = [
    {id: 1,name: "wasiu", age: 25},
    {id: 2,name: "saim", age: 22},
    {id: 3,name: "bilal", age: 28},
    {id: 4,name: "ubaid", age: 27}
]
const found = numbers.find((number) => number.id === 3)
console.log(found);