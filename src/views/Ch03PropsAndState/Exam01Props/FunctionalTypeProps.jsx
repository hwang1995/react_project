import PropTypes from 'prop-types';

const FunctionalTypeProps = (props) => {
    console.log(props);
    return (
        <div className="card" >
            <div className="card-header">
            FunctionalTypeProps
            </div>
            <div className="card-body">
                {props.name} : {props.version}
            </div>
        </div>
    )
}

FunctionalTypeProps.defaultProps = {
    // name: 'sibulNNN',
    version : 99999
}

FunctionalTypeProps.propTypes = {
    name : PropTypes.string.isRequired,
    version : PropTypes.number,
}

export default FunctionalTypeProps;