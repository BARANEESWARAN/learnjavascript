import React from 'react'

function Errorhandle() {


// "use strict"
//use strict use pannama run pann no error but ithu refence error because we did not put variable type in front of variable
//1.reference error

// variable="variable"
// console.log(variable)

//2.type error 
const a=1;
// a=2
console.log(a)
//3.syntax error double ..
// Object..create() 

//default erroe message
const Error=()=>{
try{
const a=2;
a=3
}
catch(err){
console.log(err.name,"it shows type only typeeror above try") 
console.table(err.stack,"overall detail")
console.error(err.stack,"overall detail")
console.warn(err.stack,"overall detail")
}
}

Error()

//sustome error message

const CutomeError=(message)=>{
    this.message=message;
    this.name='custom Error';
    this.stack=`${this.name} : ${this.message}` 
}

const Errortwo=()=>{
    try{
throw new CutomeError("this is custom Error")
    }
    catch(err){
  
    console.error(err.stack,"overall")

    }
    }
    Errortwo()


    
//default javascript error msg
const Errorthree=()=>{
    let i=0;
    while(i<=5){
    try{

if(i%2!==0){
throw new Error("odd")
}
console.log("even")
    }
    catch(err){
  
    console.error(err.message,"overall")

    }
    finally{
        console.log("...finaly")
        i++;
    }
}
    }
    Errorthree()


  return (
    <div>Errorhandle</div>
  )
}

export default Errorhandle