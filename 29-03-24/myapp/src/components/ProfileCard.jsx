import React from 'react'
import image from "../assets/patient.jpg"
import "./components.css"
const ProfileCard = (props) => {
  return (
    <>  
        <div className="card">
        <img className="profile-pic" src={image}/>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <h3>{props.address}</h3>
        </div>
    </>
  )
}

export default ProfileCard