import React from 'react';


const PersonalInfo = () => {
    return (
        <React.Fragment>

            <div className="card shadow-sm" >
                <div className="card-body">

                    <div className="">
                        <span className='d-block font-weight-bold' style={{fontSize:"1.08rem"}}>Full Name</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f",fontSize:"1.07rem" }}>Amirreza Rostami</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>

                    <div className="">
                        <span className='d-block font-weight-bold' style={{fontSize:"1.08rem"}}>Phone</span>
                        <div className="d-flex justify-content-between mt-2">

                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f",fontSize:"1.07rem" }}>09903738378</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>

                    <div className="">
                        <span className='d-block font-weight-bold' style={{fontSize:"1.08rem"}}>Email</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f",fontSize:"1.07rem" }}>amirreza.rostami.0073@gmail.com</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>

                    <div className="">
                        <span className='d-block font-weight-bold' style={{fontSize:"1.08rem"}}>Password</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f",fontSize:"1.07rem" }}>******</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }}></i>
                        </div>
                    </div>
                    <div className="dropdown-divider my-3"></div>

                    <div className="mb-2">
                        <span className='d-block font-weight-bold' style={{fontSize:"1.08rem"}}>Wallet</span>
                        <div className="d-flex justify-content-between mt-2">
                            <span className='font-weight-normal ml-2' style={{ color: "#4f4f4f",fontSize:"1.07rem" }}> IR820190000000339251827008</span>
                            <i class="fas fa-pen-to-square" style={{ fontSize: "1.4rem", color: "#169632", cursor: "pointer" }}></i>
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    );
}

export default PersonalInfo;