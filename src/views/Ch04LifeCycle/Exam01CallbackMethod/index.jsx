import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import ClassType from './ClassType';



const Ch04LifeCycle = (props) => {
    const [startNum, setStartNum] = useState(0);

    const handleChange = (event) => {
        try {
            setStartNum(parseInt(event.target.value, 10));
        } catch (error) {
            return;
        }
    };

    return (
        <div className="card">
        <div className="card-header">Ch04LifeCycle</div>
        <div className="card-body">
            <input type="number" name="startNum" value={startNum} onChange={handleChange} />
            <ClassType startNum={startNum}/>
    
        </div>
      </div>
    )
}

export default Ch04LifeCycle;