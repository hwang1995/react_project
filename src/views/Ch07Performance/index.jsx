import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import Exam01UseMemo from './Exam01UseMemo';
import Exam02UseCallback from './Exam02UseCallback';
import Exam03SetterFunArg from './Exam03SetterFunArg';
import Exam04ReactMemo from './Exam04ReactMemo';
// import Exam05ListWithScroll from './Exam05ListWithScroll';

const Exam05ListWithScroll = loadable(() => import('./Exam05ListWithScroll'));


const Ch07Performance = (props) => {
    return (
        <div className="card" >
            <div className="card-header">
            Ch07Performance
            </div>
            <div className="card-body">
                <Switch>
                    <Route path={`${props.match.url}/exam01`} exact render={(props) => <Exam01UseMemo {...props} />}/>
                    <Route path={`${props.match.url}/exam02`} exact render={(props) => <Exam02UseCallback {...props} />}/>
                    <Route path={`${props.match.url}/exam03`} exact render={(props) => <Exam03SetterFunArg {...props} />}/>
                    <Route path={`${props.match.url}/exam04`} exact render={(props) => <Exam04ReactMemo {...props} />}/>
                    <Route path={`${props.match.url}/exam05`} exact render={(props) => <Exam05ListWithScroll {...props} />}/>
                </Switch>
            </div>
        </div>
    )
}

export default Ch07Performance;