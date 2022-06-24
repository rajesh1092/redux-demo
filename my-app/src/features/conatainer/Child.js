import React from "react";
import { connect } from "react-redux";
let squr = 0;
const Child = (props)=> {
  const getSqur =(e)=>{
    squr = e.target.value;
    squr *= squr;
    return squr;
  };
  const setSqur = () =>{
    props.dispatch({ type: "SQUARE_VALUE", payload: squr });
  }

    return (
      <div className="child-component">
       <div>
        child input value:<input type="text" onChange={getSqur} />
       </div>
        <div>child component - [Factorial of parent input value: {props.factorial}]</div>
        <button onClick={setSqur} >Set parent value</button>
      </div>
    );
}


const mapStateToProps = (state) => ({
  factorial: state.factorial,
});

export default connect(mapStateToProps)(Child);