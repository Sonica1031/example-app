import React from 'react';

function ExampleCards(props){
    return(
    <div>
    <form className={props.done === true ? 'done' : null} done={props.done} id={props.id} onClick={props.removeHandler}>
    <h1 id={props.id}>{props.title}</h1>
    <input type="radio" name={props.name} id={`yes ${props.group + props.id}`} value="yes"/>
    <label for={`yes ${props.group + props.id}`}>yes</label>
    <input type="radio" name={props.name} id={`no ${props.group + props.id}`} value="no"/>
    <label for={`no ${props.group + props.id}`}>no</label>
    <input type="radio" name={props.name} id={`sometimes ${props.group + props.id}`} value="sometimes"/>
    <label for={`sometimes ${props.group + props.id}`}>sometimes</label>
    </form>
    </div>
    )}

    export default ExampleCards;