import React from 'react';
import './Movie.css'

const Title = (props) => {
    return (
        <div>
            <p className='title'>{props.title}</p>
        </div>
    );
};

export default Title;