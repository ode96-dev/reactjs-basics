import React, { useState } from 'react'

function ModeToggler() {
    const [darkModeOn, setDarkModeOn] = useState(false)

    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleLightMode() {
        setDarkModeOn(false)
    }
    function handleDarkMode() {
        setDarkModeOn(true)
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleDarkMode}>
                Dark Mode on
            </button>
            <button onClick={handleLightMode}>
                Light Mode on
            </button>
        </div>
    )
}

export default ModeToggler