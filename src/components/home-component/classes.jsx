import React from 'react'
import class1 from '../../assets/class1.png'
import class2 from '../../assets/class2.png'
import class3 from '../../assets/class3.png'
import '../../styles.css'

const Classes = () => {
    return (
        <div className='px-5 py-24 bg-black sm:px-24 lg:px-32' id='classes'>
            <p className='ml-3 text-lg tracking-widest text-center md:text-xl xl:text-3xl lg:text-2xl sm:text-left text-accent'>OUR CLASSES</p>
            <h2 className='mb-20 ml-3 text-4xl font-bold text-center sm:text-left lg:text-5xl text-secondary'>Personalized Fitness Classes for Every Goal</h2>
            <div className='flex w-full gap-4 px-4 pb-20 overflow-x-scroll no-scrollbar sm:overflow-x-hidden sm:gap-2'>
                <div className='w-[280px] h-[320px] flex-shrink-0 relative group sm:flex-shrink transition-all duration-500 ease-in-out sm:hover:w-[140%] sm:w-full sm:h-[500px]'>
                    <img src={class1} alt='' className='absolute object-cover w-full h-full group-hover:opacity-20' />
                    <div className='absolute top-0 bottom-0 flex flex-col justify-center px-2 transition-all duration-700 ease-in-out delay-500 opacity-0 group-hover:opacity-100'>
                        <h3 className='text-lg font-bold text-center lg:text-3xl text-accent'>Yoga</h3>
                        <p className='text-sm text-center text-accent lg:text-xl'>Yoga classes provide a mindful blend of stretches and breathwork, promoting flexibility and relaxation for overall well-being.</p>
                    </div>
                </div>
                <div className='w-[280px] h-[320px] flex-shrink-0 relative group sm:flex-shrink transition-all duration-500 ease-in-out sm:hover:w-[140%] sm:w-full sm:h-[500px]'>
                    <img src={class2} alt='' className='absolute object-cover w-full h-full group-hover:opacity-20' />
                    <div className='absolute top-0 bottom-0 flex flex-col justify-center px-2 transition-all duration-700 ease-in-out delay-500 opacity-0 group-hover:opacity-100'>
                        <h3 className='text-lg font-bold text-center text-accent lg:text-3xl'>Crossfit</h3>
                        <p className='text-sm text-center text-accent lg:text-xl'>CrossFit classes combine intense workouts with varied exercises, promoting overall fitness through strength, conditioning, and community support</p>
                    </div>
                </div>
                <div className='w-[280px] h-[320px] flex-shrink-0 relative group sm:flex-shrink transition-all duration-500 ease-in-out sm:hover:w-[140%] sm:w-full sm:h-[500px]'>
                    <img src={class3} alt='' className='absolute object-cover w-full h-full group-hover:opacity-20 ' />
                    <div className='absolute top-0 bottom-0 flex flex-col justify-center px-2 transition-all duration-700 ease-in-out delay-500 opacity-0 group-hover:opacity-100'>
                        <h3 className='text-lg font-bold text-center text-accent lg:text-3xl'>Strength training</h3>
                        <p className='text-sm text-center text-accent lg:text-xl'>Strength training classes focus on building muscle and enhancing endurance with targeted exercises, fostering physical strength and performance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classes;