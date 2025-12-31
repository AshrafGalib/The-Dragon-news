import React, { use } from 'react';
import { NavLink } from 'react-router-dom';

const categoriesPromise = fetch('/categories.json')
.then(res=>res.json())
const Categories = () => {
    const categories = use(categoriesPromise)
   //console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All categories({categories.length})</h2>
            <div className='flex flex-col mt-5'>
                {
                categories.map(category=><NavLink className='btn btn-ghost text-accent font-semibold justify-start mb-2' to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;