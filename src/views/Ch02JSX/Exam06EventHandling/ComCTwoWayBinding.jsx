import React, { useState } from "react";

const ComCTwoWayBinding = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
      setInput(event.target.value);
      console.log(input);
  }
  return (
    <div className="card p-2">
      <div className="card-header">ComCTwoWayBinding</div>
      <div className="card-body">
        <div>
          입력 1 : <input type="text" onChange={(e) => handleChange(e)} value={input}/>
        </div>
        <div>
          입력 2 : <input type="text" onChange={(e) => handleChange(e)} value={input} />
        </div>
      </div>
    </div>
  );
};

export default ComCTwoWayBinding;
