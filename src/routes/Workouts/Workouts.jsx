import React from 'react'
import WorkoutType from '../../components/workout-type/workout-type'
import Back from '../../assets/back.png'
import Chest from '../../assets/chest.png'
import Cardio from '../../assets/cardio.png'
import LowerArm from '../../assets/lower-arms.png'
import UpperArm from '../../assets/upper-arms.png'
import LowerLeg from '../../assets/lower-legs.png'
import UpperLeg from '../../assets/upper-legs.png'
import Shoulder from '../../assets/shoulder.png'
import Neck from '../../assets/neck.png'
import Waist from '../../assets/waist.png'

const workoutTypeList = [
    {
        name: 'Back',
        img: Back
    },
    {
        name: 'Chest',
        img: Chest
    },
    {
        name: 'Cardio',
        img: Cardio
    },
    {
        name: 'Shoulder',
        img: Shoulder
    },
    {
        name: 'Neck',
        img: Neck
    },
    {
        name: 'Waist',
        img: Waist
    },
    {
        name: 'Lower Arm',
        img: LowerArm
    },
    {
        name: 'Upper Arm',
        img: UpperArm
    },
    {
        name: 'Lower Leg',
        img: LowerLeg
    },
    {
        name: 'Upper Leg',
        img: UpperLeg
    },
]

const Workouts = () => {
    return (
        <div className='px-5 py-24 sm:px-24 lg:px-32'>
            <p className='ml-3 text-lg tracking-widest text-center md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent'>Explore Workouts</p>
            <h2 className='mb-20 ml-3 text-4xl font-bold text-center sm:text-left lg:text-5xl text-secondary'>Easy to Follow Workouts</h2>
            <div className='flex flex-wrap justify-center gap-6'>
                {workoutTypeList.map((type, index) => <WorkoutType key={index} {...type} />)}
            </div>
        </div>
    )
}

export default Workouts