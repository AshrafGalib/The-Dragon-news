import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const[categoryNews,setCategoryNews]=useState([])
    const {id} = useParams()
    const data = useLoaderData()
    // console.log(id,data)
    useEffect(()=>{

   if(id == '0'){
    setCategoryNews(data)
    return
   }else if(id == '1'){
     const filteredNews = data.filter(news=>news.others.is_today_pick=== true)
    //console.log(filteredNews)
    setCategoryNews(filteredNews)
   }else{
    const filteredNews = data.filter(news=>news.category_id==id)
    //console.log(filteredNews)
    setCategoryNews(filteredNews)
   }
    },[data,id])
    return (
        <div>
            <h2 className='font-bold'>Dragon news home({categoryNews.length} news found)</h2>
            {
                categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;