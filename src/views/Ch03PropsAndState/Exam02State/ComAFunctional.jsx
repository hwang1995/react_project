import React, { useState } from "react";

const ComAFunctional = (props) => {

    let num = 0;
  const [state, setState] = useState({
    number: 1,
    color: "black",
  });

  const addNumber = (event) => {
    setState({
      ...state,
      number: state.number + 1,
    });
    num = num + 1;
    
    // 원래의 값을 세팅하면 렌더링이 실행되지 않는다.
    // setState(state);
  };

  const changeColor = (event) => {
    setState({
      ...state,
      color: "#" + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16),
    });
  };


  const { number, color } = state;

  return (
    <div className="card">
      <div className="card-header">ComAFunctional {num}</div>
      <div className="card-body">
        <div className="alert alert-primary" style={{ color, fontSize: "3rem" }}>
          {number}
        </div>
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>
          숫자 증가
        </button>
        <button className="btn btn-info btn-sm" onClick={changeColor}>
          색깔 변경
        </button>
      </div>
    </div>
  );
};

export default ComAFunctional;
