import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Pricing = () => {
    return (
        <div className='px-5 py-24 sm:px-24 lg:px-32' id='pricing'>
            <p className='tracking-widest text-center text-accent text:lg md:text-xl xl:text-3xl lg:text-2xl'>PRICING</p>
            <h2 className='mb-4 text-4xl font-bold text-center lg:text-5xl text-secondary'>Affordable Pricing Plan</h2>
            <div className='flex flex-row flex-wrap justify-center gap-12 mt-16'>
                <div className='p-16 transition-all duration-500 ease-in bg-black group hover:bg-secondary'>
                    <p className='text-2xl font-semibold transition-all duration-500 ease-in text-secondary group-hover:text-accent'>Basic Package</p>
                    <p className='text-[75px] text-accent'>$25</p>
                    <p className='text-accent text-md'>per month, bill annually</p>
                    <div className='flex flex-col gap-4 my-4 mb-8'>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 28, color: 'white' }} />
                            <p className='font-medium text-md text-accent'>Umlimited Gym Access</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>2x Fitness Consultant</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>Nutrition Tracing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>1x Free Shipment</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>3 Days per week</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>Personal Trainer</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-auto h-auto px-4 py-3 my-4 transition-all duration-500 ease-in border-2 rounded-md cursor-pointer color-accent bg-secondary min-w-20 min-h-9 text-accent group-hover:bg-accent group-hover:text-primary border-secondary'>
                        Join Now
                    </div>
                </div>

                <div className='relative p-16 overflow-hidden transition-all duration-500 ease-in bg-black group hover:bg-secondary'>
                    <div className='absolute top-[20px] -right-[102px] p-2 w-[300px] text-center font-semibold -skew-x-[30deg] skew-y-[30deg] bg-white color-primary'>
                        Best Offer
                    </div>
                    <p className='text-2xl font-semibold transition-all duration-500 ease-in text-secondary group-hover:text-accent'>Basic Package</p>
                    <p className='text-[75px] text-accent'>$55</p>
                    <p className='text-accent text-md'>per month, bill annually</p>
                    <div className='flex flex-col gap-4 my-4 mb-8'>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 28, color: 'white' }} />
                            <p className='font-medium text-md text-accent'>Umlimited Gym Access</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>2x Fitness Consultant</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>Nutrition Tracing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>1x Free Shipment</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>3 Days per week</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>Personal Trainer</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-auto h-auto px-4 py-3 my-4 transition-all duration-500 ease-in border-2 rounded-md cursor-pointer color-accent bg-secondary min-w-20 min-h-9 text-accent group-hover:bg-accent group-hover:text-primary border-secondary'>
                        Join Now
                    </div>
                </div>

                <div className='p-16 transition-all duration-500 ease-in bg-black group hover:bg-secondary'>
                    <p className='text-2xl font-semibold transition-all duration-500 ease-in text-secondary group-hover:text-accent'>Basic Package</p>
                    <p className='text-[75px] text-accent'>$75</p>
                    <p className='text-accent text-md'>per month, bill annually</p>
                    <div className='flex flex-col gap-4 my-4 mb-8'>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 28, color: 'white' }} />
                            <p className='font-medium text-md text-accent'>Umlimited Gym Access</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>2x Fitness Consultant</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>Nutrition Tracing</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>1x Free Shipment</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>3 Days per week</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CheckCircleIcon sx={{ fontSize: 24, color: 'white' }} />
                            <p className='text-md text-accent'>Personal Trainer</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-auto h-auto px-4 py-3 my-4 transition-all duration-500 ease-in border-2 rounded-md cursor-pointer color-accent bg-secondary min-w-20 min-h-9 text-accent group-hover:bg-accent group-hover:text-primary border-secondary'>
                        Join Now
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing