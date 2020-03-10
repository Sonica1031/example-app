import React, {useReducer, useState, dispatch} from 'react';
import './App.css';
import ExampleCards from './components/exampleCards';
import {initialValue, reducerFunc} from './Reducer/reducer';
import NewFile from './components/NewFile';

function App() {
const [state, dispatch] = useReducer(reducerFunc, initialValue)
const [value, setValue] = useState()

const clickHandler = (e) =>{
  e.preventDefault();
 dispatch({type: "ADD_NEWSURVEY", payload: value})
}

const removeHandler = (e) =>{
  e.preventDefault();
  dispatch({type: "REMOVE_SURVEY", payload: e.target.id})
}

const valueHandler = (e) =>{
  setValue(e.target.value);
}
const removeDone = (e) =>{
  e.preventDefault();
  dispatch({type: "REMOVE_DONE"})
}

  return (
    <div className="App">
      <input type="text" onChange={valueHandler} placeholder="enter value"/>
      <div>
      <button onClick={clickHandler}>Add</button>
      <button onClick={removeDone}>Remove</button>
      <NewFile />
      {state.question.map(item =>{
        return(
          <div>
        <ExampleCards done={item.done} id={item.id} title={item.title} group={item.group} name={item.name} removeHandler={removeHandler}/>
        </div>
        )})}
        </div>
    </div>
  );
}

export default App;
