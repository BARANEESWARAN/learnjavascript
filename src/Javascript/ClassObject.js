import React from 'react'

function ClassObject() {


//-------------------------------------------------OBJECT-------------------------------------------------------------------
let Objectone={
name:"barani",
age:21,
details:{
    height:6,
    weight:50
},
goal:["earn","grow","give"],
action:function(){
    return `my height is ${this.details.height}`
}


}
console.log(Objectone.name)
console.log(Objectone.details.height)
console.log(Objectone.goal[0])
//2 method
console.log(Objectone["name"])
console.log(Objectone["details"]["height"])

console.log("function : ",Objectone.action())

//--------------------------------------------------OBJECT INHERITANCE--------------------------------------------------


let Vehicle={

    name:"Vehicle",
    engine:function(){
        return "vrooom"
    }

}
console.log(Vehicle.engine(),"Vehicle engine ")

let Car=Object.create(Vehicle)
console.log(Car,"empty but we can access vehicle values")
console.log(Car.engine(),"inherite car data")
//add car object data

Car.name="Honda"
Car.engine=function(){          //overwrite engine value then new engine will display
    return "car sound"
}
console.log(Car,"after values inserted")
console.log(Car.engine(),"after overwrite i disply overwrite data")

let Bike=Object.create(Car)
console.log(Bike,"empty but we can access vehicle and car  values from inheritance")

Bike.number="0001"
console.log(Bike.number,"bike number")
console.log(Bike.name,"bike name")



//--------------------------------------------Object Iteration----------------------------------------------------

let ObjectIteration={

    name:"Barani",
age:22,
Role:"Developer",
experience:8,

}

console.log(ObjectIteration)
delete ObjectIteration.experience;

console.log(ObjectIteration,"deleted")

console.log(Object.keys(ObjectIteration,"keys"))
console.log(Object.values(ObjectIteration,"valuse"))
ObjectIteration.type="single"
for(let Data in ObjectIteration){
    console.log(`Data value is ${Data} and Values ${ObjectIteration[Data]}`)
}

console.log(ObjectIteration.hasOwnProperty("name"))


//--------------------------- Destructure---------------------------

let ObjectIterationtwo={

    name:"Barani",
age:22,
Role:"Developer",
experience:8,

}

const{age:userage,Role:userrole}=ObjectIterationtwo;
console.log(userage,"userage")
console.log(userrole,"userrole")


//---------------------Best destructure Method----------------------------------------------
const{name,age,Role,experience}=ObjectIterationtwo

console.log(experience,"experience")
console.log(Role,"Role")

function Movie({Role}){
    return Role
}
console.log(Movie(ObjectIterationtwo))
  return (
    <div>ClassObject</div>
  )
}

export default ClassObject