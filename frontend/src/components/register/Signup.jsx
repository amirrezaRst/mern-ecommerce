import React, { useRef, useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import config from "../../services/config.json";


const Signup = () => {

    //! Data States
    const [nameData, setNameData] = useState();
    const [emailData, setEmailData] = useState();
    const [passwordData, setPasswordData] = useState();
    const [confirmData, setConfirmData] = useState();
    const [avatarData, setAvatarData] = useState();

    //! Data Ref
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();

    //! Data Style
    const [nameClass, setNameClass] = useState(`form-control mb-3`);
    const [emailClass, setEmailClass] = useState(`form-control mb-3`);
    const [passwordClass, setPasswordClass] = useState(`form-control mb-3`);
    const [confirmClass, setConfirmClass] = useState(`form-control`);
    const [validClass, setValidClass] = useState("d-none")
    const [avatarClass, setAvatarClass] = useState("d-none");

    const navigation = useNavigate();


    const registerApi = async () => {

        if (nameData == undefined || nameData == "") {
            nameRef.current.focus();
            return setNameClass("form-control mb-3 form-invalid")
        }
        else if (emailData == undefined || emailData == "") {
            emailRef.current.focus();
            setNameClass("form-control mb-3 form-valid")
            return setEmailClass("form-control mb-3 form-invalid")
        }
        else if (passwordData == undefined || passwordData == "") {
            passwordRef.current.focus();
            setEmailClass("form-control mb-3 form-valid")
            return setPasswordClass("form-control mb-3 form-invalid")
        }
        else if (confirmData == undefined || confirmData == "") {
            confirmRef.current.focus();
            setPasswordClass("form-control mb-3 form-valid")
            return setConfirmClass("form-control form-invalid")
        }
        else if (passwordData != confirmData) {
            setConfirmClass("form-control mb-3 form-valid")
            setAvatarClass("d-none");
            return setValidClass("text-danger");
        }
        else {
            setConfirmClass("form-control mb-3 form-valid")
            setValidClass("d-none");
        }

        const formData = new FormData()
        formData.append("fullName", nameData);
        formData.append("email", emailData);
        formData.append("password", passwordData);
        if (avatarData) {
            formData.append("profile", avatarData);
        }

        await axios.post(`${config.domain}/api/user/register`, formData).then(res => {

            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Registered',
                html: '<p className="text-danger">You have successfully registered</p>',
                confirmButtonColor: "#59AB6E",
                confirmButtonText: "Ok"
            })
            navigation("/login", {
                state: {
                    email: emailData,
                    password: passwordData
                }
            });
        }).catch(err => {
            if (err.message == "Request failed with status code 433") {
                // Swal.fire({
                //     icon: 'warning',
                //     title: 'Warning',
                //     html: '<p className="text-danger">A user has already registered with this email</p>',
                //     confirmButtonColor: "#ff9e4f",
                //     confirmButtonText: "Ok"
                // })
                toast.warning(`A user has already registered with this email`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
                setEmailClass("form-control mb-3 form-invalid")
                return emailRef.current.focus();
            }

            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                confirmButtonColor: "#F27474",
                confirmButtonText: "Ok"
            })
            console.log(err);

        })
    }

    return (
        <React.Fragment>

            <main className='container mb-5 mt-2'>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5 d-flex justify-content-center align-items-center">
                            <img src="/./assets/img/register-vector7.avif" className='' alt="zay shop" />
                        </div>

                        <div className="col-lg-7">
                            <span className='mb-5' style={{ fontSize: "2.5rem", fontWeight: "400" }}>Sign Up</span>

                            <form className='mt-4' onSubmit={registerApi}>

                                <label htmlFor="name-filed">Full Name</label>
                                <input type="text" ref={nameRef} placeholder='Full Name' id='name-filed' className={nameClass} value={nameData} onChange={e => setNameData(e.target.value)} />

                                <label htmlFor="email-filed">Email</label>
                                <input type="email" ref={emailRef} placeholder='Email' id='email-filed' className={emailClass} value={emailData} onChange={e => setEmailData(e.target.value)} />

                                <label htmlFor="password-filed">Password</label>
                                <input type="password" ref={passwordRef} placeholder='****' id='password-filed' className={passwordClass} value={passwordData} onChange={e => setPasswordData(e.target.value)} />

                                <label htmlFor="confirm-filed">Confirm Password</label>
                                <input type="password" ref={confirmRef} placeholder='****' id='name-filed' className={confirmClass} value={confirmData} onChange={e => setConfirmData(e.target.value)} />
                                <span className={validClass} style={{ fontSize: "1rem" }}>Password and confirm password different</span>

                                <div className="mt-3">
                                    <label for="actual-btn" className='text-dark'>Avatar</label>
                                    <input type="file" id="actual-btn" hidden onChange={e => setAvatarData(e.target.files[0])} />
                                    {/* <label for="actual-btn" className='w-100' id='register-avatar'>Choose File</label> */}
                                    <label for="actual-btn" className='w-100' id='register-avatar'>{avatarData ? avatarData.name : "Choose File"}</label>
                                    {/* <label for="actual-btn" className='w-100' id='register-avatar'>choose file</label> */}
                                    <span className={avatarClass} style={{ fontSize: "1rem" }}>Please select a profile picture</span>
                                    {/* <span>Please select a profile picture</span> */}
                                </div>
                                <p className='mt-2 mb-2'>Do you have an account? <Link to="/login" className='ml-2 font-weight-bold' style={{ color: "#1e7e34" }}>Login</Link></p>
                                <div class="text-end">
                                    <button type="button" class="btn btn-success btn-lg px-3" onClick={registerApi}>Sign Up</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </main>

        </React.Fragment>
    );
}

export default Signup;