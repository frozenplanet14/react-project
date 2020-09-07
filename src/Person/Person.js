import React from 'react';


/**
 * Functional components (also referred to as "presentational", "dumb" or "stateless" components
 */
const person = ({name, age, children}) => {
    return (
        <div>
            <p>I'm a {name} and I am {age} years old!</p>
            <p>{children}</p>
        </div>
    );
}

export default person;