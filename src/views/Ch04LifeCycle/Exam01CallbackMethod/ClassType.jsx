import React from 'react';
class Exam01CallbackMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            startNum: 0,
        };

        console.log(props);
        console.log("construcotr 실행")
    }
    /**
     * Props가 갱신될 때에 State도 갱신 되도록 상태 리턴
     * @param {*} props 
     * @param {*} state 
     * @returns 
     */
    static getDerivedStateFromProps(props, state) {
        // console.log('getDerivedStateFromProps', props);
        // console.log('getDerivedStateFromProps', state);
        if(state.startNum !== props.startNum){
            return {
                number: props.startNum,
                startNum: 0,
            }
        }

        return null;

    }

    handleIncrement = (event) => {
        this.setState({
            ...this.state,
            number: this.state.number + 1
        })

        console.log('handleIncrement', this.state);
    };

    render() {
        console.log("Render", this.state)
        return (
        <div className="card mt-2" >
            <div className="card-header">
            Exam01CallBackMethod 
            </div>
            <div className="card-body">
                <div>number : {this.state.number}</div>
                <button className="btn btn-info btn-sm mt-2" onClick={this.handleIncrement}>
                    증가
                </button>
            </div>
        </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount 실행')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate() 실행');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount() 실행')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate 실행');
        // console.log(nextProps, nextState);
        if(nextState.number % 2 === 0) {
            return true;
        }
        return false;
    }
}

export default Exam01CallbackMethod;