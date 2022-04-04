import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import About from './comps/about';
import HeaderClient from './comps/headerClient';
import Home from './comps/home';
import Page404 from './comps/page404';

export default function AppRoutes(props) {
  return (
    <BrowserRouter>
      <HeaderClient/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
