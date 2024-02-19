import React from 'react'
import joinImg1 from '../../assets/join1.png'
import joinImg2 from '../../assets/join2.png'
import joinImg3 from '../../assets/join3.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../../styles.css'

const JoinNow = () => {
    return (
        <div className='flex flex-col items-center h-full gap-12 px-5 py-24 pt-20 pb-16 md:gap-0 lg:gap-24 lg:flex-row lg:justify-center sm:px-24 lg:px-32'>
            <div className='relative flex flex-wrap justify-center order-2 sm:gap-20 lg:order-first lg:gap-0 lg:bg-[#141414] w-full lg:w-[500px] lg:h-[500px]'>
                <div className='relative lg:absolute h-[380px] w-[240px] xl:w-[350px] xl:h-[250px] mt-8 bg-[#333333] lg:bg-transparent lg:mt-0 xl:right-[300px] xl:top-20 hidden 2xl:block'>
                    <img src={joinImg1} alt='' className='max-h-[420px] w-full h-full xl:object-cover absolute bottom-6 left-6 hover:bottom-0 hover:left-0 transition-all duration-500 ease-in lg:left-0 lg:bottom-0' />
                </div>
                <div className='relative lg:absolute 2xl:block xl:w-[350px] xl:h-[250px] mt-8 bg-[#333333] lg:bg-transparent lg:mt-0 xl:bottom-72 xl:left-44 hidden'>
                    <img src={joinImg2} alt='' className='max-h-[420px] w-full h-full lg:object-cover absolute bottom-6 left-6 hover:bottom-0 hover:left-0 transition-all duration-500 ease-in lg:left-0 lg:bottom-0' />
                </div>
                <div className='relative lg:absolute  h-[380px] w-[240px] lg:h-[480px] lg:w-[300px] 2xl:w-[350px] 2xl:h-[250px] mt-8 bg-[#333333] lg:bg-transparent lg:mt-0 2xl:top-64 2xl:left-24'>
                    <img src={joinImg3} alt='' className='max-h-[420px] w-full h-full xl:object-cover absolute bottom-6 left-6 hover:bottom-0 hover:left-0 transition-all duration-500 ease-out lg:left-0 lg:bottom-0' />
                </div>
            </div>
            <div className='flex flex-col items-center gap-12 p-4 max-w-[450px] lg:max-w-[600px]'>
                <h2 className='mb-4 text-4xl font-bold text-center lg:text-5xl text-secondary'>Respect Your Body It's Your Greatest Asset</h2>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-2'>
                        <CheckCircleIcon sx={{ fontSize: 35, color: 'white' }} />
                        <p className='text-2xl text-accent lg:text-3xl'>Increase Muscle and strength</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CheckCircleIcon sx={{ fontSize: 35, color: 'white' }} />
                        <p className='text-2xl text-accent lg:text-3xl'>Be Healthier than before</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CheckCircleIcon sx={{ fontSize: 35, color: 'white' }} />
                        <p className='text-2xl text-accent lg:text-3xl'>Increase Stamina</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinNow;