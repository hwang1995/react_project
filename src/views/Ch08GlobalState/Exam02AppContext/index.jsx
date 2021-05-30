import React from 'react';
import LoginFormClass from './LoginFormClass';
import LoginFormFunctional from './LoginFormFunctional';

const Exam02AppContext = (props) => {
    

    return (
        <div className="card" >
            <div className="card-header">
            Exam02AppContext
            </div>
            <div className="card-body">
                <LoginFormClass/>
                <LoginFormFunctional/>
            </div>
        </div>
    )
}

export default Exam02AppContext;