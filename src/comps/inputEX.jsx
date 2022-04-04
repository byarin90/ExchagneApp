import React from 'react'
import {} from 'react-icons'
export default function InputEX() {
  return (
    <div className='col-md-5 d-flex justify-content-center  p-5 inputEX'>
      <div className="input">
        <div className='d-flex align-items-center'>
          <input type="text" className='form-control-lg my-2' />
          <select className='form-select  mx-2 py-1'>
            <option value="3.3">USD</option>
          </select>
        </div>
        <h4 className='text-center my-5'>USD</h4>
        <div>
        </div>
        <h4 className='text-center my-5'>USD</h4>
        <div className='d-flex align-items-center'>
          <input type="text" className='form-control-lg my-2' />
          <select className='form-select  mx-2 py-1'>
            <option value="3.3">USD</option>
          </select>
        </div>
      </div>
    </div>
  )
}
