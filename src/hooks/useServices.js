import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services,setServices] = useState();
    const [news,setNews] = useState();
    useEffect(()=>{
        fetch('/services.json').then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    useEffect(()=>{
        fetch('/news.json').then(res=>res.json())
        .then(data=>setNews(data));
    },[])
    return {services,setServices,news}
};

export default useServices;