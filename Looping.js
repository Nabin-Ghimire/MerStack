//Program to display first 20 even numbers
// let i=2;
// do{
//   console.log(i);
//   i=i+2;
// }while(i<=20);

//To print 
// 1   2   3   4   5   
// 1   2   3   4
// 1   2   3
// 1   2
// 1

// for(i=5;i>=1;i--){
// let toprint='';
// for(j=1;j<=i;j++)
// {
//   toprint+=j+"   ";
// }
// console.log(toprint);
// }
  
const allusers=
[
  {name:"Nabin",email:"Nabin@gmail.com",address:"Gho.na.pa",phone:"9815"},
  {name:"Shyam",email:"shyam@gmail.com",address:"Dhangadhi.na.pa",phone:"9815684"},
  {name:"Ram",email:"ram@gmail.com",address:"Bhi.na.pa",phone:"9815r48932"},
  {name:"Arjun",email:"arjun@gmail.com",address:"Go.na.pa",phone:"9815948"},
  {name:"Karan",email:"karan@gmail.com",address:"Banke.na.pa",}
 
];
for(elem of allusers)
{
  if(elem && (elem.hasOwnProperty('name') && elem.hasOwnProperty("email") && elem.hasOwnProperty("address") && elem.hasOwnProperty("phone")))
  console.log(elem.name)
  console.log(elem.email)
  console.log(elem.address)
  console.log(elem.phone)
}
