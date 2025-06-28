import React from 'react';
import Banner from './Banner';
import SearchBid from './SearchBid';
import Opportunities from './Opportunities';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SearchBid/>
            <Opportunities/>
        </div>
    );
};

export default Home;