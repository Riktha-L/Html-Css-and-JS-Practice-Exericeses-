class Student{
  static noofStudents=0; //Static variable
  constructor(name,age){
    //Instance variables
    this.name=name;
    this.age=age;
  }
  details(){
    console.log("Hi "+this.name+" and my age is "+this.age);
    Student.noofStudents++; //Static variable is accessed using class name
  }
}
let Student1=new Student("Riktha",20);
let Student2=new Student("Ravi",21);
let Student3=new Student("Ravishan",29);
console.log(Student.noofStudents); //Static variable is accessed using class name
// BUt the output will be 0 because we have not called the details method yet. So the static variable is not incremented yet.
Student1.details(); //Static variable is incremented here
Student2.details(); //Static variable is incremented here
Student3.details(); //Static variable is incremented here
console.log(Student.noofStudents); //Static variable is accessed using class name


// Here the noofstudents needed to be updated means we need to call the details methods that many times when needed to increment the static variable. So we can use static methods to do that.

class Stud1{
  static noofStudents=0; //Static variable
  constructor(name,age){
    //Instance variables
    this.name=name;
    this.age=age;
    Stud1.noofStudents++; //Static variable is accessed using class name
  }
  details(){
    console.log("Hi "+this.name+" and my age is "+this.age);
    Stud1.noofStudents++; //Static variable is accessed using class name
  }
}
let stud1=new Stud1("Riktha",20);
let stud2=new Stud1("Ravi",21);
console.log("Count "+Stud1.noofStudents); //Static variable is accessed using class name


