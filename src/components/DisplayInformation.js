import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayInformation.css";

const DisplayInformation = () => {
  const initialState = {
    categories: [
      {
        name: "FRONT END",
        technologies: [
          { name: "html" },
          { name: "html5" },
          { name: "java script" },
          { name: "J query" },
          { name: "CSS3" }
        ]
      },
      {
        name: "BACK END",
        technologies: [
          { name: "Ruby on Rails" },
          { name: "PHP" },
          { name: "Angular2" },
          { name: "Node.js" },
          { name: ".Net" }
        ]
      },
      {
        name: "DATABASE",
        technologies: [
          { name: "mySQL" },
          { name: "MongoDB" },
          { name: "CouchDB" },
          { name: "MS SQL" }
        ]
      },
      {
        name: "VERSION CONTROL",
        technologies: [
          { name: "GIT" },
          { name: "grunt" },
          { name: "Xdebug" },
          { name: "Subversion" }
        ]
      },
      {
        name: "PROJECT MGMT TOOLS",
        technologies: [
          { name: "Basecamp" },
          { name: "Jira" },
          { name: "Trello" },
          { name: "Redmin" },
          { name: "Teamwork" }
        ]
      }
    ]
  };
  const [information, setInformation] = useState(initialState);

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
      <h3 className="tagline">
        Acquire skills in several dimensions and become a complete programmer{" "}
      </h3>
      <div className="container">
        {information.categories.map(category => (
          <div className="category">
            <div className="category-name">{category.name}</div>
            <div className="tech-container" >
              {category.technologies.map(technology => (
                <div className="technology">{technology.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayInformation;
