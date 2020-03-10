import React, { useState , useReducer} from 'react';
import {reducerFunc, initialValue} from '../Reducer/reducer';

const NewFile = () =>{
    const [value, setValue] = useState()
    const [state, dispatch] = useReducer(reducerFunc, initialValue)
    const changeHandler = (e) =>{
        setValue(e.target.value)
    }
    const clickHandler = () =>{
        dispatch({type: "ADD_PAGE", payload: value})
      }
      return (
    <div>
        <input type="text" placeholder="Enter New Page" onChange={changeHandler}/>
        <button onClick={clickHandler}>Add</button>
        {state.nav.map(aTag => {
          return aTag
        })}
    </div>
      )

}
export default NewFile;