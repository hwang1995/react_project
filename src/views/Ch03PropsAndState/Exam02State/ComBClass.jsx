import React, {Component} from 'react';

class ComBClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    addNumber = (event) => {
        this.setState({
            ...this.state,
            number: this.state.number + 2,
        }, () => {
            console.log('CB Value', this.state.number);
        });

        return console.log(this.state);
    }

    addNumber1 = (event) => {
        this.setState((prevState) => {
            console.log(prevState);
            return {
                number: prevState.number + 1,
            }
        })
        this.setState((prevState) => {
            console.log(prevState);
            return {
                number: prevState.number + 1,
            }
        })
    }

    render() {
        return (
            <div className="card" >
                <div className="card-header">
                    ComBClass
                </div>
                <div className="card-body">
                <div className="alert alert-primary" style={{color: this.state.color, fontSize: '3rem'}}>
            {this.state.number}
            </div>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자 증가2</button>
                </div>
            </div>
        )
    }
}

export default ComBClass;