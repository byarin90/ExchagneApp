import React, { useContext, useEffect } from 'react'
import {BsArrowCounterclockwise} from 'react-icons/bs'
import Select from 'react-select'
import { AppContext } from '../context/context'
export default function InputEX() {

  const {options,val1,setVal1,val2,setVal2} = useContext(AppContext);

  useEffect(()=>{

  })

  return (
    <div className='col-md-5 d-flex justify-content-center  p-5 inputEX'>
      <div className="input">
        <div className='d-flex align-items-center'>
          <input defaultValue={1} type="number" className='form-control-lg my-2' />
          <Select onChange={item=> setVal1(item)} value={val1} options={options} className=' mx-2 '></Select>

          <Select onChange={item=> setVal2(item)} value={val2} options={options} className=' mx-2 '></Select>
        </div>
        <h3 className='text-center display-6 mt-3 text-warning'>USD</h3>
        <div className='d-flex justify-content-center' >
          <BsArrowCounterclockwise className='my-3' style={{fontSize:'40px',color:'white',cursor:'pointer'}}/>
        </div>
        <h3 className='text-center display-6 mb-3 text-warning'>USD</h3>
  
      </div>
    </div>
  )
}
