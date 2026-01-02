import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Loding from './common/Loding';
// const newsPromise = fetch('/news.json')
// .then(res=>res.json())
const LatestNews = () => {
    const[news,setNews]=useState([])
    const [loading,setLoading]=useState(true)
    // const AllNews = use(newsPromise)
    //console.log(news)
    useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => {
        const latestNews = data.filter(
          item => item.others?.is_today_pick === true
        );
        setNews(latestNews);
        setLoading(false)
      });
  }, []);
//     useEffect(()=>{
// const latestNews = AllNews.filter(singleNews=>singleNews.others.is_today_pick === true)
//     setNews(latestNews)
//     },[AllNews])
    console.log(news)
    if(loading) {
        return (
      <div className="bg-base-200 px-2 py-3">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
    }
    return (
        <div className='flex items-center gap-2 bg-base-200 px-2 py-3'>
            <h1 className='bg-secondary p-3 text-base-100 font-bold'>Latest</h1>
            <Marquee pauseOnHover={true}>
                {news.map(singleLatestNews=><p key={singleLatestNews.id} className='font-bold'>{`. ${singleLatestNews.title}`}</p>)}
            </Marquee>
        </div>
    );
};

export default LatestNews;