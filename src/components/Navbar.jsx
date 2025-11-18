import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'


const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=''></div>
            <div className='nav flex gap-5 '>
                <NavLink className="hover:underline" to='/'>Home</NavLink>
                <NavLink className="hover:underline" to='/about'>About</NavLink>
                <NavLink className="hover:underline" to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-6'>Login</button>

            </div>
        </div>
    );
};

export default Navbar;