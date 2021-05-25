import React, { useReducer } from "react";
import reducer from './numberReducer';


const ComAFunctional = (props) => {
  /**
   * state : 초기 상태
   * dispatch: 상태 변경 통보 함수
   */
  const [state, dispatch] = useReducer(reducer, { number: 0 });

  const incrementCounter = (event) => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementCounter = (event) => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="card">
      <div className="card-header">Component: ComAFun</div>
      <div className="card-body">
        <p>현재 카운트 값: {state.number}</p>
        <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>
          증가
        </button>
        <button className="btn btn-primary btn-sm" onClick={decrementCounter}>
          감소
        </button>
      </div>
    </div>
  );
};
export default ComAFunctional;
