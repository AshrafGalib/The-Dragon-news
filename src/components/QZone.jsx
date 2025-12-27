import React from 'react';
import swimmingImage from '../assets/swimming.png'
import playgroundImage from '../assets/playground.png'
import classImage from '../assets/class.png'

const QZone = () => {
    return (
        <div className='mt-7 bg-base-200 p-5'>
                    <h2 className='font-bold'>Q-Zone</h2>
                    <div className="join join-vertical w-full mt-5 space-y-5">
          <img src={swimmingImage} alt="" />
          <img src={playgroundImage} alt="" />
          <img src={classImage} alt="" />
        </div>
                </div>
    );
};

export default QZone;