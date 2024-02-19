import React from 'react'
import '../../styles.css'

const Button = ({ children, type }) => {
    return (
        <div className={`cursor-pointer my-4 min-w-20 min-h-9 w-auto border-2 rounded-md flex justify-center items-center h-auto py-3 px-4 text-accent ${type === 'primary' ? 'bg-secondary ease-in-out hover:bg-transparent hover:text-secondary border-secondary transition-all duration-500' : 'bg-transparent'}`}>
            {children}
        </div>
    )
}

export default Button