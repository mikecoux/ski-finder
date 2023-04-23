import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
        <div id='nav-bar'>
            <nav>
                <NavLink to='/' end>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/skis'>
                    <span>Browse Skis</span>
                </NavLink>
                <NavLink to='/quiz'>
                    <span>Take Quiz</span>
                </NavLink>
            </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
    </>
  )
}
