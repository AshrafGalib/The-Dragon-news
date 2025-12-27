import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className='mt-7'>
            <h2 className='font-bold'>Find us on</h2>
            <div className="join join-vertical w-full mt-5">
  <button className="btn bg-white border-[#e5e5e5] join-item   justify-start"><FaFacebook></FaFacebook>Facebook</button>
  <button className="btn  bg-white border-[#e5e5e5] join-item  justify-start"><FaTwitter></FaTwitter>Twitter</button>
  <button className="btn  bg-white border-[#e5e5e5] join-item  justify-start"><FaInstagram></FaInstagram>Instagram</button>
</div>
        </div>
    );
};

export default FindUsOn;