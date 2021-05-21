import React, { Component, createRef } from "react";

class ComC extends Component {

  constructor(props) {
    super(props);
    this.outerDivRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    /**
     * scrollHeight -> 내용물의 높이
     * clientHeight -> 컨테이너의 높이
     */
    const scrollHeight = this.outerDivRef.current.scrollHeight;
    const clientHeight = this.outerDivRef.current.clientHeight;
    // console.log(scrollHeight, clientHeight);
    this.outerDivRef.current.style.scrollBehavior = 'smooth';
    this.outerDivRef.current.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const outerStyle = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }
    return (
      <div className="card">
        <div className="card-header">ComC</div>
        <div className="card-body">
          <div style={outerStyle} ref={this.outerDivRef}>
            <div style={innerStyle}>
             
            </div>
          </div>
          <button className="btn btn-info btn-sm mt-3" onClick={this.handleClick}>
            스크롤 이동해봅시다.
          </button>
        </div>
      </div>
    );
  }
}

export default ComC;
