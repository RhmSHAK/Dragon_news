import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNew = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className="text-base-100 bg-secondary p-2">Latest</p>
            <Marquee className='flex ' pauseOnHover={true} speed={50} >

            <p className='font-bold g'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis?t</p>
            <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, omnis?t</p>

            </Marquee>
        </div>
    );
}; 

export default LatestNew;