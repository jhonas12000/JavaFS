import {useContext} from "react"
import { DataContext } from "./App"

function Two() {

    const context = useContext(DataContext);

    if(!context) {
        throw new Error ("One must be used within a DataContext.Provider")
    }

    const {data} = context;

    return(
        <>
        <p>Data:</p>
        <p>{data}</p>
        </>
    )
}

export default Two;