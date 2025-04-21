function outer(){
  let name="Riktha";
  function inner(){
    console.log(name); //Accessing outer function variable
  }
  return inner; //Returning inner function
}
let outfunc=outer(); //outer function is called
outfunc(); //inner function is called


// In the above code, the inner function is returned from the outer function and is assigned to the variable outfunc. When outfunc is called, it has access to the variables in the outer function's scope, even though the outer function has finished executing. This is an example of a closure in JavaScript. 

function counter(){
  let count=0;
  function inner(){
    count++;
    console.log(count);
  }
  return inner; //Returning inner function
}
let countFunc=counter(); //counter function is called
countFunc(); //inner function is called