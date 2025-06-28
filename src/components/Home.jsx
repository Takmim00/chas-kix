import React from 'react';
import Banner from './Banner';
import SearchBid from './SearchBid';
import Opportunities from './Opportunities';
import OneSearch from './OneSearch';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SearchBid/>
            <Opportunities/>
            <OneSearch/>
        </div>
    );
};

export default Home;