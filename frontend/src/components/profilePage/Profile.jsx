import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import config from "../../services/config.json";
import ContextApi from '../../services/ContextApi';

const Profile = ({ userData }) => {

    const context = useContext(ContextApi);
    const navigation = useNavigate();

    const result = () => {
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("userId"));
    }

    const logout = () => {
        Swal.fire({
            icon: "error",
            html: '<span style="font-size:1.4rem;font-weight:normal">Are you sure you want to log out?</sp>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#db3030",
            confirmButtonText: "Logout!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                context.setUserData(undefined);
                context.setUserLogin(false);
                navigation("/");
                Swal.fire({
                    icon: "success",
                    html: '<span style="font-size:1.4rem;font-weight:normal">You have logout successfully</span>',
                    confirmButtonColor: "#59AB6E",
                    confirmButtonText: "Ok"
                })
            }
        })
    }

    return (
        <React.Fragment>

            <div className="container my-5 pb-4">
                <div className="row">

                    <aside className='col-lg-4'>
                        <div className="card shadow-sm">
                            <div className="card-body px-3">

                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <img src={`${config.domain}/${userData ? userData.profile : null}`} alt="" className='img-fluid rounded-circle' style={{ width: "17%" }} /> */}
                                    <div className="d-flex flex-column">
                                        {/* <span className='font-weight-bold text-capitalize'>{userData.fullName ? userData.fullName : null}</span>
                                        <span className='font-weight-normal text-black-50'>{userData.phone ? userData.phone : null}</span> */}
                                    </div>
                                    <Link to="/profile/info"><i class="fa-solid fa-user-pen" style={{ color: "#169632" }}></i></Link>
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

                                <button className="btn btn-primary" onClick={result}>Result</button>
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
                                    <div style={{ cursor: "pointer", color: "#ef0000" }} onClick={logout}>
                                        <i class="fa-solid fa-right-from-bracket pl-3 mx-2" style={{ fontSize: "1.3rem" }}></i>
                                        <span className='font-weight-normal' style={{ fontSize: "1.3rem" }}>Logout</span>
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
            </div >
        </React.Fragment >
    );
}

export default Profile;