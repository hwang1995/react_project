import React, { Component } from "react";

class ComAClassTypeEvent extends Component {
  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.method1 = this.method1.bind(this);
  }

  handleClick1(event) {
    console.log("hello")
  }

  handleClick2(x, y) {
    this.method1();
    console.log(x ** y);
  }

  method1() {
    alert("helllllo");
  }

  handleClick3 = () => {
    alert("NO MORE DOWNWWWWWWNWN");
  }

  handleClick4 = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="card p-2">
        {/* 주석을 답시다 */}
        <div className="card-header">ComAClassTypeEvent</div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mr-2" onClick={this.handleClick1}>
            버튼 1
          </button>
          <button className="btn btn-info btn-sm mr-2" onClick={() => this.handleClick2(100, 10)}>
            버튼 2
          </button>

          <button className="btn btn-info btn-sm mr-2" onClick={this.handleClick3}>
            버튼 1
          </button>
          <button className="btn btn-info btn-sm mr-2" onClick={this.handleClick4}>
            버튼 2
          </button>
        </div>
      </div>
    );
  }
}

export default ComAClassTypeEvent;
