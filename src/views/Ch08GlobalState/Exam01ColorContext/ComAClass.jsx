import React, { Component } from "react";
import ColorContext from "./ColorContext";
import ComBFunctional from "./ComBFunctional";

class ComAClass extends Component {
    // Context를 쓰고 싶다면 정적 속성을 넣어라.
    // this.context로 가져올 수 있다 값을.
    static contextType = ColorContext;

    // 생성자
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (event) => {
        this.context.setColor('red')
    }

  render() {
    return (
      <div className="card">
        <div className="card-header">ComAClass</div>
        <div className="card-body">
            <button className="btn btn-primary mb-2" onClick={this.handleChange}>
                색상 변경
            </button>
            <div style={{backgroundColor: this.context.color, padding: '1rem'}}>
                내용이야!!!!!!!!!!!
                {this.context.color}
            </div>
            <div>
                <ComBFunctional/>
            </div>
        </div>
      </div>
    );
  }
}

export default ComAClass;
