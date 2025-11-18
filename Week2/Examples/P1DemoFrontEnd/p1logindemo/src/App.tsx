import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { GameTable } from './Components/Games/GameTable'
import 'bootstrap/dist/css/bootstrap.css'
//^THIS IS A REQUIRED MANUAL IMPORT FOR BOOTSTRAP TO WORK!!!!

function App() {


  return (
    <>
      <BrowserRouter><Routes>
        <Route path="games" element={<GameTable/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
