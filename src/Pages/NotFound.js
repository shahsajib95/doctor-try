import React from 'react';
import Header from '../Component/Header/Header';
import { useEffect } from 'react';

const NotFound = () => {
    useEffect(()=>{window.scrollTo(0,0)},[])
    return (
        <>
            <Header/>
            <h1>404</h1>
            <h1>Page Not Found</h1>
        </>
    );
};

export default NotFound;