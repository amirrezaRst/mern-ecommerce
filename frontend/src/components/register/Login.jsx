import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import config from "../../services/config.json";
import ContextApi from "../../services/ContextApi";

const Login = () => {

    //! Data States
    const [emailData, setEmailData] = useState();
    const [passwordData, setPasswordData] = useState();

    //! Data Ref
    const emailRef = useRef();
    const passwordRef = useRef();

    //! Data Style
    const [emailClass, setEmailClass] = useState(`form-control mb-3`);
    const [passwordClass, setPasswordClass] = useState(`form-control mb-3`);

    const params = useLocation();
    const navigation = useNavigate();
    const context = useContext(ContextApi);


    useEffect(() => {
        if (params.state != null) {
            setEmailData(params.state.email);
            setPasswordData(params.state.password);
        }
    }, [])

    const loginApi = async () => {

        if (emailData == undefined || emailData == "") {
            emailRef.current.focus();
            return setEmailClass("form-control mb-3 form-invalid")
        }
        else if (passwordData == undefined || passwordData == "") {
            passwordRef.current.focus();
            setEmailClass("form-control mb-3 form-valid")
            return setPasswordClass("form-control mb-3 form-invalid")
        }
        else {
            setPasswordClass("form-control mb-3 form-valid")
        }

        const body = {
            email: emailData,
            password: passwordData
        }

        await axios.post(`${config.domain}/api/user/login`, body).then(res => {
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Logged in',
                confirmButtonColor: "#59AB6E",
                confirmButtonText: "Ok"
            })
            localStorage.setItem("token", res.headers["x-auth-token"])
            localStorage.setItem("userId", res.data.user._id)
            context.setUserLogin(true);
            context.setUserData(res.data.user)
            navigation("/");
            window.scrollTo({
                top: 20,
                behavior: "smooth"
            })
        }).catch(err => {
            if (err.message == "Request failed with status code 433") {
                setPasswordClass("form-control mb-3 form-invalid");
                passwordRef.current.focus();
                toast.error(`The password is not valid`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
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


    const result = () => {
        console.log(params);
    }

    return (
        <React.Fragment>

            <main className='container mb-5 mt-4'>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5 d-flex justify-content-center align-items-center">
                            <img src="/./assets/img/register-vector7.avif" className='' alt="zay shop" />
                        </div>

                        <div className="col-lg-7">
                            <span className='mb-5' style={{ fontSize: "2.5rem", fontWeight: "400" }}>Log In</span>
                            <form className='mt-4'>

                                <label htmlFor="email-filed">Email</label>
                                <input type="email" ref={emailRef} placeholder='Email' id='email-filed' className={emailClass} value={emailData} onChange={e => setEmailData(e.target.value)} required />

                                <label htmlFor="password-filed">Password</label>
                                <input type="password" ref={passwordRef} placeholder='Password' id='password-filed' className={passwordClass} value={passwordData} onChange={e => setPasswordData(e.target.value)} required />

                                <p className='mt-2 mb-2'>Do you have an account? <Link to="/signup" className='ml-2 font-weight-bold' style={{ color: "#1e7e34" }}>Signup</Link></p>
                                {/* <div class="text-end"> */}
                                <button type="button" class="btn btn-success btn-lg px-3 mt-2" onClick={loginApi}>Log In</button>
                                {/* <button type="button" class="btn btn-success btn-lg px-3 ml-3" onClick={result}>Result</button> */}
                                {/* </div> */}

                            </form>
                        </div>

                    </div>
                </div>

            </main>

        </React.Fragment>
    );
}

export default Login;