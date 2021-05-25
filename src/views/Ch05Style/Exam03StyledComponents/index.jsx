import React from 'react';
import Box from './Box';
import Button from './Button'
const Exam03StyledComponents = (props) => {
    return (
        <div className="card" >
            <div className="card-header">
            Exam03StyledComponents
            </div>
            <div className="card-body">
                <Box>
                    <Button inverted>
                        Hello It's me
                    </Button>
                    <Button inverted>
                        Hello It's me
                    </Button>
                    <Button inverted>
                        Hello It's me
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default Exam03StyledComponents;