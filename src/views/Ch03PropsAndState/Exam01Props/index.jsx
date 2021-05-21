import React from 'react';
import ClassTypeProps from './ClassTypeProps';
import FunctionalTypeProps from './FunctionalTypeProps';

const Exam01Props = (props) => {
    return (
        <div className="card">
        <div className="card-header">Exam01Props</div>
        <div className="card-body">
            <ClassTypeProps name="react" {...props} />
            <FunctionalTypeProps  {...props} />
        </div>
      </div>
    )
}

export default Exam01Props;