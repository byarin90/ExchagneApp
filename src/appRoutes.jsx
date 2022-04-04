import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ExchangeApp from './comps/exchangeApp';
import Page404 from './comps/page404';
import { AppContext } from './context/context';

export default function AppRoutes(props) {
  const [options,setOptions] = useState([])
  const [val1,setVal1] = useState({})
  const [val2,setVal2] = useState({})
  const [input,setInput] =useState(1)
  useEffect(()=>{
    doApi()

  },[])

  const doApi = async() =>{
    const {data} = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=NbbpumvdAKSl0lPezOrOAic8hxsWw31dhU1seHdi`);
    let temp_ar = [];
    for (const key in data.data) {
      temp_ar.push({
        label:key,
        value:data.data[key]
      })
    }

    setOptions(temp_ar)
    
  let usd = temp_ar[149]
  let ils = temp_ar[64]

    setVal1(usd)
    setVal2(ils)

  }
  return (
    <BrowserRouter >
    <AppContext.Provider value={{
      options,
      val1,setVal1,
      val2,setVal2,
      input,setInput    }}>
      <Routes>
        
          <Route index element={<ExchangeApp />} />
          <Route path="/*" element={<Page404 />} />
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  )
}
