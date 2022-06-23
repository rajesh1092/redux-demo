import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Child = () => {
  const dispatch = useDispatch();
  
  const {factorial} = useSelector((state) => state.reducer);
  let squr = 0;
  const getSqur = (e) => {
    squr = e.target.value;
    return squr;
  };

  return (
    <div className="child-component">
      <div>
        child input value:
        <input type="text" onChange={getSqur} />
      </div>
      <div>
        child component - [Factorial of parent input value: {factorial}]
      </div>
      <button
        onClick={() => {
          dispatch(actionCreators.square(squr));
        }}
      >
        Set parent value
      </button>
    </div>
  );
};

export default Child;
