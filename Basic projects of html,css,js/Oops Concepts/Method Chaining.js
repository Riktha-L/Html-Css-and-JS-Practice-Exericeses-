class Counter{
  constructor(){
    this.count=0;
  }
  increment(){
    this.count++;
    return this; //Returning the object itself for method chaining
  }
  decrement(){
    this.count--;
    return this; //Returning the object itself for method chaining
  }
  display(){
    console.log("Count: "+this.count)
    return this;
  }
  reset(){
    this.count=0;
    return this;
  }
}

let c=new Counter();
c.increment().decrement().increment().increment().increment().display();
