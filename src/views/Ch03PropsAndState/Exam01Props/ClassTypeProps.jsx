import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClassTypeProps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, version} = this.props;
        return (
            <div className="card">
            <div className="card-header">ClassTypeProps</div>
            <div className="card-body">{name} : {version} </div>
          </div>
        )
    }
}

ClassTypeProps.defaultProps = {
    version: 10000
}

ClassTypeProps.propTypes = {
    name : PropTypes.string.isRequired,
    version : PropTypes.number,
}
export default ClassTypeProps;