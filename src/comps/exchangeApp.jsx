import React from 'react'
import InputEX from './inputEX'
import ScoreEX from './scoreEX'
import './exchangeApp.css'
export default function ExchangeApp(props) {
  return (
    <div style={{padding:'0',margin:'auto'}}>
      <div className="strip">
        <h1 className='display-1 text-white text-center text-shadow' style={{fontWeight:'bold'}}>Exchange Currency App</h1>
      </div>
      <main className='row'>
      <InputEX/>
      <ScoreEX/>
      </main>
    </div>
  )
}
