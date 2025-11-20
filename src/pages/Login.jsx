import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';



const Login = () => {

    const { LoginUser } = use(AuthContext);

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState(false);

    const handleLogIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        setSuccessMessage(false)
        setErrorMessage(' ')

        LoginUser(email, password)
            .then((result) => {
                console.log(result.user)
                setSuccessMessage(true)
                navigate('/')

            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    return (
        <div className=" flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl text-center py-5 font-semibold'>Login your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogIn} className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='font-semibold text-center pt-5  '>
                        Don't Have An Account ?
                        <Link className='text-secondary ml-2' to="/auth/register">Register</Link>
                    </p>
                    {
                        successMessage && <p className='text-green-400'>User has LogIn successfully</p>
                    }

                    {
                        errorMessage && <p className='text-red-500'>{errorMessage}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
