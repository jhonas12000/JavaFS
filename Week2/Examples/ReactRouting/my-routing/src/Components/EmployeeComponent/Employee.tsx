//The EmployeeContainer will render one Employee component for every object found in the incomingData Array

export const Employee:React.FC<any> = (employee:any) => {
    //This will render a view of the incoming employee's data
    return(
        <div>
            <div>
                <h3>{employee.id} {employee.name}</h3>
            </div>
            <div>
                <h3>"{employee.quote}"</h3>
            </div>
        </div>
    )
}