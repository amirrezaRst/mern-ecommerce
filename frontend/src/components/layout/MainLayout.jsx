import React from 'react';
import Footer from '../common/Footer';
import MainNav from '../common/MainNav';
import SearchNav from '../common/SearchNav';
import TopNav from '../common/TopNav';


const MainLayout = ({ children, userStatus, userData }) => {
    return (
        <React.Fragment>

            {/* <TopNav /> */}
            <MainNav userStatus={userStatus} userData={userData} />
            <SearchNav />

            {children}

            <Footer />

        </React.Fragment>
    );
}

export default MainLayout;