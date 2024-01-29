import React from "react";

function Class() {
  //---------------------class-------------------------------------------------------------------------

  class AllData {
    constructor(name, age, roll) {
      this.name = name;
      this.age = age;
      this.roll = roll;
    }

    Data() {
      return console.log(
        `my name is ${this.name} and my age is ${this.age} and roll no is ${this.roll}`
      );
    }
  }

const Data1=new AllData("Barani",23,"Developer")
const Data2=new AllData("raja",20,"cooli")
const Data3=new AllData("rani",21,"manager")
// console.log()
Data1.Data()
Data2.Data()
Data3.Data()

//Get and set method

class vehicles{
    constructor(name,color,no){
        this.name=name;
        this.color=color;
        this.no=no;
        this.prize=[];
}

NewData(){
return console.log(`car name is ${this.name} car color ${this.color} car no${this.no} and prize ${this.prize} `)
}
getPrize(){
return this.prize;
}
setPrize(prize){
    return this.prize.push(prize)
}


}
const car1= new vehicles("honda","black",123)


console.log(car1.setPrize("1000"))
console.log(car1.setPrize("2000"))
console.log(car1)
console.log(car1.getPrize("2000"))

//-----------------------------------------------------Parent - Child-----------------------------------------------------


class Parent{
    constructor(name,age){
this.name=name;
this.age="22"
    }
    getname(){
        console.log(this.name)
    }
}

class Child extends Parent{
    constructor(name,roll){
        super(name)
        this.roll=roll
    }
    getData(){
        return `my name is ${this.name} my age is ${this.age} and my roll is ${this.roll}`
    }
}

const Childdata=new Child("barani","developer")
console.log(Childdata.getData())

//-----------------------------------------------------private property-------------------------------------------------

class PrivateData{
#name="barani";
constructor(){
    this.roll="developer";
    this.age=22;
}
setname(name){
    this.#name=name
}
getname(){
   return this.#name
}
}

const newprivateData=new PrivateData();
console.log(newprivateData)
console.log(newprivateData.setname("raja"))
console.log(newprivateData.getname())



  return <div>Class</div>;
}

export default Class;
