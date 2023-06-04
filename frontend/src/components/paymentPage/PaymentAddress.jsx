import React, { useEffect, useState } from 'react';
import { ChangeAddressModal, NewAddressModal } from '../utils/ProfileModals';


const PaymentAddress = ({ userData, changeShipping, changeShippingAddress }) => {
    const [address, setAddress] = useState(0);

    useEffect(() => {
        changeShippingAddress(address);
        if (userData.address[address].city == "tehran" || userData.address[address].city == "karaj" || userData.address[address].city == "tabriz") {
            return changeShipping(0)
        }
        else {
            changeShipping(8);
        }
    }, [address])
    return (

        <div className="card shadow-sm mb-4" style={{ borderRadius: "10px" }}>
            <div className="card-body px-3 py-4">

                {userData.address && userData.address[address] != undefined ?
                    <div>
                        <div className="d-flex align-items-center">
                            <div className="mr-3">
                                <i class="fa-sharp fa-regular fa-location-dot" style={{ fontSize: "1.5rem" }}></i>
                            </div>
                            <div className="w-100">
                                <span style={{ fontWeight: "normal", display: "block", fontSize: ".97rem", color: "#767790" }}>Order delivery address</span>
                                <span className='mt-2 mb-1 text-capitalize' style={{ fontWeight: "420", display: "block", fontSize: "1.05rem" }}>{userData.address[address].location}</span>
                                <span className='text-capitalize' style={{ fontWeight: "normal", display: "block", fontSize: "1rem", color: "#767790" }}>{userData.address[address].transferee}</span>
                            </div>
                        </div>
                        <span className='mr-3 mt-2' style={{ fontWeight: "normal", display: "block", fontSize: "1rem", color: "#009E24", float: "right", cursor: "pointer" }} data-toggle="modal" data-target="#change-address-modal">Change address <i class="far fa-chevron-right"></i></span>
                    </div>
                    :
                    <div className='text-center py-3'>
                        <span className='font-weight-normal'>You have not registered any address <span className="text-success font-weight-normal ml-3" data-toggle="modal" data-target="#new-address-modal" style={{ textDecoration: "none", cursor: "pointer" }}>New Address <i class="fa-sharp fa-regular fa-location-dot" style={{ fontSize: "1.3rem" }}></i></span></span>
                    </div>

                }
                <NewAddressModal />
                <ChangeAddressModal userData={userData} addressIndex={address} changeAddress={setAddress} />

            </div>
        </div>
    );
}

export default PaymentAddress;