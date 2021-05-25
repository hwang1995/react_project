import React, {useState} from 'react';
import FunctionalType from './FunctionalType';

const Exam02UseEffect = (props) => {
    const [startNum, setStartNum] = useState(0);

    const handleChange = (event) => {
        try {
            setStartNum(parseInt(event.target.value, 10));
        } catch (error) {
            return;
        }
    };
    return (
        <div className="card" >
            <div className="card-header">
            Exam02UseEffect
            </div>
            <div className="card-body">
                <input type="number" name="startNum" value={startNum} onChange={handleChange} />
                <FunctionalType startNum={startNum}/>
            </div>
        </div>
    )
}

export default Exam02UseEffect