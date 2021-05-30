import React, {useContext} from 'react';
import ColorContext from './ColorContext';

const ComBFunctional = (props) => {
    const colorContext = useContext(ColorContext);

    const handleChange = (event) => {
        colorContext.setColor('green');
    }

    return (
        <div className="card" >
            <div className="card-header">
            ComBFunctional
            </div>
            <div className="card-body">
            <button className="btn btn-primary mb-2" onClick={handleChange}>
                색상 변경
            </button>
            <div style={{backgroundColor: colorContext.color, padding: '1rem'}}>
                내용이야!!!!!!!!!!!
                {colorContext.color}
            </div>
            </div>
        </div>
    )
};

export default ComBFunctional;