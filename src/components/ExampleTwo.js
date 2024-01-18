import React from 'react';
import '../App.css'; //external style
/**
 * styling
 * using classes
 * there are three techniques
 * 1. inline styles (as in the case of <p className='paragraph'></p>)
 * 2. internal styles (using the style element in the head section as in <style></style> or inside our file)
 * 3. external styles (using an external file as in the case of App.css)
 */
function ExampleTwo() {
    //internal style
    const exampleTwo = {
        backgroundColor: "#f00",
        marginLeft: "100px",
        padding: "30px",
        fontWeight: "bold"
    }
    return (
        <>
            <div style={exampleTwo} >
                <h1>ExampleTwo</h1>
                <div
                    //inline style
                    className="example-two">
                    Example boo
                </div>
            </div>

        </>
    )
}

export default ExampleTwo