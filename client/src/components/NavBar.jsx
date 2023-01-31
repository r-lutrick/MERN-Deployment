import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



const NavBar = () => {
    const location = useLocation()
    // console.log(location)
    return (
        <div className='container d-flex align-items-center justify-content-between m-auto my-5'>
            <h1>Pet Shelter</h1>
            {
                location.pathname === '/' ?
                <Link className='btn btn-dark' to='/pets/new'>Add Pet to Shelter</Link>:
                <Link className='btn btn-dark' to='/'>Home</Link> 
            }
        </div>
    )
}

export default NavBar
