import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";


const FindUsOn = () => {
    return (
        <div>
            <h2 className="font-bold mb-5 text-2xl">Find Us On</h2>
            <div className="">
                <div className="join join-vertical  w-full">
                    <button className="btn justify-start  join-item"> <FaFacebook size={20}/> Facebook</button>
                    <button className="btn justify-start  join-item"> <FaTwitter size={20}/> Twitter</button>
                    <button className="btn justify-start  join-item"> <FaInstagram size={20}/> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;