import React, { useEffect, useState } from 'react'
import chestImg from '../../assets/chest-routine.jpg'
import backImg from '../../assets/back-routine.png'
import armImg from '../../assets/arms-routine.png'
import legImg from '../../assets/leg-routine.jpg'
import absImg from '../../assets/abs-routine.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from 'react-router-dom'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { getProgress } from '../../utils/django/django.utils'
import { selectCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'

const WorkoutBanner = ({ img, type }) => {
  const navigate = useNavigate()
  return <div className='w-full p-10 min-h-[400px]'>
    <div style={{ backgroundImage: `url(${img})` }} className='relative w-full h-[400px] bg-center bg-no-repeat bg-cover'>
      <p className='absolute ml-3 text-lg tracking-widest text-center md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent top-5 lg:bottom-10 left-5'>{type} Workout</p>
      <div className='absolute flex items-center gap-2 cursor-pointer bottom-10 right-5 hover:opacity-60' onClick={() => navigate(`workout/${type.toLowerCase()}`)} >
        <p className='text-xl text-accent'>Begin Workout</p>
        <PlayCircleIcon sx={{ fontSize: 64, color: '#00ccff' }} />
      </div>
    </div>
  </div>
}

function Dashboard() {
  const currentUser = useSelector(selectCurrentUser);
  const [progress, setProgress] = useState({
    calories: 0,
    hrs: 0,
  })
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProgress(currentUser)
      setProgress(response)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className='flex justify-between p-4 m-10 f-full'>
        <div className='flex flex-col items-center gap-4 w-fit'>
          <WhatshotIcon sx={{ color: '#00ccff', fontSize: 40 }} />
          <p className='text-accent'>{progress?.calories} Calories Burned</p>
        </div>
        <div className='flex flex-col items-center gap-4 w-fit'>
          <AccessTimeFilledIcon sx={{ color: '#00ccff', fontSize: 40 }} />
          <p className='text-accent'>{progress?.hrs}hrs Spend</p>
        </div>
      </div>
      <div>
        <WorkoutBanner img={chestImg} type='Chest' />
        <WorkoutBanner img={backImg} type='Back' />
        <WorkoutBanner img={armImg} type='Arms' />
        <WorkoutBanner img={legImg} type='Legs' />
        <WorkoutBanner img={absImg} type='Abs' />
      </div>
    </div>
  )
}

export default Dashboard