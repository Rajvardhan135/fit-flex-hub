import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div>
                <NavLink />
                <NavLink />
                <NavLink />
                <NavLink />
            </div>
            <Outlet />
        </>
    )
}

export default Navigation