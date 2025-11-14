//This component will display user data

import { useEffect, useState } from "react"
import type { UserInterface } from "../../Interfaces/UserInterface"

//It takes props of UserInterface tupe, so it only accepts UserInterface objects from a parent

export const UserInfoComponent:React.FC<UserInterface> = (user:UserInterface) =>{

    /*
    Destructuring accomplished with {}

    Destructuring lets us break up a props object into individual variables
    The name in the curly braces must match the name of the prop attribute you're extracting
    */
    const {userName} = user
    const {firstName} = user
    const {lastName} = user
    const {email} = user

    //So now, we don't have to dig into the user object. We have variables

    //Let's practice useState and useEffect

    //State object that stores the user profile bio
    const [bio, setBio] = useState<string>("")

    //useEffect to assign a value to the useState bio object

    useEffect(()=>{
        //Hypothetical GET request, or maybe the bio is already stored in user ingo
        setBio("Thanks to useEffect, this info was set on component render")
    })
    return(
        <div>
            <div>
                <h4>{userName}</h4>
            </div>
            <div>
                <h5>{firstName} {lastName}</h5>
            </div>

        </div>
    )
}