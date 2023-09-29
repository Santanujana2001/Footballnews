import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cardcontainer from './components/Cardcontainer';

function App() {
   
  return (
    <>
    <div data-theme="dark">
      <Navbar/>
      <Cardcontainer/>
      <div data-theme="dracula">
      <Footer/>
      </div>
      </div>
    </>
  )
}

export default App