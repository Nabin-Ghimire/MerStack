// const fullname:string="Nabin Ghimire";
type userRoll=10 |11 |12 |13;
interface userObj{
  name:string,
  roll:userRoll,
  email:string,
  phone?:number

}
let user:userObj={
  name:"Samarpan",
  email:"samarpan@gmail.com",
  roll:11  //gives error if enter numbers except 10,11,12,13
}
user.phone=9814788545;
console.log(user);
