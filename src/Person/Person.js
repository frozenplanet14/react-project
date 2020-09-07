import React from 'react';
import './Person.css';

/**
 * Functional components (also referred to as "presentational", "dumb" or "stateless" components
 */
const person = ({name, age, children, click}) => {
    return (
        // onClick={click}
        <div className='Person'>
            <p>I'm a {name} and I am {age} years old!</p>
            <p>{children}</p>
            <input type='text' onChange={(evt) => click(evt.target.value)} />
        </div>
    );
}

export default person;