
import React from 'react';
import './App.css';

import Errorhandle from './Javascript/Errorhandle';
import Dom from './Javascript/Dom';
import Eventlistioner from './Javascript/Eventlistioner';

// import Lessonone from './Javascript/Lessonone';
// import Game from './Javascript/Game';
// import ClassObject from './Javascript/ClassObject';
// import Class from './Javascript/Class';
// import Json from './Javascript/Json';
// import Subcontact from './Router/Subcontact';

// const Home=React.lazy(()=>import("../src/Router/Home"))
//   const About=React.lazy(()=>import("../src/Router/About"))
//   const Contact=React.lazy(()=>import("../src/Router/Contact"))

function App() {

  
  return (
//     <div className="App">
// {/* <Lessonone/> */}
// {/* <Game/> */}
// {/* <ClassObject/> */}
// {/* <Class/> */}
//  <Json/> 
/* <Errorhandle/> */
/* <Dom/> */
<Eventlistioner/>
//     </div>
/* <BrowserRouter>
<Routes>
  <Route path='/' element={<React.Suspense fallback={<p>...loading</p>}><Home/></React.Suspense>}>
  <Route path='/about' element={<React.Suspense fallback={<p>...loading</p>}><About/></React.Suspense>}>

  <Route path='/about/name' element={<div>Name</div>}></Route>

  </Route>
  <Route path='/contact' element={<React.Suspense fallback={<p>...loading</p>}><Contact/></React.Suspense>}>
<Route index element={<div>Index vas in route</div>}/>
</Route>
<Route path="/contact/:id" element={<Subcontact/>} />

  </Route>
<Route path="*" element={<div>No page found</div>}></Route>
</Routes>
</BrowserRouter> */



  );
}

export default App;


// import React from 'react'
// import { useApi } from './Cache'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const App = () => {

//   const api = "https://kr5ut6uf6rcuahytkaqfewjcta0jaueo.lambda-url.us-east-1.on.aws/"
//   const { status, data, error } = useApi(api,{ 
//     "requesttype": "fetchapps",
//     "user_name": "vijay.kumar@gtigrows.com",
//     "user_id": "vijay.kumar@gtigrows.com",

//   })
  // let fetchstore = JSON.parse([data])


  // function   HandleData(){
  //   const { status, data, error } = useApi(api,{ "requesttype": "fetchstorekeys" })
  //   console.log(data)
    
  // } 

//   console.log(typeof data,)
//   return (
//     <div className="container mt-5">
//            <button style={{backgroundColor:"yellow"}} onClick={HandleData}>Primary</button>
//       <h2 className="mb-3">
//         React Cache API Response with Custom Hook Example
//       </h2>
//       <div className="alert alert-primary mb-3 text-center">{status}</div>

   
//       {
//         <ul className="list-group">
//           {
//           data.map((item, index) => {
//             console.log(item,"nwe")
//             return (
//               <li key={index} className="list-group-item">
//                 {item.app_id}
           
//               </li>
//             )
//           })}
//         </ul>
//       }
   

//    <button onClick={}></button> 
//     </div>
//   )
// }
// export default App