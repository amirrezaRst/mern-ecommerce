import React from 'react';

import { Link } from 'react-router-dom';


const PaymentHeader = () => {
    return (
        <header className='container rounded py-4 my-5 shadow-sm' style={{ width: "100%", border: "1px solid #e0e0e6" }}>
            {/* <h2 className='text-center font-weight-bold' style={{color:"#388d4c"}}>Zay Ecommerce</h2> */}
            <h3 className='text-center font-weight-bold' style={{ color: "#0f9b2d" }}>Zay Ecommerce</h3>

            <div className="container mt-5 mb-2">
                <div className="container d-flex align-items-center justify-content-around">


                    <div className=" w-100" >
                        <Link to="/shop-cart" className="float-right" style={{ color: "#59ab6e", textDecoration: "none" }}>
                            <i class="fa-regular fa-cart-shopping mr-2" style={{ fontSize: "1.5rem" }}></i>
                            <span style={{ fontSize: "1.15rem", fontWeight: "normal" }}>Cart</span>
                        </Link>
                    </div>

                    <div className="bg-dark w-75 mx-3">
                        <div style={{ width: "100%", height: "1.6px", background: "#59ab6e" }}></div>
                    </div>

                    <div className="w-100" style={{ color: "#009e24", cursor: "pointer" }}>
                        <i class="fa-regular fa-bag-shopping mr-2" style={{ fontSize: "1.5rem" }}></i>
                        <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>Purchase Information</span>
                    </div>

                    <div className="bg-dark w-75 mx-3">
                        <div style={{ width: "100%", height: "1.6px", background: "#e0e0e6" }}></div>
                    </div>

                    <div className=" w-100" style={{ color: "#b2b2b2" }}>
                        <i class="fa-regular fa-wallet mr-2" style={{ fontSize: "1.5rem" }}></i>
                        <span style={{ fontSize: "1.15rem", fontWeight: "normal" }}>Payment</span>
                    </div>


                </div>
            </div>

        </header>
    );
}

export default PaymentHeader;