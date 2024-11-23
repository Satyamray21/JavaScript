//Program to find square root
let number = 144;
//console.log(21*Math.SQRT2);
 sq = Math.sqrt(number);
//console.log(sq);
//2. Generate a rondom number between 1 and 100;
max=100;
min =1;
for(let i=0;i<99;i++)
{
    let number2 = (Math.random() * (max-min+1)) ;
   // console.log(Math.floor(number2));

}
//3.round off to nearesy
let number3 = 5.2278;
console.log(number3.toPrecision(1));//nearest integer.
console.log(number3.toFixed(1));// to fix decimal.
console.log(Math.pow(2,10));
