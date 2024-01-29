import React from 'react'

function Dom() {


//1.getElementById
const view1=document.getElementById("view1")
console.log(view1,"getElementById")

//2.querySelector
const view2=document.querySelector("#view2")
console.log(view2,"querySelector")

//3.style.css

// view1.style.display = "none";
// view2.style.display = "flex";

//4.getElementsByClassName  html collection <div></div>
const views=document.getElementsByClassName("view")
console.log(views,"getElementsByName")

//4.querySelectorAll node list collection npdelist mean <div>barani   </div>space kuda node list
const sameviews=document.querySelectorAll(".view")
console.log(sameviews,"querySelectorAll")

//5.another inside selecter

const view=view1.querySelectorAll("div")
console.log(view,"querySelectorAll")
const viewtagname=view1.getElementsByTagName("div")
console.log(viewtagname,"getElementsByTagName")


//6.even number
const even=view1.querySelectorAll("div:nth-of-type(2n)")
console.log(even,"even")
even[4].style.backgroundColor="yellow"



//for loop

for(let i=0;i<even.length;i++){
even[i].style.width="150px";
even[i].style.backgroundColor="green";
}


//queryselector
const navbar=document.querySelector("nav h1")
console.log(navbar,"querySelector")
navbar.textContent="hello barani"
const nav=document.querySelector("nav")
nav.innerHTML="<h1>hello baranees</h1><p>how are you?</p>"
nav.style.justifyContent="flex-start"


//tag access
console.log(even[0])   //2
console.log(even[0].parentElement,"parentElement")  //sectuon
console.log(even[0].parentElement.children,"children") //section oda childrens 12 div
console.log(even[0].parentElement.childNodes,"childNodes")  //ellame 12 div and one dive click enter also added 12div+12enter=24
console.log(even[0].parentElement.hasChildNodes,"hasChildNodes")  //section ku childnode iruka true varum
console.log(even[0].parentElement.lastChild,"lastChild")  //lasr child last enter educum
console.log(even[0].parentElement.lastElementChild,"lastElementChild") //last element means last div
console.log(even[0].parentElement.firstElementChild,"firstElementChild") //first element means last div
console.log(even[0].nextSibling,"nextSibling") //parene pogala first even data 2 athoda next chibling   <div>2</div>b apa b/n tha
console.log(even[0].nextElementSibling,"nextElementSibling") //parene pogala first even data 2 athoda next chibling   <div>3</div> tha namma even tha vachirukom ana dom tree la next elment access panlam
console.log(even[0].nextElementSibling.nextElementSibling,"nextElementSibling") //parene pogala first even data 2 athoda next chibling   <div>4</div>
console.log(even[0].previousSibling,"previousSibling") //  <div>1</div>a  <div>2</div>b previous a
console.log(even[0].previousElementSibling,"previousElementSibling") //  <div>1</div>a  <div>2</div>b previous element <div>1</div>

//last div remove 
// view2.lastElementChild.remove()


//add new element
const newdiv=document.createElement("div")
newdiv.textContent="hi"
newdiv.style.width="100px"
newdiv.style.backgroundColor="yellow"
return (
    <div>
    <nav>
      <h1>My Page</h1>
    </nav>
    <main>
      <section id="view1" class="view view1">
        <div>1</div>a
        <div>2</div>b
        <div>3</div>c
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </section>
      <section id="view2" class="view view2">
        <h2>My 2nd View</h2>
      </section>
    </main>
  </div>
  )
}

export default Dom
