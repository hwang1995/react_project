import React from "react";
import ComAClass from "./ComAClass";
import ComAFunctional from "./ComAFunctional";
import ComBClass from "./ComBClass";
import ComBFunctional from "./ComBFunctional";
import ComCFunctional from "./ComCFunctional";
import ComCFunctionalWithImmer from "./ComCFunctionalWithImmer";

const Exam02State = (props) => {
  return (
    <div className="card">œ
      <div className="card-header">Exam02State</div>
      <div className="card-body">
          <ComAClass {...props} />
          <ComAFunctional {...props}/>
          <ComBClass {...props}/>
          <ComBFunctional {...props}/>
          <ComCFunctional {...props}/>
          <ComCFunctionalWithImmer {...props}/>
      </div>
    </div>
  );
};

export default Exam02State;
