import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateProvider = ({children}) => {

      const {user,loading} = use(AuthContext)

      if(loading){
        return <Loading></Loading>;
      }

      if(user && user?.email){
        return children;
      }


    return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateProvider;