import React from 'react';
import Brands from '../common/Brands';
import AboutBanner from './AboutBanner';
import AboutServices from './AboutServices';





const About = () => {
    return (

        <React.Fragment>

            <AboutBanner />
            <AboutServices />
            <Brands />

        </React.Fragment>

    );
}

export default About;