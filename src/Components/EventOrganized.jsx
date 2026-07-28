import React from 'react'
import { Paper } from '@mui/material'

const EventOrganized = () => {
  const events = [
    {title:"We had Successfully organized a drone workshop for ASME SRIT Student section."},

    {title:"We had Successfully organized 3d printing at Dhanalakshmi Srinivasan college of engineering."},

    {title:"Organized an intra college Project Expo at Sri Ramakrishna Institute of Technology under ISPRC cluster to bring up the innovative ideas among the Intra College students"},
  ]
  return (
    <>
    <div className='flex justify-center mt-4'>
      <h1 className="font-semibold text-2xl underline">Event Organized</h1>
    </div>
    <div className='flex'>
      <div>
         <img src="https://img.magnific.com/free-vector/colleagues-preparing-corporate-party-time-management-deadline-brand-event-event-brand-management-sponsored-event-organization-concept_335657-120.jpg?semt=ais_hybrid&w=740&q=80" style={{width:800,padding:10,marginTop:45,marginLeft:20}}/>

      </div>
      <div>
        <ul>
          {
            events.map((event,index)=>{
              return <li key={index}><Paper elevation={4} sx={{p:2,m:3,mt:7,mr:20,bgcolor:"#5ba1c9",border:2,borderColor:"white",fontSize:15}} >{event.title}</Paper></li>
            })
          }
        </ul>
      </div>
    </div>
    </>
  )
}

export default EventOrganized;