import React from 'react'

const WorkoutType = ({ img, name }) => {
    return (
        <div className='w-[280px] h-[360px] my-8'>
            <img src={img} className='h-[340px]' />
            <p className='text-lg text-center text-accent'>{name}</p>
        </div>
    )
}

export default WorkoutType