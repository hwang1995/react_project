import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Exam01ColorContext from './Exam01ColorContext';
import Exam02AppContext from './Exam02AppContext';
import Exam03ColorRedux from './Exam03ColorRedux';
import Exam04AuthRedux from './Exam04AuthRedux';

const Ch08GlobalState = (props) => {
    return (
        <div className="card" >
            <div className="card-header">
            Ch08GlobalState
            </div>
            <div className="card-body">
                <Switch>
                    <Route path={`${props.match.url}/exam01`} exact render={(props) => <Exam01ColorContext {...props} /> } />
                    <Route path={`${props.match.url}/exam02`} exact render={(props) => <Exam02AppContext {...props}/> } />
                    <Route path={`${props.match.url}/exam03`} exact render={(props) => <Exam03ColorRedux {...props}/> } />
                    <Route path={`${props.match.url}/exam04`} exact render={(props) => <Exam04AuthRedux {...props}/> } />
                </Switch>
            </div>
        </div>
    )
}

export default Ch08GlobalState;