import React, { useState } from 'react'

function FeedbackForms() {
    const [score, setScore] = useState(10);

    return (
        <div>
            <form>
                <fieldset>
                    <label htmlFor="score">Score: {score}</label>
                    <input
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        type="range" min={0} max={10} />
                </fieldset>
            </form>
        </div>
    )
}

export default FeedbackForms
