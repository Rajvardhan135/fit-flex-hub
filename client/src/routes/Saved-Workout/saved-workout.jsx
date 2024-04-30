import React, { useEffect, useState } from 'react'
import { getLikedExercise } from '../../utils/django/django.utils'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'
import { getExerciseById } from '../../utils/exerciseDb/exerciseDB.utils'
import LikeButton from '../../components/LikeButton/LikeButton'

function SavedWorkout() {
    const currentUser = useSelector(selectCurrentUser);
    const [exerciseIds, setExerciseIds] = useState([]);
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLikedExercise(currentUser);
            setExerciseIds(data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const exercisesData = []; // Temporary array to accumulate exercise data
            for (let id of exerciseIds) {
                const data = await getExerciseById(id);
                exercisesData.push(data); // Push data to the temporary array
            }
            setExercise(exercisesData); // Update state after fetching all exercises
        };

        fetchData();
    }, [exerciseIds]);

    useEffect(() => {
        console.log(exercise);
    }, [exercise])

    return (
        <div className='w-screen px-5 py-24 sm:px-24 lg:px-32'>
            <p className='ml-3 text-lg tracking-widest text-center md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent'>Your Saved Workout</p>
            <div className='flex flex-wrap gap-8 my-6'>
                {exercise.map((data, id) => <div key={id} className='transition-all duration-500 ease-in cursor-pointer hover:scale-110'>
                    <img src={data.gifUrl} className='my-4' />
                    <span className='text-accent'>{data.name}</span>
                </div>)}
            </div>
        </div>
    )
}

export default SavedWorkout