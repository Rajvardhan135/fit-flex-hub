import React from 'react'
import scheduleImg from '../../assets/schedule.png'

const Schedule = () => {
    return (
        <div className='px-5 py-24 sm:px-24 lg:px-32'>
            <p className='tracking-widest text-center text-accent text:lg md:text-xl xl:text-3xl lg:text-2xl '>CLASS SCHEDULE</p>
            <h2 className='mb-4 text-4xl font-bold text-center lg:text-5xl text-secondary'>Weekly Class Schedule</h2>
            <div className='lg:hidden'>
                <img src={scheduleImg} alt='' />
            </div>
            <div className='hidden grid-cols-8 grid-rows-6 text-sm lg:grid bg-[#242424]'>
                <div className='font-semibold text-accent h-[100px] flex justify-center items-center'>Time</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Sun</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Mon</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Tue</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Wed</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Thurs</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Fri</div>
                <div className='flex items-center justify-center font-semibold text-accent'>Sat</div>

                <div className='flex items-center justify-center font-semibold text-accent'>09:00 AM</div>
                <div className='text-accent flex flex-col bg-[#ea9d4f] justify-center items-center'>
                    <p className='font-medium'>A Bert Flores</p>
                    <p>Fitness</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex flex-col text-accent bg-[#3b8267] justify-center items-center'>
                    <p className='font-medium'>Estherd harward</p>
                    <p>Nutrition</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex flex-col text-accent bg-[#436589] justify-center items-center'>
                    <p className='font-medium'>Cody Fisher </p>
                    <p>Physique</p>
                </div>
                <div className='flex items-center justify-center text-accent'>11:00 Am</div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex flex-col text-accent bg-[#632b47] justify-center items-center'>
                    <p className='font-medium'>Jenny Wilson</p>
                    <p>Nutrition</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex flex-col text-accent bg-[#436589] justify-center items-center'>
                    <p className='justify-center font-medium'>Cody Fisher </p>
                    <p>Physique</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex flex-col text-accent bg-[#763c59] justify-center items-center'>
                    <p className='font-medium'>Ronald Richards</p>
                    <p>Physique</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>

                <div className='flex items-center justify-center text-accent'>03:00 PM</div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex flex-col items-center justify-center text-accent bg-[#3b8267]'>
                    <p className='font-medium'>Lilly Woods</p>
                    <p>Strength and core</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>

                <div className='flex items-center justify-center text-accent'>05:00 PM</div>
                <div className='flex flex-col items-center justify-center text-accent bg-[#3b8267]'>
                    <div className='flex items-center justify-center font-medium'>
                        <p className='font-medium'>Albert Flores</p>
                        <p>Fitness</p>
                    </div>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex text-accent flex-col bg-[#436589] justify-center items-center'>
                    <p className='font-medium'>Cody Fisher </p>
                    <p>Physique</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex text-accent flex-col bg-[#436589] justify-center items-center'>
                    <p className='font-medium'>Cody Fisher </p>
                    <p>Physique</p>
                </div>
                <div className='flex items-center justify-center text-accent'>07:00 PM</div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex text-accent flex-col bg-[#632b47] justify-center items-center'>
                    <p className='font-medium'>Jenny Wilson</p>
                    <p>Nutrition</p>
                </div>
                <div className='flex text-accent flex-col bg-[#3b8267] justify-center items-center'>
                    <p className='font-medium'>Estherd harward </p>
                    <p>Nutrition</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex items-center justify-center text-accent'></div>
                <div className='flex text-accent flex-col bg-[#763c59] justify-center items-center'>
                    <p className='font-medium'>Ronald Richards</p>
                    <p>Physique</p>
                </div>
                <div className='flex items-center justify-center text-accent'></div>
            </div>
        </div>
    )
}

export default Schedule