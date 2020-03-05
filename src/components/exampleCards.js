import React, {useState} from 'react';

function ExampleCards(props){

    const [checkered, setCheckered] = useState("yes")
    const onClicker = (e) =>{
        setCheckered(e.target.value);
    }
    return(
    <div>
    <form className={props.done === true ? 'done' : null} done={props.done} id={props.id} onClick={props.removeHandler}>
    <h1 id={props.id}>{props.title}</h1>
    <label>
    <input
    type="radio"
    name={props.name}
    id={`yes ${props.group + props.id}`}
    value="yes"
    onMouseDown={onClicker}
    checked={(checkered === "yes")}/>
    yes</label>
    <label>
    <input
    type="radio"
    name={props.name}
    id={`no ${props.group + props.id}`}
    value="no"
    onMouseDown={onClicker}
    checked={(checkered === "no")}/>
    no</label>
    <label>
    <input
    type="radio"
    name={props.name}
    id={`sometimes ${props.group + props.id}`}
    value="sometimes"
    onMouseDown={onClicker}
    checked={(checkered === "sometimes")}/>
    sometimes</label>
    </form>
    </div>
    )}

    export default ExampleCards;