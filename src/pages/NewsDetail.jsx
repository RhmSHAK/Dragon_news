import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetail = () => {
 
    const {id} = useParams();

    const data = useLoaderData();

    console.log(data,id)

    const [news, setNews]=useState({});

    useEffect(()=>{
        const newsDetails = data.find((singleNews)=> singleNews.id == id);
        setNews(newsDetails);
    },[])

    return (
        <div>
            <header className='py-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 py-9'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                    
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetail;