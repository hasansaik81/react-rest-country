import React from 'react'
import Countries from './components/country/Countries'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.css';


function App() {
  return (
    <div>
    <Header></Header>
       <Countries></Countries>
       <Footer></Footer>
    </div>
  )
}

export default App