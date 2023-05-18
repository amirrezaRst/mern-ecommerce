import React, { useState } from 'react';

import { EmailModal, FullNameModal, PasswordModal, PhoneModal, WalletModal } from "../utils/ProfileModals";

const PersonalInfo = ({ userData }) => {


    return (
        <React.Fragment>

            <div className="card shadow-sm">
                <div className="card-body">

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