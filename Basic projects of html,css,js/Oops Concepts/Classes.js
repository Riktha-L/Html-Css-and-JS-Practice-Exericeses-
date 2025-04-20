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

class StudentDB{
  constructor(name,age,rollno){
    this.name=name;
    this.age=age;
    this.rollno=rollno;
  }
  printDetails(){
    console.log("Student name is "+this.name+" and roll no is "+this.rollno);
  }
}
let student1=new StudentDB("Ravi",20,101);
student1.printDetails();