import React from 'react'
import image from "../assets/patient.jpg"
import {Button} from "@mui/joy"
import { useContext } from 'react'
import { DateContext } from '../dateContext'
const ProfileCard = (props) => {
  const date= useContext(DateContext)
  const handleClick=(e)=>{

  }
  return (
    <>  
        <div className="card w-1/4 border-4 border-blue-950 rounded-lg">
        <img className="profile-pic" src={image}/>
        <div className='p-4 flex-col align-start'>
        <h3 className='text-xl'>{props.name}</h3>
        <h3 className='text-xl'>{date}</h3>
        <h3>{props.age}</h3>
        <h3>{props.address}</h3>
        <Button variant="outlined" color="secondary">Click Me!</Button>
        </div>
        </div>
    </>
  )
}

export default ProfileCard