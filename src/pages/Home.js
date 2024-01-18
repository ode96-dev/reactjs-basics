import React, { useState } from 'react'
import Header from '../components/Header'
import ExampleOne from '../components/ExampleOne'
import ExampleTwo from '../components/ExampleTwo'
import ExampleThree from '../components/Header'
import ModeToggler from '../components/ModeToggler'
import ExampleFour from '../components/ExampleFour'
import ExampleFive from '../components/ExampleFive'
import MealsProvider from '../providers/MealsProvider'
import MealsList from '../components/MealsList'
import Counter from '../components/Counter';


function Home() {
    const date = new Date()
    const [word, setWord] = useState('Eat')
    return (
        <>
            <Header />
            <ExampleOne title='example title' />
            <ExampleTwo />
            <ExampleThree />
            <ModeToggler />
            <ExampleFour message={date.toLocaleTimeString()} />
            <ExampleFive message={word + ' at Little Lemon'} />
            <MealsProvider>
                <MealsList />
                <Counter />
            </MealsProvider>
        </>
    )
}

export default Home
