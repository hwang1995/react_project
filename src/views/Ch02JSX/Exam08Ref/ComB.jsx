import React, { Component, createRef } from "react";

class ComB extends Component {
  constructor(props) {
    super(props);
    this.handleBtn = this.handleBtn.bind(this);
    this.inputRef = createRef();
    this.divRef = createRef();
  }

  handleBtn = (event) => {
    this.inputRef.current.style.backgroundColor ='orange';
    this.inputRef.current.focus();
    this.divRef.current.innerHTML = "<img src='/logo512.png' alt='' width='100%' /><br/>내용을 추가합니다. 피나치공 피나치공"
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">ComB</div>
        <div className="card-body">
          <div className="form-row align-items-center">
            <input type="text" ref={this.inputRef} />
            
            <button className="ml-2 btn btn-primary btn-sm" onClick={this.handleBtn}>
              DOM 변화시키기
            </button>
            <div className="mt-3" ref={this.divRef}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComB;
