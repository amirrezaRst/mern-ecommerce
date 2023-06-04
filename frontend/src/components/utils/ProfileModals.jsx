import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import config from "../../services/config.json";
import ContextApi from '../../services/ContextApi';
import { CheckboxSvg } from './ProfileSvg';


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
                            <div className="dropdown-divider"></div>
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
                            <div className="dropdown-divider"></div>
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
                            <div className="dropdown-divider"></div>
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
                            <div className="dropdown-divider"></div>
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



export const NewAddressModal = () => {

    //! Data States
    const [locationData, setLocationData] = useState();
    const [cityData, setCityData] = useState();
    const [plaqueData, setPlaqueData] = useState();
    const [unitData, setUnitData] = useState();
    const [postalData, setPostalData] = useState();
    const [recipientName, setRecipientName] = useState();
    const [recipientPhone, setRecipientPhone] = useState();
    const [recipientEmail, setRecipientEmail] = useState();
    const [isRecipient, setIsRecipient] = useState(false);

    //! Data Ref
    const locationRef = useRef();
    const cityRef = useRef();
    const plaqueRef = useRef();
    const unitRef = useRef();
    const postalRef = useRef();
    const recipientNameRef = useRef();
    const recipientPhoneRef = useRef();
    const recipientEmailRef = useRef();

    //! Class States
    const [locationClass, setLocationClass] = useState("form-control");
    const [cityClass, setCityClass] = useState("form-control");
    const [plaqueClass, setPlaqueClass] = useState("form-control");
    const [unitClass, setUnitClass] = useState("form-control");
    const [postalClass, setPostalClass] = useState("form-control");
    const [nameClass, setNameClass] = useState("form-control");
    const [phoneClass, setPhoneClass] = useState("form-control");
    const [emailClass, setEmailClass] = useState("form-control");

    const context = useContext(ContextApi);

    const changeForm = () => {
        if (isRecipient === true) {
            return setIsRecipient(false)
        }
        else {
            setIsRecipient(true);
            setRecipientName("");
            setRecipientPhone("");
            setRecipientEmail("");
        }
    }


    const addAddressApi = async () => {
        if (locationData == undefined || locationData == "") {
            locationRef.current.focus();
            return setLocationClass("form-control form-invalid")
        }
        else if (cityData == undefined || cityData == "") {
            cityRef.current.focus();
            setLocationClass("form-control")
            return setCityClass("form-control form-invalid");
        }
        else if (plaqueData == undefined || plaqueData == "") {
            plaqueRef.current.focus();
            setCityClass("form-control");
            return setPlaqueClass("form-control form-invalid");
        }
        else if (unitData == undefined || unitData == "") {
            unitRef.current.focus();
            setPlaqueClass("form-control");
            return setUnitClass("form-control form-invalid");
        }
        else if (postalData == undefined || postalData == "") {
            postalRef.current.focus();
            setUnitClass("form-control");
            return setPostalClass("form-control form-invalid");
        }
        else if (!isRecipient && recipientName == undefined) {
            recipientNameRef.current.focus();
            setPostalClass("form-control");
            return setNameClass("form-control form-invalid");
        }
        else if (!isRecipient && recipientPhone == undefined) {
            recipientPhoneRef.current.focus();
            setNameClass("form-control");
            return setPhoneClass("form-control form-invalid");
        }
        else if (!isRecipient && recipientEmail == undefined) {
            recipientEmailRef.current.focus();
            setPhoneClass("form-control");
            return setEmailClass("form-control form-invalid");
        }
        else {
            setEmailClass("form-control");
        }

        if (isRecipient) {
            setRecipientName(context.userData.fullName);
            setRecipientPhone(context.userData.phone)
            setRecipientEmail(context.userData.email)
        }


        const body = {
            location: locationData,
            city: cityData,
            postalCode: postalData,
            unit: unitData,
            plaque: plaqueData,
            transferee: recipientName,
            transfereePhone: recipientPhone,
            transfereeEmail: recipientEmail
        };

        await axios.post(`${config.domain}/api/user/addAddress/${context.userData._id}`, body, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            toast.success(`Address added!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            context.setUserData(res.data.user);
        }).catch(err => {
            if (err.message == "Request failed with status code 401") {
                toast.error(`You do not have the required permission.`, {
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
        <div class="modal fade" id="new-address-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1">

                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Address information</h5>
                                <div style={{ background: "#169632", width: "75%", height: "1.5px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>

                        <div className="dropdown-divider mt-3 mb-4"></div>

                        <div className="">
                            <label htmlFor="address" className='font-weight-normal text-black-50 mb-1'>Postal address</label>
                            <input type="text" ref={locationRef} id='address' className={locationClass} placeholder="Address" value={locationData} onChange={e => setLocationData(e.target.value)} />
                            <div className="dropdown-divider mt-4"></div>

                            <label htmlFor="city" className='font-weight-normal text-black-50 mb-1'>City</label>
                            <input type="text" ref={cityRef} id='city' className={cityClass} value={cityData} onChange={e => setCityData(e.target.value)} />

                            <div class="row my-3">
                                <div class="col">
                                    <input type="text" ref={plaqueRef} class={plaqueClass} value={plaqueData} onChange={e => setPlaqueData(e.target.value)} placeholder="Plaque" />
                                </div>
                                <div class="col">
                                    <input type="text" ref={unitRef} class={unitClass} value={unitData} placeholder="Unit" onChange={e => setUnitData(e.target.value)} />
                                </div>
                            </div>
                            <input type="text" ref={postalRef} id='postal' className={postalClass} placeholder="Postal Code" value={postalData} onChange={e => setPostalData(e.target.value)} />

                            <div className="dropdown-divider my-4"></div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value={isRecipient} id="recipient" onChange={changeForm} />
                                <label class="form-check-label" for="recipient">
                                    <span style={{ fontSize: "1rem" }}>I am the recipient of my order</span>
                                </label>
                            </div>

                            <label htmlFor="recipient-name" className={`font-weight-normal text-black-50 mb-1 mt-4 ${isRecipient ? "text-muted" : null}`}>
                                <span style={{ fontSize: "1.06rem" }}>Recipient full name</span>
                            </label>
                            <input type="text" ref={recipientNameRef} readOnly={isRecipient == true ? true : false} id='recipient-name' className={nameClass} placeholder="Full Name" value={isRecipient == true ? context.userData.fullName : recipientName} onChange={e => setRecipientName(e.target.value)} />

                            <label htmlFor="recipient-phone" className={`font-weight-normal text-black-50 mb-1 mt-4 ${isRecipient ? "text-muted" : null}`}>
                                <span style={{ fontSize: "1.06rem" }}>Recipient phone</span>
                            </label>
                            <input type="text" ref={recipientPhoneRef} readOnly={isRecipient == true ? true : false} id='recipient-phone' className={phoneClass} placeholder="Phone Number" value={isRecipient == true ? context.userData.phone : recipientPhone} onChange={e => setRecipientPhone(e.target.value)} />

                            <label htmlFor="recipient-email" className={`font-weight-normal text-black-50 mb-1 mt-4 ${isRecipient ? "text-muted" : null}`}>
                                <span style={{ fontSize: "1.06rem" }}>Recipient email</span>
                            </label>
                            <input type="email" ref={recipientEmailRef} readOnly={isRecipient == true ? true : false} id='recipient-email' className={emailClass} placeholder="Email" value={isRecipient == true ? context.userData.email : recipientEmail} onChange={e => setRecipientEmail(e.target.value)} />

                        </div>

                        <div className="dropdown-divider mt-4"></div>
                        <div className="pt-2">
                            <span className='d-inline mr-3 font-weight-bold' style={{ color: "#169632", cursor: "pointer" }} onClick={addAddressApi}>Add</span>
                            <span className='d-inline font-weight-normal text-black-50' style={{ cursor: "pointer" }} data-dismiss="modal">Close</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


const AddressItem = ({ addressIndex, changeAddress, index, location, postalCode, phone, transferee, plaque }) => {

    const handleChange = () => {
        changeAddress(index);
    }

    return (
        <div className="card shadow-sm mb-3" onClick={handleChange} style={addressIndex == index ? { borderRadius: "14px", border: "2px solid #169632", cursor: "pointer" } : { borderRadius: "14px", cursor: "pointer" }}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <span className="d-block text-capitalize mb-1" style={{ fontWeight: "normal", fontSize: "1rem" }}>{location}</span>
                    {addressIndex == index ? <CheckboxSvg /> : null}
                </div>
                <span className="d-block" style={{ color: "#707070" }}>
                    <i class="far fa-envelope mr-1" style={{ fontSize: "1.1rem" }}></i> <span style={{ fontWeight: "normal", fontSize: "1rem" }}>{postalCode}</span></span>
                <span className="d-block" style={{ color: "#707070" }}>
                    <i class="far fa-mobile-notch mr-2"></i> <span style={{ fontWeight: "normal", fontSize: "1rem" }}>{phone}</span>
                </span>
                <span className="d-block text-capitalize" style={{ color: "#707070" }}>
                    <i class="far fa-user mr-2"></i> <span style={{ fontWeight: "normal", fontSize: "1rem" }}>{transferee}</span>
                </span>
                <span className="d-block" style={{ color: "#707070" }}>
                    <i class="fa-regular fa-house mr-1"></i> <span style={{ fontWeight: "normal", fontSize: "1rem" }}>{plaque}</span>
                </span>
            </div>
        </div>
    )
}

export const ChangeAddressModal = ({ userData, addressIndex, changeAddress }) => {

    return (
        <div class="modal fade" id="change-address-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body my-1 pb-4">

                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h5 className='font-weight-normal mb-1' style={{ fontSize: "1.2rem" }}>Address</h5>
                                <div style={{ background: "#169632", width: "75%", height: "2px" }}></div>
                            </div>
                            <span aria-hidden="true" className='close' data-dismiss="modal">&times;</span>
                        </div>
                        <div className="dropdown-divider mt-3 mb-4"></div>


                        <div className="card shadow-sm" style={{ borderRadius: "14px" }}>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between" style={{ cursor: "pointer" }} data-dismiss="modal" data-toggle="modal" data-target="#new-address-modal">
                                    <div>
                                        <i class="fa-regular fa-location-plus" style={{ fontSize: "1.4rem" }}></i> <span style={{ fontWeight: "normal", fontSize: "1.1rem" }}>Add a new address</span>
                                    </div>
                                    <i class="fa-solid fa-angle-right float-right mr-2" style={{ fontSize: '1.3rem' }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-divider mt-4 mb-4"></div>

                        {userData && userData.address.length > 0 ?
                            userData.address.map((item, index) => <AddressItem addressIndex={addressIndex} changeAddress={changeAddress} index={index} location={item.location} postalCode={item.postalCode} phone={item.transfereePhone} transferee={item.transferee} plaque={item.plaque} />) : null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}