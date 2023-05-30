import React from 'react';
import { Link } from 'react-router-dom';

import config from "../../services/config.json";


const ProfileSidebar = ({ userData }) => {
    return (
        <React.Fragment>

            <div className="d-flex align-items-center justify-content-between">
                <img src={`${config.domain}/${userData ? userData.profile : null}`} alt="" className='img-fluid rounded-circle' style={{ width: "17%" }} />
                <div className="d-flex flex-column">
                    <span className='font-weight-bold text-capitalize'>{userData ? userData.fullName : null}</span>
                    <span className='font-weight-normal text-black-50'>{userData ? userData.phone : null}</span>
                </div>
                <Link to="/profile/info"><i class="far fa-user-pen" style={{ color: "#169632" }}></i></Link>
                {/* <i class="fa-solid fa-pen-line"></i> */}
            </div>
            <div className="d-flex justify-content-between mt-4">
                <div className="d-flex flex-column">
                    <span className='font-weight-normal' style={{ fontSize: "1.1rem" }}>Wallet</span>
                    <span className='font-weight-normal' style={{ fontSize: "1.1rem", color: "#169632", cursor: "pointer" }}>Increase credit <i class="fa-solid fa-chevron-right ml-1"></i></span>
                </div>
                <span className='font-weight-bold'>${userData && userData.wallet ? userData.wallet : null}</span>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <div className="d-flex flex-column">
                    <span className='font-weight-normal' style={{ fontSize: "1.1rem" }}>Zay Club</span>
                    <span className='font-weight-normal' style={{ fontSize: "1.1rem", color: "#169632" }}>Increase credit <i class="fa-solid fa-chevron-right ml-1"></i></span>
                </div>
                <span className='font-weight-normal' style={{ fontSize: "1rem" }}>Score <span className='font-weight-bold'>{userData && userData.zayScore ? userData.zayScore : null}</span></span>
            </div>

            <div className="dropdown-divider mt-4 mb-3"></div>

        </React.Fragment>
    );
}

export default ProfileSidebar;