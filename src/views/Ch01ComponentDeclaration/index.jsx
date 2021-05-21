import React, { Fragment } from "react";
import {Route, Switch} from 'react-router-dom';
import ConA from "./ConA";
import ConB from "./ConB";

const Ch01ComponentDeclaration = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">Ch01ComponentDeclaration</div>
        <div className="card-body">
          <Switch>
          <Route path={`${props.match.url}/coma`} exact component={ConA}/>
          <Route path={`${props.match.url}/comb`} component={ConB}/>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default Ch01ComponentDeclaration;
