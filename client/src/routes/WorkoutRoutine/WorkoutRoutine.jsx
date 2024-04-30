import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getExerciseByBodyPart } from '../../utils/exerciseDb/exerciseDB.utils';
import { updateProgress } from '../../utils/django/django.utils'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'

const WorkoutRoutine = () => {
    const currentUser = useSelector(selectCurrentUser);
    let { bodyPart } = useParams();
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const exercise = await getExerciseByBodyPart(bodyPart);
            setExercises(exercise)
            console.log(bodyPart);
        }
        fetchData()
    }, [])
    useEffect(() => {
        updateProgress(currentUser, 80, 1);
    }, [])
    return (
        <div className='w-screen px-5 py-24 sm:px-24 lg:px-32'>
            <p className='ml-3 text-lg tracking-widest text-center capitalize md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent'>{bodyPart} Workouts</p>
            <h2 className='mb-20 ml-3 text-4xl font-bold text-center sm:text-left lg:text-5xl text-secondary'>Easy to Follow Workouts</h2>
            <div className=''>
                {exercises.map((exercise, key) => <div key={key} className='flex flex-col gap-4 my-4 lg:flex-row text-accent'>
                    <div>
                        <img src={exercise.gifUrl} />
                    </div>
                    <div>
                        <p className='text-2xl font-bold capitalize'>{exercise.name}</p>
                        <p className='text-xl text-secondary'>Instructions</p>
                        {exercise.instructions.map((step, key) => <p className='text-lg' key={key}>{key + 1}. {step}</p>)}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default WorkoutRoutine