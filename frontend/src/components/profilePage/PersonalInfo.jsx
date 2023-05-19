import React, { useState } from 'react';

import { EmailModal, FullNameModal, PasswordModal, PhoneModal, WalletModal } from "../utils/ProfileModals";
import config from "../../services/config.json";
import axios from 'axios';

const PersonalInfo = ({ userData }) => {

    const [profileData, setProfileData] = useState();

    const profileEditApi = async () => {
        console.log(profileData);
    }

    return (
        <React.Fragment>

            <div className="card shadow-sm">
                <div className="card-body">


                    <div className="position-relative">
                        <img src={userData ? `${config.domain}/${userData.profile}` : null} className="img-fluid rounded-circle" id='info-profile' alt="" />
                        <div className="mt-3">
                            {/* <input type="file" id="actual-btn" hidden onChange={e => setAvatarData(e.target.files[0])} /> */}
                            <input type="file" id="actual-btn" hidden onChange={e => setProfileData(e.target.files[0])} />
                            {/* <label for="actual-btn" className='w-100' id='register-avatar'>{avatarData ? avatarData.name : "Choose File"}</label> */}
                            <label for="actual-btn" className='btn' id='change-profile'>{profileData ? profileData.name : "Edit Profile"}</label>
                            <label for="actual-btn" className='btn ml-2' id='save-profile'><i class="fa-regular fa-user-check"></i></label>
                            {/* <span style={{ fontSize: "1rem" }}>Please select a profile picture</span> */}
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>


                    <div className="">
                        <span className='d-block font-weight-bold' style={{ fontSize: "1.08rem" }}>Full Name</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2 text-capitalize' style={{ color: "#4f4f4f", fontSize: "1.07rem" }}>{userData ? userData.fullName : null}</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }} data-toggle="modal" data-target="#full-name-modal"></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>
                    <FullNameModal />


                    <div className="">
                        <span className='d-block font-weight-bold' style={{ fontSize: "1.08rem" }}>Phone</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f", fontSize: "1.07rem" }}>{userData ? userData.phone : null}</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }} data-toggle="modal" data-target="#phone-modal"></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>
                    <PhoneModal />


                    <div className="">
                        <span className='d-block font-weight-bold' style={{ fontSize: "1.08rem" }}>Email</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f", fontSize: "1.07rem" }}>{userData ? userData.email : null}</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }} data-toggle="modal" data-target="#email-modal"></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>
                    <EmailModal />


                    <div className="">
                        <span className='d-block font-weight-bold' style={{ fontSize: "1.08rem" }}>Password</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f", fontSize: "1.07rem" }}>******</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }} data-toggle="modal" data-target="#password-modal"></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>
                    <PasswordModal />


                    <div className="mb-2">
                        <span className='d-block font-weight-bold' style={{ fontSize: "1.08rem" }}>Wallet</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f", fontSize: "1.07rem" }}> IR820190000000339251827008</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }} data-toggle="modal" data-target="#wallet-modal"></i>
                        </div>
                    </div>
                    <WalletModal />

                </div>
            </div>

        </React.Fragment>
    );
}

export default PersonalInfo;