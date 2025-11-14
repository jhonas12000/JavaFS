/* 
STOP!! Don't compare React Interfaces to Java Interfaces

In Typescript and React, Interfaces behave more like Java Model Classes - they model data.
We'll be modeling some User data based off the fields in this Interface

Our UserComponent will send data of UserInterface to the UserInfoComponent
*/

export interface UserInterface{

    firstName: string,
    lastName: string,
    userName: string,
    email?:string
}

/* "?" just means the variable is optional. So it doesn't require a value at any point
I typically make every variables optional unless I know it'll always be required*/