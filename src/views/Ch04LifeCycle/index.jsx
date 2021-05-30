import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Exam01WhenMount from './Exam01CallbackMethod';
import Exam02UseEfect from './Exam02UseEffect';

const Ch04LifeCycle = (props) => {


    return (
        <div className="card">
        <div className="card-header">Ch04LifeCycle</div>
        <div className="card-body">
            <Switch>
                {/* <Route path={`${props.match.url}/exam01`}  exact component={Exam01CallBackMethod}/> */}
                <Route path={`${props.match.url}/exam01`}  exact render={(props) => <Exam01WhenMount {...props} />}/>
                <Route path={`${props.match.url}/exam02`}  exact render={(props) => <Exam02UseEfect {...props} />}/>
            </Switch>
    
        </div>
      </div>
    )
}

export default Ch04LifeCycle;