import React from 'react';
import HomeBanner from './HomeBanner';
import HomeCategory from './HomeCategory';
import HomeFeaturedProduct from './HomeFeaturedProduct';


const Home = ({products}) => {
    return (

        <React.Fragment>

            <HomeBanner />
            <HomeCategory />
            <HomeFeaturedProduct />

        </React.Fragment>

    );
}

export default Home;