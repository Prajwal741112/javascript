/* AIRTHMATIC OPERATION

let a=5;
let b=8;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);  */

/*
let a=6;
let b=5;
console.log("cond1 && cond2=",a<b && a===6);
*/

/*let age = 25;

if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}*/

/*let mode = "blue";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);*/

 /*let num=prompt("enteer the number:");
 if (num%5==0){
    console.log(num,"is multiiple with 5");
 }else {
    console.log(num,"is  not multiiple with 5");
 }*/


/*let marks = Number(prompt("Enter the marks:"));

if (marks >= 90 && marks <= 100) {
    console.log(marks, "score is A");
} else if (marks >= 80) {
    console.log(marks, "score is B");
} else if (marks >= 70) {
    console.log(marks, "score is C");
} else if (marks >= 60) {
    console.log(marks, "score is D");
} else {
    console.log(marks, "score is F");
}*/

/*
for (let i=1;i<=5;i++){
    console.log("apna collage");
}*/

//calculate sum of 1to 5
/*let sum =0;
let n=6;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);*/


// for (let num =0;num<=100;num++){
//     if(num % 2!==0)
//         console.log(num);
// }


// for (let num =0;num<=100;num++){
//     if(num % 2==0)
//         console.log(num);
// }


// let str="jain collage"
// str.toUpperCase()
// console.log(str);


// let str="jain collage"
// str.toLowerCase()
// console.log(str);

// let str="0123456";
// console.log(str.slice(1,5));


// arrays


// let marks=[97,56,78,98,54,85,];
// console.log(marks);
// console.log(marks.lengeth); 

//  let cities = ["blg","dvg","haveri","shimoga"];
//  for (let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let val of marks){
//     sum+=val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of the class=${avg}`);

// let companies=["bloomberg","microsoft","uber","google","Ibm","netflix"];
// companies.shift()

// function myFunction(){
//     console.log("welcome to apna collage!");
//     console.log("were are you learning js:");
// }


// myFunction();
// myFunction();
// myFunction();
// myFunction();

function sum (x,y){
    s=x+y;
    return s;
    console .log("after return");
}
let val =sum(3,4);
console.log(val);