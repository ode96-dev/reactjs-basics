import React from 'react'
import { useMealListContext } from '../providers/MealsProvider'

function MealsList() {
    const { meals } = useMealListContext()
    return (
        <div>
            <h1>
                {meals.map((meal, index) => (
                    <h2 key={index}>{meal}</h2>
                ))}
            </h1>
        </div>
    )
}

export default MealsList
