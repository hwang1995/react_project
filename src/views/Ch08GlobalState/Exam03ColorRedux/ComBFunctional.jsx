import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSetColorAction } from 'redux/color-reducer';
const ComBFunctional = () => {
    const color = useSelector((state) => state.colorReducer.color);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(createSetColorAction('aliceblue'));
    }
    return (
        <div className="card">
        <div className="card-header">ComBFunctional</div>
        <div className="card-body">
        <button className="btn btn-primary mb-2" onClick={handleChange}>
                색상 변경
            </button>
            <div style={{backgroundColor: color, padding: '1rem'}}>
                내용이야!!!!!!!!!!!
                {color}
            </div>
        </div>
      </div>
    )
}

export default ComBFunctional;