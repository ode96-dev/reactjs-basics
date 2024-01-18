import React from 'react'
/**
 * 
 * GOAL:
 * IDENTIFY TYPES OF EVENTS
 * EXPLAIN EVENT-HANDLING IN REACT
 */

function ExampleThree() {
    const handleClick = (e) => {
        e.preventDefault();
        alert('click event')
    }
    return (
        <button onClick={handleClick}>ExampleThree</button>
    )
}

export default ExampleThree