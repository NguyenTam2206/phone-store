import React from 'react';

const Title = (props) => {
    return(
        <div>
            <div className="row">
                <div className="col-10 mx-auto my-2 text-title text-center">
                    {props.name} {props.title}
                </div>
            </div>
        </div>
    )
};

export default Title;