import React from 'react'
import { useMealListContext } from '../providers/MealsProvider'

function Counter() {
    const { meals } = useMealListContext()
    return (
        <div>
            <h3>number of meals today: {meals.length}</h3>
        </div>
    )
}

export default Counter
