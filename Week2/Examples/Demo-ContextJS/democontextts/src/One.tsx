import { useContext, type ChangeEvent } from "react";
import { DataContext } from "./App";

function One() {

    const context = useContext(DataContext)

    if(!context) {
        throw new Error ("One must be used within a DataContext.Provider")
    }

    const {data, setData} = context

    //or I could just write shorthand: const {data, setData} = useContext(DataContext)! if you know it will never be null or undefined

    return (
        <div>
            <p>This is the One component, and will set this data to the context: </p>
            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>)=>{setData(e.target.value)}}/>
        </div>
    )
}

export default One;