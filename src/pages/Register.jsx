import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';


const Register = () => {

    const {createUser,setUser,updateUser} = use(AuthContext)

    const navigate = useNavigate();

    const handleRegister = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,photo,email,password)

        createUser(email,password)
        .then((result)=>{
            const user = result.user
          
            

            //update profile
            updateUser({displayName: name,photoURL: photo  })
             .then(()=>{
                    setUser({...user,displayName: name,photoURL: photo})
                    alert("Update Profile Successfully")
                    navigate('/')
             })
             .catch((error)=>{
                console.log(error)
                setUser(user)
             })

        })
        .catch((error)=>{
            console.log(error)
        })



    }

    return (
        <div className=" flex justify-center min-h-screen items-center">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl text-center py-5 font-semibold'>Register your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">User Name</label>
                        <input type="text" name="name" className="input" placeholder="User Name" />

                        <label className="label mt-1">PhotoURL</label>
                        <input type="text" name="photo" className="input" placeholder="PhotoURL" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='font-semibold text-center pt-5'>
                        Already Have An Account ?
                        <Link className='text-secondary ml-2' to="/auth/login">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Register;