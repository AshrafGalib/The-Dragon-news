import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-200 px-2 py-3'>
            <h1 className='bg-secondary p-3 text-base-100 font-bold'>Latest</h1>
            <Marquee pauseOnHover={true}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque facere, consequatur excepturi facilis sint. Fugiat esse aperiam dolor voluptatem ipsum inventore non earum distinctio iste, cupiditate, labore, quos numquam?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;