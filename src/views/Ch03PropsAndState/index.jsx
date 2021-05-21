import {Route, Switch} from 'react-router-dom';
import Exam01Props from './Exam01Props/';

const Ch03PropsAndState = (props) => {
  return (
    <div className="card">
      <div className="card-header">Ch03PropsAndState</div>
      <div className="card-body">
          <Switch>
              <Route path={`${props.match.url}/exam01`}  exact render={(props) => <Exam01Props {...props} />}/>
          </Switch>
      </div>
    </div>
  );
};

export default Ch03PropsAndState;
