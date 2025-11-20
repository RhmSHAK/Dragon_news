import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
// import userIcon from '../assets/user.png'


const Navbar = () => {

    const { user, SignOut } = use(AuthContext);

    const handleSignOut = () => {
        SignOut()
            .then(() => {
                alert("User Sign Out");
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='flex justify-between'>

            
            <div>{user?.email}</div>

            <div className='nav flex gap-5'>
                <NavLink className="hover:underline" to='/'>Home</NavLink>
                <NavLink className="hover:underline" to='/about'>About</NavLink>
                <NavLink className="hover:underline" to='/career'>Career</NavLink>
            </div>

            <div className='login-btn flex gap-5'>
                <img className='rounded-full size-11' src={user?.photoURL} alt="" />

                {user ? 
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    
                : 
                    <Link className="btn" to="/auth/login">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
