import React from 'react';
import ComAFunctional from './ComAFunctional';
import ComBFunctional from './ComBFunctional';

const Exam03UseReducer = (props) => {
    return (
        <div className="card" >
            <div className="card-header">
            Exam03UseReducer
            </div>
            <div className="card-body">
                <ComAFunctional {...props}/>
                <ComBFunctional {...props}/>
            </div>
        </div>
    )
}

export default Exam03UseReducer;