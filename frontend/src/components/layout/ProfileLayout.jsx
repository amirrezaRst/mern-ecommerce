import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import config from "../../services/config.json";
import Footer from '../common/Footer';
import MainNav from '../common/MainNav';
import ProfileNav from '../common/ProfileNav';
import SearchNav from '../common/SearchNav';
import ProfileSidebar from '../profilePage/ProfileSidebar';


const ProfileLayout = ({ children, userData, userStatus }) => {

    return (
        <Fragment>

            <MainNav userStatus={userStatus} userData={userData} />
            <SearchNav />

            <div className="container my-5 pb-4">
                <div className="row">

                    <aside className='col-lg-4'>
                        <div className="card shadow-sm">
                            <div className="card-body px-3">

                                <ProfileSidebar userData={userData} />

                            </div>

                            <ProfileNav />

                        </div>
                    </aside>
                    <main className='col-lg-8'>
                        {children}
                    </main>

                </div>
            </div>

            <Footer />


        </Fragment>
    );
}

export default ProfileLayout;