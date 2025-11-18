
import ClassImage from '../../assets/class.png';
import PlayGroundImage from '../../assets/playground.png';
import SwimmingImage from '../../assets/swimming.png';
import RightBgImage from '../../assets/bg.png';


const Q_Zone = () => {
    return (
        <div className="space-y-6 mb-7 ">
            <div className='bg-base-200 p-3'>
                <h2 className='font-bold  mb-5 text-2xl'>Q-Zone</h2>
                <div className=" space-y-7 ">
                    <img className=' w-full' src={ClassImage} alt="" />
                    <img className=' w-full' src={PlayGroundImage} alt="" />
                    <img className=' w-full' src={SwimmingImage} alt="" />
                </div>
            </div>
            <img className='w-full' src={RightBgImage} alt="" />
        </div>
    );
};

export default Q_Zone;