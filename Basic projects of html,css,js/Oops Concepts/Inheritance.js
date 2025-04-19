//Static Method
//Parent class, Super class, Base class.
class user{
  static noofUsers=0; //Static variable
  constructor(name,age){
    //Instance variables
    this.name=name;
    this.age=age;
    user.noofUsers++; //Static variable is accessed using class name
  }
  static count(){
    console.log("Count of users "+user.noofUsers); //Static variable is accessed using class name
  }
}
let user1=new user("Riktha",20);
let user2=new user("Ravi",21);
let user3=new user("Viny",34);
user.count(); //Static method is called using class name


//Inheritance
// Child class, Subclass, Derived class.
class Exclusiveuser extends user{
  constructor(name,age){
    super(name,age); //Calling the constructor of parent class
    this.storage=100;
  }
  details(){
    console.log("Hi "+this.name+" and my age is "+this.age+" and I am an exclusive user"+ " and my storage is "+this.storage);
  }
}
let user4=new Exclusiveuser("Rvi",21);
user4.details(); 