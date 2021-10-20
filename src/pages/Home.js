import React from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import About from './About';
import NewsArticles from './NewsArticles';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services/>
            <About/>
            <NewsArticles/>
            {/* <Footer/> */}
        </div>
    );
};

export default Home;