import React, {useState} from 'react';
import style from './style.module.scss';

const Exam02Sass = (props) => {

    return (
        <div className="card" >
            <div className="card-header">
            Exam02Sass
            </div>
            <div className="card-body">
            <div className={style.wrapper}>
                hello world SIPU
            </div>

            <div className={`${style.inverted} ${style.wrapper} mt-4 `}>
                hello world SIPU
            </div>

            </div>
        </div>
    )
}
export default Exam02Sass;