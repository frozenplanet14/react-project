import React from 'react';
import Radium from 'radium';
import './Person.css';

/**
 * Functional components (also referred to as "presentational", "dumb" or "stateless" components
 */
const person = ({name, age, children, click}) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // onClick={click}
        <div className='Person' style={style}>
            <p>I'm a {name} and I am {age} years old!</p>
            <p>{children}</p>
            <input type='text' onChange={(evt) => click(evt.target.value)} value={name} />
        </div>
    );
}

export default Radium(person);