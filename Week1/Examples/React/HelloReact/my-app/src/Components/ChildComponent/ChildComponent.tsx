/*
In this component, props is of <any> type. What is props?

Props is the data sent in from a parent component (the PROPerties the child takes)
ParentComponent will render ChildComponent in its TSX, and pass its state to the child
*/

export const ChildComponent:React.FC<any> = ({color, animal})=>{
    return(
        <div>
            <h4>Hello from ChildComponent</h4>
            <h4 style={{color}}>My Parents fav color is: {color}</h4>
            {/* <p>{2+2}</p> */}
            <h5>My Parent's fav animal: {animal}</h5>

        </div>
    )
}