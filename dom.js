// // // console.log("I'm here in dom.js.")
// // // document.write("I'm rendering in live server.")
// // // // document.querySelector("#first").innerHTML="Updated string"
// // // document.getElementById("first").innerHTML="Updated string"
// // // document.getElementsByClassName("second").innerHTML="hello"

// // setInterval(()=>{
// //   const today=new Date();
// // const hour=today.getHours();
// // const minute=today.getMinutes();
// // const second=today.getSeconds();
// // const time=document.getElementById("time").innerHTML=hour +":"+minute+":"+second;
// // },1000);

// window.addEventListener("DOMContentLoaded",(e)=>{
//   const btn=document.getElementById("btn");
//   let counter=0;
//   btn.addEventListener("click",(c)=>{
//   counter++;
// document.getElementById("time").innerHTML=counter;}

// )
// })
const count=document.querySelector("#time");
let counter=0;
fun=(e)=>{
counter++;
count.innerHTML=counter;
}