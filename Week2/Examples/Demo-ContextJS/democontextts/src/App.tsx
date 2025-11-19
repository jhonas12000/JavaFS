import { createContext, useState } from 'react'
import './App.css'
import type { DataContextType } from './DataContextType'
import One from './One';
import Two from './Two';



  //create the context with an initial undefined value
const DataContext = createContext<DataContextType | undefined>(undefined);

function App() {
  const [data,setData] = useState<string>("");

   
  return (
    <DataContext.Provider value={{data, setData}}>
      <One/>
      <hr></hr>
      <Two/>
    </DataContext.Provider>
  )
}

export default App
export {DataContext};
