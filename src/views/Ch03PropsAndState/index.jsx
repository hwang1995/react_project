import {Route, Switch} from 'react-router-dom';
import Exam01Props from './Exam01Props/';
import Exam02State from './Exam02State';

const Ch03PropsAndState = (props) => {
  return (
    <div className="card">
      <div className="card-header">Ch03PropsAndState</div>
      <div className="card-body">
          <Switch>
              <Route path={`${props.match.url}/exam01`}  exact render={(props) => <Exam01Props {...props} />}/>
              <Route path={`${props.match.url}/exam02`}  exact render={(props) => <Exam02State {...props} />}/>
          </Switch>
      </div>
    </div>
  );
};

export default Ch03PropsAndState;
