import { useState } from "react"
import { ChildComponent } from "../ChildComponent/ChildComponent"


//This is a ParentComponent - It will have another component nested in its return()

export const ParentComponent:React.FC = ()=> {
    /* State is an object that stores data related to a Component

    Why not just use a regular variables?
    The advantage of using State is twofold:
        -We can easily pass state data to a ChildComponent's props
        -When a component's state changes, it re-renders the component

    To use State in a component, we declare:
        1) A variable that lets us ACCESS the state value
        2) A Mutator (like a setter in Java) lets us change (AKA set) the state value
        3) The useState hook, which lets us set up state and define and initial value
    */

    let [favAnimal, setAnimal] = useState("Capybara")
    let [favColor, setColor] = useState("Blue")
   return(
    <div>
        <h2> Hello from ParentComponent! My favorite animal is {favAnimal}</h2>
        <ChildComponent color={favColor} animal={favAnimal}>
            {/* We rendered the ChildComponent, directly applying state to its props */}
        </ChildComponent>
    </div>
   )
}