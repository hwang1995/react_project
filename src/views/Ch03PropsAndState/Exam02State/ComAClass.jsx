import React, { Component } from "react";

function getRandomColor() {
    return "#" + Math.floor(Math.random() * parseInt('ffffff', 16)).toString(16);
}

class ComAClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            color: 'black',
        };
        this.addNumber = this.addNumber.bind(this);
        this.changeColor = this.changeColor.bind(this);
        // this.getRandomColor = this.getRandomColor.bind(this);
        // this.changeColor() = this.changeColor.bind(this);
    }

    addNumber = () => {
        
        this.setState({
            ...this.state,
            number: this.state.number + 1,
        });
    }

    changeColor(event) {
        this.setState({
            ...this.state,
            color: getRandomColor(),
        });
        console.log(this.state)
    }

    componentDidUpdate() {
        console.log(this.state);
    }

  render() {
      console.log("렌더링 하고 있냐?");
    return (
      <div className="card">
        <div className="card-header">ComAClass</div>
        <div className="card-body">
            <div className="alert alert-primary" style={{color: this.state.color, fontSize: '3rem'}}>
            {this.state.number}
            </div>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
            <button className="btn btn-info btn-sm" onClick={this.changeColor}>색깔 변경</button>
            
            </div>
      </div>
    );
  }
}

export default ComAClass;
