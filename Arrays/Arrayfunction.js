//1.forEach
let a = [1,2,3,4,5];
a.forEach((val)=>(console.log(val)));
//2.forEach
let sum=0;
a.forEach((val)=>
{

      sum += val;
     
})
console.log(sum);
//3.count no of number
let count=0;
let arr = [1,4,5,8,19]
arr.forEach((a)=>{
    if(a<5)
    {
        count++;
    }
})
console.log(count);
//ToUpper.
let str=["Satyam","vicky","ray"];
str.forEach((ab)=>(console.log(ab.toUpperCase())));
//mutiply each num
let ab=[1,2,3,4,5];
c=ab.map((c)=>{
    return c*3
})
console.log(c);
//extract name property.
const user=[
    {id:1,name:'Alice'},
    {id:2,name:'Bob'},
    {id:3,name:'Charlie'}
];
let users=user.map((u)=>{
    console.log(u.name);
})
//console.log(users);
let even = [1,2,3,4,5,6];
el =even.filter((e)=>{
    return e%2==0
})
console.log(el);
let re = [1,null,2,undefined,3];
r=re.filter((rev)=>{
    return rev !== null && rev !==undefined;
})
console.log(r);