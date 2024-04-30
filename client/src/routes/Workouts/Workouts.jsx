import React, { useState, useEffect } from 'react'
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
import { getExerciseByBodyPart } from '../../utils/exerciseDb/exerciseDB.utils'
import LikeButton from '../../components/LikeButton/LikeButton'

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
        name: 'Shoulders',
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
        name: 'Lower Arms',
        img: LowerArm
    },
    {
        name: 'Upper Arms',
        img: UpperArm
    },
    {
        name: 'Lower Legs',
        img: LowerLeg
    },
    {
        name: 'Upper Legs',
        img: UpperLeg
    },
]
// onClick={() => likeExercise(data.id, currentUser)}

const Workouts = () => {
    const [selectedWorkout, setSelectedWorkout] = useState(workoutTypeList[0]);
    const [workout, setWorkOut] = useState([]);

    const onChangeWorkout = (index) => {
        setSelectedWorkout(workoutTypeList[index])
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getExerciseByBodyPart(selectedWorkout.name);
                setWorkOut(response);
                // console.log(response);
            } catch (error) {
                console.error("Error fetching exercises:", error);
                // Handle errors gracefully (e.g., display error message to user)
            }
        };

        fetchData(); // Call the function to fetch data on component mount
    }, [selectedWorkout]);


    return (
        <div className='w-screen px-5 py-24 sm:px-24 lg:px-32'>
            <p className='ml-3 text-lg tracking-widest text-center md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent'>Explore Workouts</p>
            <h2 className='mb-20 ml-3 text-4xl font-bold text-center sm:text-left lg:text-5xl text-secondary'>Easy to Follow Workouts</h2>
            <div id='body-part-container' className='flex flex-row overflow-scroll'>
                {workoutTypeList.map((workout, id) => <div key={id} onClick={() => onChangeWorkout(id)} className='w-[300px] md:w-[400px] h-[380px] m-8 flex-shrink-0 bg-[#333333] pb-10 hover:scale-110 transition-all duration-500 ease-in cursor-pointer'>
                    <div className='w-full h-[320px]'>
                        <img src={workout.img} className='w-full h-full' />
                    </div>
                    <p className='text-xl text-center text-accent'>{workout.name}</p>
                </div>)}
            </div>
            <p className='ml-3 text-lg tracking-widest text-center md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent'>{selectedWorkout.name}</p>
            {/* <h2 className='mb-20 ml-3 text-4xl font-bold text-center sm:text-left lg:text-5xl text-secondary'>Easy to Follow Workouts</h2> */}
            <div className='flex flex-wrap justify-center gap-8'>
                {workout && workout.map((data, id) => <div key={id} className='transition-all duration-500 ease-in cursor-pointer hover:scale-110'>
                    <img src={data.gifUrl} className='my-4' />
                    <div>
                        <LikeButton exerciseId={data.id} />
                    </div>
                    <span className='text-accent'>{data.name}</span>
                </div>)}
            </div>
        </div>
    )
}

export default Workouts

/*


*/