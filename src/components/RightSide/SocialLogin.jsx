import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';


const SocialLogin = () => {

    const navigate = useNavigate();

    const {GoogleLogin} = use(AuthContext);

    const handleGoogleLogIN = () =>{
         GoogleLogin()
         .then(()=>{
            alert("Google Sign In")
            navigate('/')
         })
         .catch((error)=>{
            console.log(error)
         })
    }

    return (
        <div>
            <h2 className='text-2xl font-bold  mb-4'>Login With</h2>
            <div className="space-y-3">
              <button onClick={handleGoogleLogIN} className='btn btn-secondary btn-outline w-full'><FcGoogle size={25}/>Login With Google</button>
              <button className='btn btn-primary btn-outline w-full'><FaGithub size={25} />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;