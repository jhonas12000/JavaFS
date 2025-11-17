import { useEffect, useState } from "react"
import { Employee } from "./Employee"

//This will take in data from employeeData.ts (sent as props in App.tsx)
export const EmployeeContainer:React.FC<any> = (incomingData:any)=> {

    //state variables to store an array of the employee data
    const[employees, setEmployees] = useState<any[]>([])

    //useEffect that populates our employees arrau when the component renders
    //(imagine we get a GET request in this useEffect instead)
    useEffect(()=>{
        //set the employees state object with the employee data
        setEmployees(incomingData.incomingData)

        //We had to do incomingData.incomingData to access the ARRAY inside the prop object
        //setEmployees(propsObject.arrayInThePropsObject)

        console.log(employees) //to see empoyees in console
    },[employees]) //[employees]? this will run and rerender every time employee state changes (PLUS the inital render)
    //previously, with [], the useEffect runs, THEN changes state. So we don't actually get our employee data in time.
return(
    <div>
        <h3>Employee Container</h3>
        {/* using map() to render an Employee Component for every employee in the array */}
        <div>
            {employees.map((employee:any)=>{
                return <Employee {...employee} key={employee.id}></Employee>
            })}
        </div>
    </div>
)
}