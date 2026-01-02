import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className="w-full space-y-4">
           <SocialLogin></SocialLogin>
           <FindUsOn></FindUsOn>
           <QZone></QZone>
        </div>
    );
};

export default RightAside;