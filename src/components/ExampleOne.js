import React from 'react'

/**
 * 
 * You can pass data (props) from child (this) to Parent (App)
 * You cannot pass data (props) from Parent (App) to child (this)
 */
function ExampleOne(props) {
    return (
        <h3>
            {props.title}
        </h3>
    )
}

export default ExampleOne
