// // // // // const example=function(a,b)
// // // // // {
// // // // //   return a+b;
// // // // // }
// // // // // console.log(example(4,5))
// // // // // fun1=(a,b,c)=>a+b+c;
// // // // // console.log(fun1(2,3,4))

// // // // const foo= (a,b)=>{
// // // //   console.log (a+b);
// // // //   return"I'm from foo";
// // // // }
// // // // const bar=(data)=>{
// // // //   console.log("Data from argument:",data);
// // // //   return("I'm from bar")
// // // // } 
// // // // foo(10,20);
// // // // // console.log(bar(result)); //console.log(bar(foo()));


// // // //Dependency of the functions
// // // const foo=(x,y=0)=>{
// // // const dependent=(z)=>{
// // //   return (x*2);
// // // }
// // // return dependent(x+y);
// // // }
// // // console.log(foo(9));

// // //Callback function

// // const foo=(cb)=>{
// //   console.log("I'm from foo function");
// //   cb();
// // }
// // const bar=()=>{console.log("I'm from bar function")}
// // console.log(foo(bar))
// //  const random=[1,2,3,4,5,6,7];
// //  const AfterMultiplication=random.map((val,index)=>val*2);
// //  console.log(AfterMultiplication);

// //  const num=[1,2,3,4,5,6,7,8,9,10];
// //  const evenNum=Array()
// //  num.map((eve)=>{ if (eve%2==0)
// //   return evenNum.push(eve); })
// //  console.log(evenNum);

// //  const filterfunc=num.filter((element)=>element%2===0)
// //  console.log(filterfunc);


const num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
num.forEach((val)=>sum +=val)
console.log(sum);

