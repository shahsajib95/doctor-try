import React from 'react';
import { useEffect } from 'react';
import Header from '../Component/Header/Header';
import Banner from '../Component/Banner/Banner';

const Home = () => {
    useEffect(()=>{window.scrollTo(0,0)}, [])
    return (
        <>
        <Header/>
        <Banner/>
        </>
    );
};

export default Home;