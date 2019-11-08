import React, {useState,useEffect} from 'react'
import axios from "axios"

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
      <h1>COMMON TECHNOLOGIES</h1>
      <h3>that you would need to develop expertise in</h3>
      {information.categories.map(category => <h3>{category.name}</h3>)}
    </div>
  )
}

export default DisplayInformation
