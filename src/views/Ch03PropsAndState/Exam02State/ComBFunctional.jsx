import React, { useState } from "react";

const ComBFunctional = (props) => {
    const [number, setNumber] = useState(1)



    const addNumber = (event) => {
        setNumber(number + 1);
        setNumber(number + 1);
        // setNumber({
        //     number: number + 1
        // }, () => {
        //     console.log('CB Value', this.state.number);
        // });

        // return console.log(this.state);
    }

    const addNumber1 = (event) => {
        setNumber(prevState => prevState * 2);
        setNumber(prevState => prevState * 2);
    }

  return (
    <div className="card">
      <div className="card-header">ComBFunctional</div>
      <div className="card-body">
        <div className="alert alert-primary" >
          {number}
        </div>
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>
          숫자 증가
        </button>
        <button className="btn btn-info btn-sm mr-2" onClick={addNumber1}>
          숫자 증가2
        </button>
      </div>
    </div>
  );
};

export default ComBFunctional;
