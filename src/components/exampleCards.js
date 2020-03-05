import React, {useState} from 'react';

function ExampleCards(props){

    const [checkered, setCheckered] = useState(false)
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
    onClick={onClicker}
    checked={checkered === "yes"}/>
    yes</label>
    <label>
    <input
    type="radio"
    name={props.name}
    id={`no ${props.group + props.id}`}
    value="no"
    onClick={onClicker}
    checked={checkered === "no"}/>
    no</label>
    <label>
    <input
    type="radio"
    name={props.name}
    id={`sometimes ${props.group + props.id}`}
    value="sometimes"
    onClick={onClicker}
    checked={checkered === "sometimes"}/>
    sometimes</label>
    </form>
    </div>
    )}

    export default ExampleCards;