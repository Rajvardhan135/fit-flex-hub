import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Workouts from '../Workouts/Workouts'

const Explore = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Workouts />} />
                <Route path=':exercise' />
            </Routes>
        </div>
    )
}

export default Explore