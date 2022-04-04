import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ExchangeApp from './comps/exchangeApp';
import Page404 from './comps/page404';
import { AppContext } from './context/context';

export default function AppRoutes(props) {
  return (
    <BrowserRouter >
    <AppContext.Provider value={{}}>
      <Routes>
          <Route index element={<ExchangeApp />} />
          <Route path="/*" element={<Page404 />} />
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  )
}
