import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const {id} = useParams();

    const data = useLoaderData();
    
    const [CategoryNews, setCategoryNews] = useState([])

    // console.log(id,data)


    useEffect(()=>{

        if (id == "0"){
            setCategoryNews(data);
            return
        }
        else if(id == "1"){
            const filterDailyNews = data.filter((dailyNews)=> dailyNews.others.is_today_pick == true)
            setCategoryNews(filterDailyNews);

        }
        else{
          const filterNews = data.filter((news)=> news.category_id == id)
         setCategoryNews(filterNews)
       }
      

    },[data,id])
   


    return (
        <div>
            {/* Category News - {id} */}
            <h2 className='font-bold text-2xl mb-4'>Total 
                <span className='text-secondary  ml-2'>{CategoryNews.length}</span> news Found</h2>

           <div className="grid grid-cols-1 gap-5">
              {
                CategoryNews.map((news)=>
                    <NewsCard key={news.id} news={news} ></NewsCard>
                )
             }  
            </div> 
        </div>
    );
};

export default CategoryNews;