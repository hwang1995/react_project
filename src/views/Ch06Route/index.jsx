import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardRead from './BoardRead';
import BoardTable from './BoardTable';
import BoardUpdateForm from './BoardUpdateForm';
import BoardWriteForm from './BoardWriteForm';

const Ch06Route = (props) => {

    return (
        <div className="card" >
            <div className="card-header">
            Ch06Route
            </div>
            <div className="card-body">
                <Switch>
                    <Route path={`${props.match.url}`} exact render={(props) => <BoardTable {...props} />}/>
                    <Route path={`${props.match.url}/:bno/read`} exact render={(props) => <BoardRead {...props} />}/>
                    <Route path={`${props.match.url}/:bno/updateForm`} exact render={(props) => <BoardUpdateForm {...props} />}/>
                    <Route path={`${props.match.url}/writeForm`} exact render={(props) => <BoardWriteForm {...props} />}/>
                </Switch>
            </div>
        </div>
    )
}

export default Ch06Route;