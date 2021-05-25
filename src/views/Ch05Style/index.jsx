import React from "react";
import { Route, Switch } from "react-router-dom";
import Exam01Css from "./Exam01Css";
import Exam02Sass from "./Exam02Sass";
import Exam03StyledComponents from "./Exam03StyledComponents";
const Ch05Style = (props) => {
  return (
    <div className="card">
      <div className="card-header">Ch05Style</div>
      <div className="card-body">
        <Switch>
          <Route
            path={`${props.match.url}/exam01`}
            exact
            render={(props) => <Exam01Css {...props} />}
          />
          <Route
            path={`${props.match.url}/exam02`}
            exact
            render={(props) => <Exam02Sass {...props} />}
          />
                    <Route
            path={`${props.match.url}/exam03`}
            exact
            render={(props) => <Exam03StyledComponents {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Ch05Style;
