import React, { useState } from 'react'

/**
 * 
 * disable submit button if value not provided
 * clear form after submission
 * avoid default behavior
 */
function Forms() {
    const [name, setName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        console.log('form submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">name</label>
                    <input id='name' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' name='name' />

                    <button disabled={!name} type='submit'>submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Forms
