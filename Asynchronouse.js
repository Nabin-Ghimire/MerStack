// // // setTimeout(()=>{
// // //   console.log("I'm first line")
// // // },3000);


// // // setTimeout(()=>{
// // //   console.log("I'm second line")
// // // },2000);


// // // setTimeout(()=>{
// // //   console.log("I'm third line")
// // // },2000);


// // // console.log("I'm the last line")
// // console.log("I'm first line")
// // const myPromise=()=>{
// //   return new Promise((resolve,reject)=>{
// //   const result=false;
// //   if(result) resolve("Successfully done!");
// //   else reject("Rejected");
// // })}
// // myPromise().then((para)=>console.log(para)).catch((para)=>console.log(para));
// // console.log("I'm last line");
// const func1=()=>{
//   return new Promise((reso,rej)=>{
//     const res=true;
//     if(res) reso("First");
//       else rej("Canceled");
//   })
// }
// const func2=()=>{
//   return new Promise((reso,rej)=>{
//     const res1=true;
//     if(res1) reso("Second");
//       else rej("Canceled2");
//   })
// }
// const func3=()=>{
//   return new Promise((reso,rej)=>{
//     const res2=true;
//     if(res2) reso("Third");
//       else rej("Canceled3");
//   })
// }
// func1()
// .then((res1)=>{console.log(res1)
// return func2()})
// .then((res2)=>{console.log(res2) 
//   return func3()})
//   .then((res3)=>{console.log(res3)})
//   .catch((rej)=>console.log(rej));

const asyncfun=async ()=>{
  const x=false;
  if(x) return ("Returned resolve");
  else throw("Returned reject");
}

async function asyncfunRead(){
  try{
    const value=await asyncfun();
    console.log(value);
  }
  catch(exception){
    console.log(exception);
  }
}
asyncfunRead();