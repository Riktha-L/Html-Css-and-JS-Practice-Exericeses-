//Class is a template for creating objects
class User{
  constructor(name, age){
    this.name=name;
    this.age=age;
  }
  getDetails(){
    console.log("HI "+this.name+" and my age is "+this.age);
  }
}
let user1=new User("Riktha",20);
user1.getDetails();