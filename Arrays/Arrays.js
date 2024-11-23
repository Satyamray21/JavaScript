//1.Array containing 5 element.
let arr = ['Apple','Mango','banana','Grapes','Orange'];
console.log(arr);
//2.Program to add to end,first,delete frist and last.
arr.push("Gauva");//last me add
console.log(arr);
arr.pop();//end me remove.
console.log(arr);
arr.unshift("Gauva");// add first.
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.length);
//Sort in ascending order.
let a =[5,3,8,1,2];
console.log(a.sort());
console.log(a.sort().reverse());//sort in descending order.
console.log(a[0],a[a.length-1]);//max and min.
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = a1.concat(a2);
console.log(a3);
console.log(a3.includes(4));
let a4 = [1,2,2,3,4,6,3];
let unique = [... new Set(a4)];//removing duplicate.
console.log(unique);