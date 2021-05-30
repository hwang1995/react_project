import React from "react";
import { ColorContextProvider } from "./ColorContext";
import ComAClass from "./ComAClass";
import ComBFunctional from "./ComBFunctional";

const Exam01ColorContext = (props) => {
  return (
    <div className="card">
      <div className="card-header">Exam01ColorContext</div>
      <div className="card-body">
        <ColorContextProvider>
          <ComAClass />
          <ComBFunctional/>
        </ColorContextProvider>
        
      </div>
    </div>
  );
};

export default Exam01ColorContext;
