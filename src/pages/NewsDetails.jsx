import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import RightAside from '../components/rightAside';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const [news,setNews]=useState({})
    const data =useLoaderData()
   // console.log(data)
    const{id}=useParams()
  // console.log(news)
    useEffect(()=>{
        const findNewsDetails=data.find(news=>news.id==id)
        //console.log(findNewsDetails)
        setNews(findNewsDetails) 
    },[data,id])

    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='grid grid-cols-12 w-11/12 mx-auto gap-6 mt-5'>
            <NewsDetailsCard news={news}></NewsDetailsCard>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;