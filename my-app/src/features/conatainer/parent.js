import React from "react";
import { connect } from "react-redux";
import Child from "./Child";



const Parent = (props) => {
  let fact = 0;
  const getFact =(e)=>{
    const factorialize = (num) => {
      if (num < 0) return -1;
      else if (num === 0) return 1;
      else {
        return num * factorialize(num - 1);
      } 
    }
     fact = factorialize(e.target.value);  
  };

  const setFactorial= () =>{
    props.dispatch({ type: "FACTORIAL_VALUE", payload: fact})
  } 

    return (
      <div className="parent-component">
        <label>Parent Input: </label>
        <input type="text" onChange ={getFact} />
        <div>parent component - [Square of child input value: {props.square}]</div>
        <button onClick={setFactorial} >Set child value</button>
        <Child />
      </div>
    );  
}

const mapStateToProps = (state) => ({
  square: state.square,
});

export default connect(mapStateToProps)(Parent);