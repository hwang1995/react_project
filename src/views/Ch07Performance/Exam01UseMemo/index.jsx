import React  from 'react';
import BoardList from './BoardList';

const Exam01UseMemo = (props) => {
    return (
        <div className="card" >
            <div className="card-header">
            Exam01UseMemo
            </div>
            <div className="card-body">
                <BoardList/>
            </div>
        </div>
    )
}

export default Exam01UseMemo;