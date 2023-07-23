import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'
import Nav from './pages/components/NavBar'
import './App.css'
import StockProvider from './pages/components/ContextData'
import MyStock from './pages/myStock'

function App() {
  

  return (
    <div>
          <Nav/>
          <StockProvider>
           <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/about"  element={<About/>}/>
                <Route path="/stock"  element={<Dashboard/>}/>
                <Route path="/stock/:symbol"  element={<Stock/>}/>
                <Route path="/myStock"  element={<MyStock/>}/>
          </Routes>
          </StockProvider>
    </div>
    
  )
}

export default App
