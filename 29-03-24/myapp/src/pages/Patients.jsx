import React from 'react'
import ProfileCard from '../components/ProfileCard'
import "./page.css"
import { DateContext } from '../dateContext'
import { useContext } from 'react'
const Patients = () => {
    const data=[
        {
            id:1,
            name:"Chengis Khan",
            age:32,
            address:"Mangolia",
            dob: "11/11/1991",
        },
        {
            id:2,
            name:"XYZ",
            age:31,
            address:"ABC",
            dob: "13/04/2002",
        }, 
        {
            id:3,
            name:"John Doe",
            age:32,
            address:"Baker street",
            dob: "10/05/1996",
        }
    ]
    const date = useContext(DateContext)

  return (
    <>
    <h1 className='text-4xl'>Patients</h1>
    <h2>{date}</h2>
    <div className="profile-grid">
        {data.map((patient)=>{
            return (<DateContext.Provider value={patient.dob}><ProfileCard key={patient.id} name={patient.name} age={patient.age} address={patient.address}/></DateContext.Provider>)
        })}
    </div>
    </>
  )
}

export default Patients