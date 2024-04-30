import React from 'react'

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='w-[300px] h-auto bg-accent pb-4 transition-all duration-500 ease-in lg:left-0 lg:bottom-0 rounded-xl flex flex-col sm:flex-row sm:bg-transparent sm:w-full sm:justify-start gap-8'>
            <div className='w-full sm:w-[300px] sm:min-h-full h-[300px] bg-center bg-cover bg-no-repeat transition-all duration-500 ease-in' style={{ backgroundImage: `url(${testimonial.image})` }} />

            <div className='p-3 flex flex-col justify-center transition-all duration-500 ease-in text-primary sm:text-accent sm:w-[45%] lg:ml-20 lg:w-[60%]'>
                <p className='font-medium lg:text-lg'>{testimonial.testimonial}</p>
                <p className='mt-3 font-bold lg:text-lg'>{testimonial.name}</p>
                <p className='font-medium lg:text-lg'>{testimonial.profession}</p>
            </div>
        </div>
    )
}

export default TestimonialCard