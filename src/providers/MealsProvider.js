import React, { createContext, useContext, useEffect, useState } from 'react'

const MealsContext = createContext();

const todaysMeals = ['Ugali', 'Roasted Meat', 'Sweet Potato'];


function MealsProvider({ children }) {

    const [meals, setMealList] = useState(todaysMeals);


    return (
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
    )
}
export const useMealListContext = () => useContext(MealsContext)
export default MealsProvider
