import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export default function ScoreEX() {
  const {val1,val2,input} = useContext(AppContext)
  return (
    <div  className='col-md-7 d-flex justify-content-center p-5 scoreEX'>
      <h1 className='text-white'> {input.toLocaleString()} {val1.label} = {(input/val1.value*val2.value).toLocaleString()} {val2.label} </h1>
      
    </div>
  )
}
