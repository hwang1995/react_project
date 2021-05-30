import React, { Component } from "react";
import { connect } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

class ComAClass extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.setColor('red');
    }

  render() {
    return (
      <div className="card">
        <div className="card-header">ComAClass</div>
        <div className="card-body">
        <button className="btn btn-primary mb-2" onClick={this.handleChange}>
                색상 변경
            </button>
            <div style={{backgroundColor: this.props.color, padding: '1rem'}}>
                내용이야!!!!!!!!!!!
                {this.props.color}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    color: state.colorReducer.color
})

const mapDispatchToProps = (dispatch) => ({
    setColor: (color) => dispatch(createSetColorAction(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComAClass);
