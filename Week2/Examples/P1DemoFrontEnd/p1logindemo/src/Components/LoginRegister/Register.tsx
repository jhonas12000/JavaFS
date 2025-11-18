import axios from "axios"
import {Button, Container, Form} from "react-bootstrap" 

export const Register:React.FC = () => {
    //TODO: gather user input like with our hypotenuse calculator

    //Hardcoding a new user registration with acios
    //axios is a way to send HTTP requests from React

    const register = async () => {
        //POST request with hardcoded user info

        const response = await axios.post("http://localhost:8080/auth/register",
            {
                username:"reactUser10",
                passoword:"password"

            }
            .then(()=>{
                alert("user created")
                //TODO: actually use the returned data
            })
        )
    }
    return (
            <Container>
                <div></div>

            </Container>

    )
}
