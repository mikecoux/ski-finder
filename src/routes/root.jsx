import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
        <div id='nav-bar' className='border-b-4'>
            <nav className='flex flow-row space-x-5 text-xl pt-6 pb-6 px-8'>
                <NavLink to='/' end>
                    <img src='/images/profile.webp' alt='Mike' className='h-12 active:blur-sm lg:hover:blur-sm'/>
                </NavLink>
                <NavLink to='/skis' end className={'text-sky-500 hover:text-sky-700 self-center'}>
                    Browse Skis
                </NavLink>
                <NavLink to='/quiz' className='text-sky-500 hover:text-sky-700 self-center'>
                    Take Quiz
                </NavLink>
            </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
    </>
  )
}
