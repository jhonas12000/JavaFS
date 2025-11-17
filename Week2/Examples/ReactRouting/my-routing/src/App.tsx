import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EmployeeContainer } from './Components/EmployeeComponent/EmployeeContainer'
import { data } from './employeeData'

function App() {


  return (
    <div>
<EmployeeContainer incomingData={data}/>
</div>
  )
}

export default App
