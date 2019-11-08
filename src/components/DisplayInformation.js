import React, {useState,useEffect} from 'react'
import axios from "axios"
import "./DisplayInformation.css"

const DisplayInformation = () => {
  const initialState = {
    categories : [{name:"FRONT END"},{name:"BACK END"},{name:"DATABASE"},{name:"VERSION CONTROL"},{name:"PROJECT MGMT TOOLS"}]
  }
const [information, setInformation] = useState(initialState)

// const fetchInformation = async () => {
//   const response = await axios.get()
//   const information = response.data 
//   setInformation(information)
// }
// const renderInformation = () => {
//   information.categories.map(category => {
//     debugger
//     return (
//       <div className="categoryContainer">
//         {/* {category.technologies.map(technology =>{
//           return <div>{technology}</div>
//         })} */}
//         <div>{category.name}</div>
//       </div>
//     )
//   })
// }
// useEffect(() => {
//   // fetchInformation()  
// }, [])
  
  return (
    <div>
      <h1 className="title">Learn to Code</h1>
      <h3 className="tagline">Acquire skills in several dimensions and become a complete programmer </h3>
      <div className="container">
      {information.categories.map(category => <div className="category">{category.name}</div>)}
      </div>
    </div>
  )
}

export default DisplayInformation
