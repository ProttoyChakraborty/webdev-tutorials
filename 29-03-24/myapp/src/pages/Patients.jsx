import React from 'react'
import ProfileCard from '../components/ProfileCard'
import "./page.css"
const Patients = () => {
    const data=[
        {
            id:1,
            name:"Chengis Khan",
            age:32,
            address:"Mangolia",
        },
        {
            id:2,
            name:"XYZ",
            age:31,
            address:"ABC"
        }, 
        {
            id:3,
            name:"John Doe",
            age:32,
            address:"Baker street"
        }
    ]
  return (
    <>
    <h1 className='text-4xl'>Patients</h1>
    <div class="profile-grid">
        {data.map((patient)=>{
            return <ProfileCard key={patient.id} name={patient.name} age={patient.age} address={patient.address}/>
        })}
    </div>
    </>
  )
}

export default Patients