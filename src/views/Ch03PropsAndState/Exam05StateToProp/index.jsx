import { useState } from 'react';
import Child from './Child';

const Exam05StateToProp = (props) => {
    const [img, setImg] = useState('logo192.png');

    const changeImage = () => {
        if(img === 'logo192.png') {
            setImg('logo512.png');
        } else {
            setImg('logo192.png');
        }

        console.log(img)
    }
    return (
        <div className="card">
        <div className="card-header">Exam05StateToProp</div>
        <div className="card-body">
            <Child img={img} changeImage={changeImage}  {...props} />
            <Child img={img} changeImage={changeImage}  {...props} />
        </div>
      </div>
    )
}



export default Exam05StateToProp;