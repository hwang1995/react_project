import React, {useState} from 'react';
import cn from 'classnames/bind';
import style from './style.module.css';

const cx = cn.bind(style);


const Exam01Css = () => {
    const [state, setState] = useState({
        userId: 'sfsd'
    });

    console.log(cx);
    return (
        <div className="card">
        <div className="card-header">Exam01Css</div>
        <div className="card-body">
            <div className={style.wrapper}>
                hello world SIPU
            </div>
            <div className={style.inverted}>
                dlrow olleh
            </div>

            <div className={`${style.inverted} ${style.wrapper} mt-4 `}>
                hello world SIPU
            </div>

            <div className={cn(style.wrapper, {[style.inverted]: state.userId !== null}, 'mt-5')}>
                hello world SIPU Condition {state.userId}
            </div>

            <div className={cx('wrapper')}>
                hello world SIPU Condition & CX {state.userId}
            </div>
        </div>
      </div>
    )
}

export default Exam01Css;