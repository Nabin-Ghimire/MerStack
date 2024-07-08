// const product={
//   Name:"product name",
//   price:1000,
//   discount:10,
//   ispercent:true
// }
// const {Name,price,discount,ispercent}=product
// if(ispercent)
//   discountprice=(price*discount)/100;
// console.log(discountprice);

//Program to calculate percentage and division of student 

// const student={
//   name:"Someone",
//   email:"Someone@gmail.com",
//   MarkObt:470
// }
// const{name,email,MarkObt}=student
// let percentage=MarkObt/5;
// console.log(percentage)
// if(percentage>=80)
// {
//   console.log("Distinction")
// }
// else if(percentage>=60)
// {
//   console.log("First division")
// }
// else if(percentage>=45)
// {
//   console.log("Second division")
// }
// else if(percentage<45)
// {
// console.log("Sorry! you are failed.")
// }

//To calculate the tax from salary
const income={
  name:"company",
  salary:5000000
}
const{name:Name,salary:Salary}=income;
let tax=0;
if(Salary<=500000)
{
  tax=Salary*1/100;
}
else
{
  if(Salary<=1000000)
  {
    tax=500000*1/100+(Salary-500000)*15/100;
  }
  else
  {
    if(Salary<=1700000)
    {
    tax=50000*1/100+500000*15/100+(Salary-1000000)*25/100
    }
    else
    {
      if(Salary<=2700000)
      {
        tax=500000*1/100+500000*15/100+700000*25/100+(Salary-2700000)*30/100
      }
      else{
          tax=500000*1/100+500000*15/100+700000*25/100+1000000*30/100+(Salary-2700000)*36/100
      }
    }
  }
}
let monthlyTax=tax/12;
console.log(tax);
console.log(monthlyTax);
