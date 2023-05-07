import React from 'react';
import Footer from '../common/Footer';
import MainNav from '../common/MainNav';
import SearchNav from '../common/SearchNav';
import TopNav from '../common/TopNav';


const MainLayout = ({ children ,userStatus}) => {
    return (
        <React.Fragment>

            {/* <TopNav /> */}
            <MainNav userStatus={userStatus} />
            <SearchNav />

            {children}

            <Footer />

        </React.Fragment>
    );
}

export default MainLayout;