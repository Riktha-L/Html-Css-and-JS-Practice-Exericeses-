class User{
  constructor(name){
    this.name=name;
  }
  getDetails(){
    console.log("HI "+this.name);
  }
}
class Exclusiveuser extends User{
 constructor(name,storage){
  super(name); //Calling the constructor of parent class
  this.storage=storage;
 }
  getDetails(){
    console.log("HI "+this.name+" and my storage is "+this.storage);
  }
}
let user1=new User("Riktha");
user1.getDetails();

let user2=new Exclusiveuser("Ravi",100);
user2.getDetails(); //Method overriding, child class method is called instead of parent class method