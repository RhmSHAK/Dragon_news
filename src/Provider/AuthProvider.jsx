import React, {  useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../FireBase/firebase.config";
import { AuthContext } from './AuthContext';

const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const LoginUser = (email, password)=>{
           setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const GoogleLogin = ()=>{
         setLoading(true)
      return  signInWithPopup(auth, provider)

    }

    //user observer
   useEffect(()=>{
         
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('inside useEffect on auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
         
    },[])


    const SignOut = ()=>{
       
       return signOut(auth)
        
    }

    const userInfo = {
        user,
        loading,
        createUser,
        LoginUser,
        GoogleLogin,
        SignOut
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
