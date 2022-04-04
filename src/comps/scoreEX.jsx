import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import DateTime from './dateTime'

export default function ScoreEX() {
  const {val1,val2,input} = useContext(AppContext)
  return (
    <div  className='col-md-7 d-flex flex-column align-items-center  p-5 scoreEX'>
      <h1 className='text-white display-5'> {input.toLocaleString()} {val1.label} = {(input/val1.value*val2.value).toLocaleString()} {val2.label} </h1>
      <DateTime/>
    </div>
  )
}
