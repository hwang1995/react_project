import React, { useState, useEffect } from "react";

const FunctionalType = (props) => {
  
  const [state, setState] = useState({
    number: 0,
    startNum: 0,
  });
  console.log(`리렌더링 ${state.number}`)
  const handleIncrement = (event) => {
    setState({
      ...state,
      number: state.number + 1,
    });
  };

  useEffect(() => {
       // 여기에 마운트, 업데이트 후 실행
    if (state.startNum !== props.startNum) {
        setState(state => ({number: props.startNum, startNum: props.startNum}));
    }

    return (() => {
        console.log("마운트, 업데이트 전 실행")
    })
   
  }, [ props ]);

  useEffect(() => {
      console.log("state값이 변경되고 있어요")
  }, [state]);
  return (
    <div className="card mt-2">
      <div className="card-header">Exam02UseEffect - FunctionalType</div>
      <div className="card-body">
        <div>number : {state.number}</div>
        <button className="btn btn-info btn-sm mt-2" onClick={handleIncrement}>
          증가
        </button>
      </div>
    </div>
  );
};

export default FunctionalType;
