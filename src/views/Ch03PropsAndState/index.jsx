import {Route, Switch} from 'react-router-dom';
import Exam01Props from './Exam01Props/';
import Exam02State from './Exam02State';
import Exam03UseReducer from './Exam03UseReducer';
import Exam04StateInitFun from './Exam04StateInitFun';
import Exam05StateToProp from './Exam05StateToProp';

const Ch03PropsAndState = (props) => {
  return (
    <div className="card">
      <div className="card-header">Ch03PropsAndState</div>
      <div className="card-body">
          <Switch>
              <Route path={`${props.match.url}/exam01`}  exact render={(props) => <Exam01Props {...props} />}/>
              <Route path={`${props.match.url}/exam02`}  exact render={(props) => <Exam02State {...props} />}/>
              <Route path={`${props.match.url}/exam03`}  exact render={(props) => <Exam03UseReducer {...props} />}/>
              <Route path={`${props.match.url}/exam04`}  exact render={(props) => <Exam04StateInitFun {...props} />}/>
              <Route path={`${props.match.url}/exam05`}  exact render={(props) => <Exam05StateToProp {...props} />}/>
          </Switch>
      </div>
    </div>
  );
};

export default Ch03PropsAndState;
