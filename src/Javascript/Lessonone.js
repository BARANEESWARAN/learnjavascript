import React from 'react'

function Lessonone() {
    let array=[]
// 1.---------------------------- VARIABLE--------------------------------------------------

let a=10;
let b=a;
let c=a===b;
console.log("a : ",a," b : ",b)
console.log(" c : ",c)


// 2.---------------------------------typeof------------------------------------------------
let d="barani"
console.log("typeof : ",typeof(d))
console.log(typeof(3))

// 3.(1)---------------------------------string-Length------------------------------------------------

let string="Baraneeswaran"
console.log("length :",string.length)
console.log("length".length)



// 3.(2)---------------------------------string-charAt------------------------------------------------
let CharAt="Baraneeswaran"
console.log(CharAt.charAt(4))
console.log(CharAt.charAt(8))

// 3.(2)---------------------------------string-indexOf------------------------------------------------
let Index="Baraneeswaran"
console.log(Index.indexOf("a"))
console.log(Index.indexOf("aran"))
console.log(Index.indexOf("ees"))
//3.2.1.---------------------------------string-LastIndexOf---------------------------------------------------------
     console.log(Index.lastIndexOf("a"))
     console.log(Index.lastIndexOf("aran"))
     console.log(Index.lastIndexOf("ees"))
     console.log(Index.lastIndexOf("qw"))

//3.2.1.---------------------------------string-Slice---------------------------------------------------------

let Slice ="Baraneeswaran"

console.log(Slice.slice(0,3))

console.log(Slice.slice(3,7))
console.log(Slice.slice(-3,-1))

//---------INCLUDES------------
let Include ="Baraneeswaran"
console.log(Include.includes("ees"))
console.log(Include.includes("yuqw"))

//---------toLower and toUpeerCase------------
let Lower ="Baraneeswaran"
let Upper ="Baraneeswaran"
console.log(Lower.toLowerCase())
console.log(Lower.toUpperCase())

//---------SubString------------
let substrings="Baraneeswaran"
console.log(substrings.substring(0,7))
//---------Split------------
let Split ="Baraneeswaran"
console.log("Baranees waran A".split("e"))
console.log("Baranees waran A".split(" "))
console.log("learn.earn.give".split(" , "))
console.log("learn.earn.give".split(""))

//---------replace and replaceall------------
let replacee="i like dogs,i am also like dags"
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(replacee.replace("dogs","cats"))
console.log(replacee.replace(/Dogs/i,"cats"))
console.log(replacee.replace(/Microsoft/g,"cats"))
console.log(text.replaceAll(/Microsoft/g,"cats"))
console.log(newText)

//------------trimstart-----------
let Trimvakue="    raja   "
console.log(Trimvakue.trimStart())
console.log(Trimvakue)

//------------trimend-----------
let Trimvakueend="    raja   "
console.log(Trimvakueend.trimEnd())
console.log(Trimvakue)

//------------padStart-----------
let Pad="10"
console.log(Pad.padStart(4,"i"))
console.log(Pad)

//------------padEnd-----------
let Padend="10"
console.log(Padend.padEnd(4,0))
console.log(Pad)





//-------------------------------------------------------PART_#=NUMBERS-------------------------------------------------------

let numone="5"
let numtwo=5
let numthree=5.0
console.log(numone===numtwo)
console.log(numtwo===numthree)
console.log(Number(numone)===numtwo)
console.log(Number(true)+1) //true=1
console.log(Number(false)+1) //false=0

//-------------------------------------------Number-Methods---------------------------------------------------------------
 
//-----parseFloat--------
 numone="5.09867abcd"
 numtwo=5
 numthree=5.0
 console.log(parseFloat(numone))
 console.log(parseFloat(numone).toFixed(2))
 console.log(parseInt(numone))
 //tostring-------------------------
 console.log(parseInt(numone).toString())
 //isNan----------------------------
 //number.isNan-----------------------

 console.log(Number.isNaN("barani"))
 console.log(isNaN("barani"))



 //----------------------------------------------------Math-methods--------------------------------------------------------

 //math.pi


 numtwo=5
 numthree=5.0
console.log(Math.PI)
//math.trunc
console.log(Math.trunc(Math.PI))
//math.round
console.log(Math.round(4.1))
console.log(Math.round(4.7))
//math.Ceil
console.log(Math.ceil(4.1))
console.log(Math.ceil(4.7))
//math.floor
console.log(Math.floor(4.1))
console.log(Math.floor(4.7))

//math.pow
console.log(Math.pow(10,2))
//math.random
//10 to 100
console.log(Math.floor(Math.random()*100)+1)


var Name="Baraneeswaran"
console.log(Name.charAt(Math.floor(Math.random()*Name.length)))


//---------------------------------------Switch Statement------------------------------------------------------------------
switch(Math.floor(Math.random()*2)){
    case 1:
        console.log(1)
        break;
        case 2:
            console.log(2);
            break;
            default:
                console.log("no match")

}

let player=["Rock","siccesor"]
let computer="paper"
switch(computer){
    case "paper":
        if(computer==="paper" && player[Math.floor(Math.random()*2)]==="Rock"){
            console.log("computer win")
        }
        else{
            console.log("player win")
        }
      
        break;
        case 2:
            console.log(2);
            break;
            default:
                console.log("no match")

}

//-------------------------------------------------ternary operater-------------------------------------------------------

let score=65
let result=score>89?"A":score>79?"B":score>69?"C":score>59?"D":"fail";
console.log("result : " ,result)

let pla="Rock"
let com="siccesor"

let Winner=pla==="siccesor"&& com==="Rock"?"computer win":pla==="Rock"&&com==="siccesor"?"player win":"tie";

console.log("Winner : " ,Winner)


//--------------------------------------Promt-----------------------------

// let user=prompt("Enter your Name")
// console.log(user)
// if(user){
// console.log(user??"you did not enter your name a")
// }
// else{
//     console.log("you did not enter name b")
// }


//--------------------------------------------------Excesise-------------------------------------------------------------
// let computerr="seccesor"
// let Game=window.confirm("Are you ready to play")

// let value=Game==true?prompt("Enter you choice"):window.confirm("okay see you next time");

// let startgame=value==="Rock"&&computerr==="seccesor"?window.confirm("player win"):value==="paper"&&computerr==="seccesor"?window.confirm("computer win"):value===computerr?window.confirm("match Tie"):window.confirm("please ente rChoice");


//---------------------------------------------for loop---------------------------------------------------------------

let test=[1,2,3,4,5]
// for(let i=0;i<6;i++){
// if(i==6){
// let a="*"

// break;
// }
// }
console.log(test)

console.log([...test,3])
let i=6;
while(i<6){
    console.log(i)
    i++;
}

do{
    console.log(i)
    i++;
}while(i<6)

//---------------------------------------------------------FUNCTION--------------------------------------------------------

function Sum (num1,num2){
console.log(num1,"num1")
console.log(num2,"num2")

    if(num2==undefined){
        return num1+num1
    }
    return num1+num2

}

console.log(Sum(10,20),"hi")

function EmailSlice(email){

    let result=email.slice(0,email.indexOf("@"))
  let final=result.charAt(0).toUpperCase()+email.slice(1).toLowerCase()
  return final
}
console.log(EmailSlice("barani@gmail.com"))


function TestSlice(email){
console.log(email)

    for(let i=email.length;i>0;i--){
        console.log(i)
let a=email.splice(i-1,1,"*")
console.log(a)
    }

}
console.log(TestSlice([1,2,3,4]))







// console.log("first",player[Math.floor(Math.random()*2)])


// const seasons = ["Spring", "Summer", "Autumn", "Winter"];

// let seasonsList = [];


// seasons.forEach((season, index) => {
//     seasonsList.push(<li key={index}>{season}</li>);
//   });

//   function Loop(index){
//   for(let i=0;i<seasons.length;i++){

// seasonsList.push(<li key={i}>{index[i]}</li>);

//   }
 
//   }

//   Loop(seasons)


//--------------------------------------------------------------ARRAY-----------------------------------------------------------

let Array=[]

Array[0]="barani"

Array[1]="raja"

Array[2]="rani"

Array[3]="mani"
Array[4]="kalai"
console.log(Array,"Array")

//----------------------Array Slice-------------------------------
//slice(optional start parameter, optional end parameter)

let ArraySlice=Array.slice(1,3)

console.log(ArraySlice,"ArraySlice with start and end value 1,3")
let ArraySlice2=Array
console.log(ArraySlice2,"ArraySlice2")
console.log(ArraySlice2.slice(1),"ArraySlice2.slice()")
console.log(ArraySlice2.slice(-3),"ArraySlice2.slice(-3)")


//--------------------Array SPlice-------------------------------
// splice(start, optional delete count, optional items to add)

let Arrayone=[1,2,3,4,5]
let ArraySplice=Arrayone.splice(1,0,"new")
console.log(ArraySplice,"Array.splice(1,2,new)")


const food = ['pizza', 'cake', 'salad', 'cookie'];

let neww=food.splice(1,1,"burrito")

console.log(neww)



//--------------------------------Array-shift and unshift------------------
let Shift=[1,2,3,4]
let shift=Shift.shift()
console.log(Shift,"original")
console.log(shift,"stored")

//unshift
let Unshift=[1,2,3,4]
let unShift=Unshift.unshift("new1","new2")
console.log(Unshift,"unshiftoriginal")
console.log(unShift,"unshiftstored stored value return total count value ")

//push and pop
let arraypush=[1,2,3,4,5]
let arrayPush=arraypush.push(6)
console.log(arraypush,"originalarraypush")
console.log(arrayPush,"returnpush")

//pop
let arraypop=[1,2,3,4,5]
let arrayPop=arraypop.pop()
console.log(arraypop,"originalarraypop")
console.log(arrayPop,"returnpop")

//----------------------------------------------array-reverse------------------------------------
let arrayreverse=[1,2,3,4,5]
let arrayReverse=arrayreverse.reverse()
console.log(arrayreverse,"originalarrayreverse")
console.log(arrayReverse,"returnarrayReverse")

//----------------------------------------------array-join------------------------------------
let arrayJoin=[1,2,3,4,5]
let arrayjoin=arrayJoin.join(" an ")
console.log(arrayJoin,"originalarrayJoin")
console.log(arrayjoin,"returnarrayjoin")

//----------------------------------------------array-Spliit------------------------------------
let arraySplit=[1,2,3,4,5]
let arraysplit=arrayjoin.split("an")
console.log(arraySplit,"originalarraySplit")
console.log(arraysplit,"returnarraysplit")

//----------------------------------------------array-concat------------------------------------
let array1=[1,2,3,4,5]
let array2=[6,7,8]
let array3=array1.concat(array2)
let array4=[...array1,...array2]
console.log(array3,"new concat array3")
console.log(array4,"new concat split array4")

//----------------------------------------------array-diamentionals------------------------------------
let one=["a1","b1","c1","d1"]
let two=["a2","b2","c2","d2"]
let three=["a3","b3","c3","d3"]
let four=["a4","b4","c4","d4"]
let five=["a5","b5","c5","d5"]

let overall1=[one,two]
let overall2=[three,four]
console.log(overall1[0][1],overall2[0][1],"2 diamontional")
let overall3=[overall1,five]
console.log(overall3[0][1][1],"3 diamontional")







  return (
    <>
{/* <ol type='1'>
    <li>variables</li>
    <li>Typeof</li>
 <li><ol>String Properties
       <li>length
        </li> 
    </ol>
    </li>
</ol> */}
  {/* <ul>{seasonsList}</ul> */}

</>
  )
}

export default Lessonone