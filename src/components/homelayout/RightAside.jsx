import React from 'react';
import SocialLogin from '../RightSide/SocialLogin';
import FindUsOn from '../RightSide/FindUsOn';
import Q_Zone from '../RightSide/Q_Zone';

const RightAside = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <Q_Zone></Q_Zone>
        </div>
    );
};

export default RightAside;