import React from "react";
import Child from "./Child";
import {useSelector} from "react-redux"; 
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index'

const Parent = () => {

  const dispatch = useDispatch();
  const {square} = useSelector(state => state.reducer);
  let fact = 0;
  const getFact =(e)=>{
    fact = e.target.value; 
  }

    return (
      <div className="parent-component">
        <label>Parent Input: </label>
        <input type="text" onChange ={getFact} />
        <div>parent component - [Square of child input value: {square}]</div>
        <button onClick={() => dispatch(actionCreators.factorial(fact))} >Set child value</button>
        <Child />
      </div>
    );  
}


export default Parent;