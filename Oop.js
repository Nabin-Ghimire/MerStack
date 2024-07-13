function User(_name,_address){
  this.name=_name,
  this.address=_address
}
const userObj=new User();
userObj.name="Nabin Ghimire";
userObj.address="GhodaGhodi municipality 01"
console.log(userObj);
console.log(User)

User.prototype.getName=function(){
 return this.name;
}
const func=userObj.getName();
console.log(func);