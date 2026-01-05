
import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetailsCard = ({news}) => {
    return (
        <section className='w-full md:col-span-9'>
                <h2 className='font-bold'>News Details</h2>
               <div className='border-2 border-gray-300 mt-6 p-5 rounded-2xl'>
                 <img className='w-full h-95 object-cover rounded-lg' src={news.image_url} alt="" />
                <h1 className='font-semibold text-2xl mt-6'>{news.title}</h1>
                <p className='mt-2'>
                    {news.details}
                </p>
                <Link className='btn btn-secondary mt-5' to={`/category/${news.category_id}`}>Back to category</Link>
               </div>
            </section>
    );
};

export default NewsDetailsCard;