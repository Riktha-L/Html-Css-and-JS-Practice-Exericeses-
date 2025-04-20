class User{
  constructor(name){
    this._name=name;
  }
  get name(){
    return this._name;
  }
  set name(newname){
    this._name=newname;
  }
}
let user1=new User("Riktha");
console.log(user1.name); //Getter method is called

user1.name="Ravi"; //Setter method is called
console.log(user1.name); //Getter method is called
