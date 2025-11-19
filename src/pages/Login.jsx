import React from 'react';
import { Link } from 'react-router';


const Login = () => {
    return (
        <div className=" flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl text-center py-5 font-semibold'>Login your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-semibold text-center pt-5  '> 
                        Don't Have An Account ? 
                        <Link className='text-secondary ml-2' to="/auth/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
