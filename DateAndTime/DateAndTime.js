current=new Date();
//console.log(current);
//console.log(current.getDate());
//console.log(current.getTime().toString());
//console.log(current.getHours());
//console.log(`${(current.getMonth())},${current.getFullYear()},${current.getDay()}`);
const current1 = new Date("2024-11-20");
const current2 = new Date("2024-11-23");

const current3 = current2 - current1; 
const differenceInDays = current3 / (1000 * 60 * 60 * 24); 

//console.log(`Difference in days: ${differenceInDays}`);
//console.log(Date.now());
console.log(current.toLocaleDateString());
console.log(Math.floor(current/1000).toISOString());