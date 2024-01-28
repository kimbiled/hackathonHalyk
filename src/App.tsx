import { useState } from 'react'
import './index.css'
import FAQ from '../src/components/Faq/faq';
import Header from '../src/components/Header/header';
import Home from '../src/components/Home/home';
import Aside from '../src/components/Aside/aside';


function App() {
  return (
    <>
      <Header />
      <Home />
      <FAQ/>
      <Aside/>
    </>
  )
}

export default App;