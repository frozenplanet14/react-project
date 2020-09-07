import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px
    }
`

/**
 * Functional components (also referred to as "presentational", "dumb" or "stateless" components
 */
const person = ({name, age, children, click}) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        // onClick={click}
        // <div className='Person' style={style}>
        <StyledDiv>
            <p>I'm a {name} and I am {age} years old!</p>
            <p>{children}</p>
            <input type='text' onChange={(evt) => click(evt.target.value)} value={name} />
        </StyledDiv>
    );
}

// export default Radium(person);
export default person;
