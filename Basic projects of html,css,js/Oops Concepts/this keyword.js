let user={
  name:"Riktha",
  age:20,
  college:"SECE",
  getDetails(){
    console.log(this.name);
   // console.log(age); here this.age has to be used because age is not defined in this function
  }
}
user.getDetails();

//console.log(user); can use this to print the object
