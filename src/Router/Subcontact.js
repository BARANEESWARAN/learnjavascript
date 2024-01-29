import React from 'react'
import { useParams } from 'react-router-dom'
import { getData, particularData } from './JsonRouer'

function Subcontact() {
    const params=useParams()
    const SubData=getData(parseInt(params.id))
 
  return (
    <div>

     <p>{SubData.name}</p>
     <br>
     </br>
     <p>{SubData.age}</p>
     <br>
     </br>
     <p>{SubData.roll}</p>
    </div>
  )
}

export default Subcontact