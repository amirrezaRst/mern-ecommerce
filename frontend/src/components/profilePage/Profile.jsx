import React from 'react';

import { Link } from "react-router-dom";

import profile from "./profile.jpg";

const Profile = () => {
    return (
        <React.Fragment>

            <div className="container my-5 pb-4">
                <div className="row">

                    <aside className='col-lg-4'>
                        <div className="card shadow-sm">
                            <div className="card-body px-3">

                                <div className="d-flex align-items-center justify-content-between">
                                    <img src={profile} alt="" className='img-fluid rounded-circle' style={{ width: "17%" }} />
                                    <div className="d-flex flex-column">
                                        <span className='font-weight-bold'>Amirreza Rostami</span>
                                        <span className='font-weight-normal text-black-50'>09903738378</span>
                                    </div>
                                    <i class="fa-solid fa-user-pen" style={{ color: "#169632" }}></i>
                                    {/* <i class="fa-solid fa-pen-line"></i> */}
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div className="d-flex flex-column">
                                        <span className='font-weight-normal' style={{ fontSize: "1.1rem" }}>Wallet</span>
                                        <span className='font-weight-normal' style={{ fontSize: "1.1rem", color: "#169632" }}>Increase credit <i class="fa-solid fa-chevron-right ml-1"></i></span>
                                    </div>
                                    <span className='font-weight-bold'>$0</span>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div className="d-flex flex-column">
                                        <span className='font-weight-normal' style={{ fontSize: "1.1rem" }}>Zay Club</span>
                                        {/* <span className='font-weight-normal' style={{fontSize:"1.1rem",color:"#169632"}}>Increase credit <i class="fa-solid fa-chevron-right ml-1"></i></span> */}
                                    </div>
                                    <span className='font-weight-bold' style={{ fontSize: "1rem" }}>Score 14</span>
                                </div>

                                <div className="dropdown-divider mt-4 mb-3"></div>

                            </div>
                            <div className='pb-3' >

                                {/* Start Single Menu Item */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/profile/favorite" style={{ color: "#000000", textDecoration: "none" }}>
                                        <div className="bg-success d-inline py-2 mr-2" style={{ borderRadius: "0 20px 20px 0" }}><span style={{ visibility: "hidden" }}>.</span></div>
                                        <i class="fas fa-fw fa-heart mx-2"></i>
                                        <span className='font-weight-normal'>Favorite List</span>
                                    </Link>
                                </div>
                                <div className="dropdown-divider mx-2 my-3"></div>
                                {/* End Single Menu Item */}

                                {/* Start Single Menu Item */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/profile/orders" style={{ color: "#000000", textDecoration: "none" }}>
                                        <div className="bg-success d-inline py-2 mr-2" style={{ borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                                        <i class="far fa-bag-shopping mx-2"></i>
                                        <span className='font-weight-normal'>Orders</span>
                                    </Link>
                                </div>
                                <div className="dropdown-divider mx-2 my-3"></div>
                                {/* End Single Menu Item */}

                                {/* Start Single Menu Item */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/profile/comments" style={{ color: "#000000", textDecoration: "none" }}>
                                        <div className="bg-success d-inline py-2 mr-2" style={{ borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                                        <i class="far fa-comment mx-2"></i>
                                        <span className='font-weight-normal'>Comments</span>
                                    </Link>
                                </div>
                                <div className="dropdown-divider mx-2 my-3"></div>
                                {/* End Single Menu Item */}

                                {/* Start Single Menu Item */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/profile/info" style={{ color: "#000000", textDecoration: "none" }}>
                                        <div className="bg-success d-inline py-2 mr-2" style={{ borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                                        <i class="far fa-fw fa-user mx-2"></i>
                                        <span className='font-weight-normal'>Personal Info</span>
                                    </Link>
                                </div>
                                <div className="dropdown-divider mx-2 my-3"></div>
                                {/* End Single Menu Item */}

                                {/* Start Single Menu Item */}
                                <div className="d-flex align-items-center justify-content-between">
                                    <Link to="/profile/messages" style={{ color: "#000000", textDecoration: "none" }}>
                                        <div className="bg-success d-inline py-2 mr-2" style={{ borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                                        <i class="far fa-messages mx-2"></i>
                                        <span className='font-weight-normal'>Messages</span>
                                    </Link>
                                </div>
                                {/* End Single Menu Item */}
                                <div className="d-flex align-items-center justify-content-between mt-5 pt-3">
                                    <div style={{ cursor: "pointer", color: "#ef0000" }}>
                                        <i class="fa-solid fa-right-from-bracket pl-3 mx-2" style={{fontSize:"1.3rem"}}></i>
                                        <span className='font-weight-normal' style={{fontSize:"1.3rem"}}>Logout</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </aside>
                    <main className='col-lg-8'>
                        <div className="card shadow-sm" >
                            <div className="card-body">
                                main
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;