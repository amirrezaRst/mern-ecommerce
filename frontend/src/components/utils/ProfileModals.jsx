import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import config from "../../services/config.json";
import ContextApi from '../../services/ContextApi';


export const FullNameModal = () => {

    const [fullName, setFullName] = useState();
    const [fullNameClass, setFullNameClass] = useState("form-control");

    const fullNameRef = useRef();
    const context = useContext(ContextApi);

    const editApi = async () => {
        if (fullName == undefined || fullName == "") {
            fullNameRef.current.focus();
            return setFullNameClass("form-control mb-3 form-invalid")
        }
        else if (fullName.length < 3) {
            fullNameRef.current.focus();
            toast.error(`Name must be more than 3 characters!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            return setFullNameClass("form-control mb-3 form-invalid")
        }
        else if (fullName.length > 40) {
            fullNameRef.current.focus();
            toast.error(`The name must be less than 40 characters!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            return setFullNameClass("form-control mb-3 form-invalid")
        }
        else {
            setFullNameClass("form-control")
        }

        const body = { fullName };

        await axios.put(`${config.domain}/api/user/editFullName/${context.userData._id}`, body, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            setFullName(undefined);
            toast.success(`Information has changed`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            context.setUserData(res.data.user);
        }).catch(err => {
            if (err.message == "Request failed with status code 401") {
                toast.error(`You are not allowed to change the information!`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
                return console.log(err);
            }
            toast.error(`Something went wrong!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    }

    return (
        <div class="modal fade" id="full-name-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1">

                        <div className="d-flex justify-content-between">
                            <div className="mb-4">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Edit Full name</h5>
                                <div style={{ background: "#169632", width: "75%", height: "2px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>

                        <label htmlFor="fullName" className='font-weight-normal text-black-50 mb-1'>Full name</label>
                        <input type="text" ref={fullNameRef} id='fullName' className={fullNameClass} placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />

                        <div className="mt-4 pt-1">
                            <span className='d-inline mr-3 font-weight-bold' style={{ color: "#169632", cursor: "pointer" }} onClick={editApi}>Save</span>
                            <span className='d-inline font-weight-normal text-black-50' style={{ cursor: "pointer" }} data-dismiss="modal">Close</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export const PhoneModal = () => {

    const [phone, setPhone] = useState();
    const [phoneClass, setPhoneClass] = useState("form-control");

    const phoneRef = useRef();
    const context = useContext(ContextApi);

    const editApi = async () => {
        if (phone == undefined || phone == "") {
            phoneRef.current.focus();
            return setPhoneClass("form-control mb-3 form-invalid")
        }
        if (phone.length > 11) {
            phoneRef.current.focus();
            toast.error(`Mobile number should not be more than 11 numbers!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            return setPhoneClass("form-control mb-3 form-invalid")
        }
        if (phone.length < 11) {
            phoneRef.current.focus();
            toast.error(`Mobile number should not be less than 11 numbers!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            return setPhoneClass("form-control mb-3 form-invalid")
        }
        else {
            setPhoneClass("form-control")
        }

        const body = { phone };

        await axios.put(`${config.domain}/api/user/editPhone/${context.userData._id}`, body, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            setPhone(undefined);
            toast.success(`Information has changed`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            context.setUserData(res.data.user);
        }).catch(err => {
            if (err.message == "Request failed with status code 401") {
                toast.error(`You are not allowed to change the information!`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
                return console.log(err);
            }
            toast.error(`Something went wrong!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    }

    return (
        <div class="modal fade" id="phone-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1">

                        <div className="d-flex justify-content-between">
                            <div className="mb-4">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Edit Phone</h5>
                                <div style={{ background: "#169632", width: "75%", height: "2px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>

                        <label htmlFor="phone" className='font-weight-normal text-black-50 mb-1'>Phone number</label>
                        <input type="text" ref={phoneRef} id='phone' className={phoneClass} placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />

                        <div className="mt-4 pt-1">
                            <span className='d-inline mr-3 font-weight-bold' style={{ color: "#169632", cursor: "pointer" }} onClick={editApi}>Save</span>
                            <span className='d-inline font-weight-normal text-black-50' style={{ cursor: "pointer" }} data-dismiss="modal">Close</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export const EmailModal = () => {

    const [email, setEmail] = useState();
    const [emailClass, setEmailClass] = useState("form-control");

    const emailRef = useRef();
    const context = useContext(ContextApi);

    const editApi = async () => {
        if (email == undefined || email == "") {
            emailRef.current.focus();
            return setEmailClass("form-control mb-3 form-invalid")
        }
        else {
            setEmailClass("form-control")
        }

        const body = { email };

        await axios.put(`${config.domain}/api/user/editEmail/${context.userData._id}`, body, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            setEmail(undefined);
            toast.success(`Information has changed`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            context.setUserData(res.data.user);
        }).catch(err => {
            if (err.message == "Request failed with status code 401") {
                toast.error(`You are not allowed to change the information!`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
                return console.log(err);
            }
            toast.error(`Something went wrong!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    }

    return (
        <div class="modal fade" id="email-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1">

                        <div className="d-flex justify-content-between">
                            <div className="mb-4">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Edit Email</h5>
                                <div style={{ background: "#169632", width: "75%", height: "2px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>

                        <label htmlFor="email" className='font-weight-normal text-black-50 mb-1'>New Email</label>
                        <input type="email" ref={emailRef} id='email' className={emailClass} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                        <div className="mt-4 pt-1">
                            <span className='d-inline mr-3 font-weight-bold' style={{ color: "#169632", cursor: "pointer" }} onClick={editApi}>Save</span>
                            <span className='d-inline font-weight-normal text-black-50' style={{ cursor: "pointer" }} data-dismiss="modal">Close</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export const PasswordModal = () => {
    return (
        <div class="modal fade" id="password-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1">

                        <div className="d-flex justify-content-between">
                            <div className="mb-4">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Edit Password</h5>
                                <div style={{ background: "#169632", width: "75%", height: "2px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>

                        <label htmlFor="password" className='font-weight-normal text-black-50 mb-1'>New Password</label>
                        <input type="email" id='password' className="form-control" placeholder="Password" />

                        <div className="mt-4 pt-1">
                            <span className='d-inline mr-3 font-weight-bold' style={{ color: "#169632", cursor: "pointer" }}>Save</span>
                            <span className='d-inline font-weight-normal text-black-50' style={{ cursor: "pointer" }} data-dismiss="modal">Close</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export const WalletModal = () => {
    return (
        <div class="modal fade" id="wallet-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1">

                        <div className="d-flex justify-content-between">
                            <div className="mb-4">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Edit Wallet</h5>
                                <div style={{ background: "#169632", width: "75%", height: "2px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>

                        <h5 className='py-3 text-center font-weight-normal'>This part is still not available</h5>

                    </div>
                </div>
            </div>
        </div>
    )
}