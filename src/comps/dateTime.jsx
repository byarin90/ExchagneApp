import React, { useEffect, useState } from 'react'

export default function DateTime() {
  const [time, setTime] = useState([]);
  useEffect(() => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()])
  }, [])

  setInterval(() => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()])
  }, 1000); 

  
  return (
    <div className='text-white my-4'>
        <h2 className='display-6'>{time[0]}</h2>
        <h2 className='display-6'>{time[1]}</h2>
    </div>
  )
}
