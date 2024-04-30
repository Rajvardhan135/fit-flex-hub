import React from 'react'

const WorkoutType = ({ img, name }) => {
    return (
        <div className='w-[420px] h-[360px] my-8'>
            <img src={img} className='w-full h-full' />
            <p className='text-lg text-center text-accent'>{name}</p>
        </div>
    )
}

export default WorkoutType