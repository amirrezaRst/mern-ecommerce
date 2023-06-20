import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

import ContextApi from '../../services/ContextApi';


const ProfileNav = ({ userData }) => {
    const [comments, setComments] = useState();
    const [unSeen, setUnSeen] = useState();

    const context = useContext(ContextApi);
    const navigation = useNavigate();
    const path = useLocation().pathname;

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

    useEffect(() => {
        if (userData.order) {
            const deliverItems = userData.order.filter(item => {
                return item.status == "delivered";
            });
            const allProducts = deliverItems.map(item => {
                return item.products
            });

            const waiting = allProducts.filter(item => {
                return item[0].isViewPoint == false;
            });
            const waitingItems = waiting.map(item => {
                for (let i = 0; i < item.length; i++) {
                    return item[i];
                }
            });
            setComments(waitingItems);
        }
        if (userData.message) {
            const items = userData.message.filter(item => {
                return item.isRead == false
            });
            setUnSeen(items);
        }
    }, [userData]);

    const result = () => {
        console.log(unSeen);
    }

    return (
        <div className='pb-3' >
            {/* <div className="d-flex align-items-center justify-content-between">
                <Link to="/dashboard" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={{ borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class="fas fa-user-shield mx-2"></i>
                    <span className='font-weight-normal'>Admin Panel</span>
                </Link>
            </div>
            <div className="dropdown-divider mx-2 my-3"></div> */}
            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`fa${path == "/profile" ? "s" : "r"} fa-house mx-2`}></i>
                    <span className='font-weight-normal'>Activities</span>
                </Link>
            </div>
            <div className="dropdown-divider mx-2 my-3"></div>
            {/* End Single Menu Item */}

            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile/favorite" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile/favorite" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`${path == "/profile/favorite" ? "fas" : "far"} fa-fw fa-heart mx-2`}></i>
                    <span className='font-weight-normal'>Favorite List</span>
                </Link>
            </div >
            <div className="dropdown-divider mx-2 my-3"></div>
            {/* End Single Menu Item */}

            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile/orders" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile/orders" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`${path == "/profile/orders" ? "fas" : "far"} fa-bag-shopping mx-2`}></i>
                    <span className='font-weight-normal'>Orders</span>
                </Link>
            </div>
            <div className="dropdown-divider mx-2 my-3"></div>
            {/* End Single Menu Item */}

            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile/comments" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile/comments" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`${path == "/profile/comments" ? "fas" : "far"} fa-comment mx-2`}></i>
                    <span className='font-weight-normal'>Comments</span>
                </Link>
                {comments && comments.length > 0 ?
                    <div className="badge badge-success badge-pill mr-3 py-1 px-2" >
                        <span style={{ fontSize: "1rem" }}>{comments.length}</span>
                    </div>
                    : null
                }
            </div>
            <div className="dropdown-divider mx-2 my-3"></div>
            {/* End Single Menu Item */}

            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile/info" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile/info" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`${path == "/profile/info" ? "fas" : "far"} fa-fw fa-user mx-2`}></i>
                    <span className='font-weight-normal'>Personal Info</span>
                </Link>
            </div>
            <div className="dropdown-divider mx-2 my-3"></div>
            {/* End Single Menu Item */}

            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile/address" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile/address" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`${path == "/profile/address" ? "fas" : "far"} fa-location-dot mx-2`}></i>
                    <span className='font-weight-normal'>Address</span>
                </Link>
            </div>
            <div className="dropdown-divider mx-2 my-3"></div>
            {/* End Single Menu Item */}

            {/* Start Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/profile/messages" style={{ color: "#000000", textDecoration: "none" }}>
                    <div className="bg-success d-inline py-2 mr-2" style={path == "/profile/messages" ? { borderRadius: "0 20px 20px 0" } : { borderRadius: "0 20px 20px 0", visibility: "hidden" }}><span style={{ visibility: "hidden" }}>.</span></div>
                    <i class={`${path == "/profile/messages" ? "fas" : "far"} fa-messages mx-2`}></i>
                    <span className='font-weight-normal'>Messages</span>
                </Link>
                {unSeen && unSeen.length > 0 ?
                    <div className="badge badge-success badge-pill mr-3 py-1 px-2" ><span style={{ fontSize: "1rem" }}>{unSeen.length}</span></div> : null
                }

            </div>
            {/* End Single Menu Item */}
            <div className="d-flex align-items-center justify-content-between mt-5 pt-3">
                <div style={{ cursor: "pointer", color: "#ef0000" }} onClick={logout}>
                    <i class="fa-solid fa-right-from-bracket pl-3 mx-2" style={{ fontSize: "1.3rem" }}></i>
                    <span className='font-weight-normal' style={{ fontSize: "1.3rem" }}>Logout</span>
                </div>
            </div>

        </div >
    );
}

export default ProfileNav;