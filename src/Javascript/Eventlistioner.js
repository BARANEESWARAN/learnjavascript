import React from 'react'

function Eventlistioner() {

//1.EventListioner
// const view=document.querySelector("#view2")
// const div=view.querySelector(".black")
// const h2=div.querySelector("h2")
// syntax
// .addEventListeners(event,function,usecapture)
// console.log("first",h2)
// const doSomething=()=>{
//     alert("do something")
// }
// h2.addEventListener(
//     "click",doSomething,false
// )
// h2.removeEventListener(
//     "click",doSomething,false
// )
// h2.addEventListener(
//     "click",(event)=>{
//         console.log(event.target)
//         event.target.textContent="subcribed"
//     },false
// )
document.addEventListener(
    "readystatechange",(event)=>{
      if(event.target.readyState==="complete"){
        console.log("completed")
        initApp()
      }
    }
)
const initApp=()=>{
    console.log("first")
    const view=document.querySelector("#view2")
    const div=view.querySelector(".black")
    const h2=div.querySelector("h2")
    view.addEventListener( //children la iruntha parent ku tha up aayi kite pokum ipa div click pan diva color and parent view backorond change aakum h2 click panna
    //h2 click panna h2 parent div and div parent view ella addevent umworkaakum first view click view muttum work aakum mela irunthu kela click pannanum
      //elathukum true pota top to bottom event nakum without stopprop 
    
    "click",(event)=>{
            view.style.backgroundColor="yellow"
        },true
    )
    div.addEventListener(
        "click",(event)=>{
            div.style.backgroundColor="green"
            event.stopPropagation();
        },true
    )
    h2.addEventListener(
        "click",(event)=>{
            // event.stopPropagation(); //boble akuratha stop pannum yetha click pandrmo athu tha chamge akum
            event.target.textContent="subcribed"
        },true
    )
    
}

  return (
    <body>
  <nav>
    <h1>My Page</h1>
  </nav>
  <main>
    <section id="view1" class="view1">
      <div>1</div>
      <div>2</div>
      <div>3</div>
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
    <section id="view2" class="view2 darkblue">
      <div class="black">
        <h2>My 2nd View</h2>
      </div>
    </section>
    <section id="view3" class="view3">
      <form id="myForm">
        <label for="myTextInput">Text Input:</label>
        <input type="text" id="myTextInput" autocomplete="off" />
        <button type="submit">Submit</button>
      </form>
    </section>
  </main>

</body>
  )
}

export default Eventlistioner