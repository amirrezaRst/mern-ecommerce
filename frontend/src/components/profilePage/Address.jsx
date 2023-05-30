import React from 'react';
import { NewAddressModal } from '../utils/ProfileModals';
import { AddressSvg } from '../utils/ProfileSvg';
import AddressItem from './AddressItem';


const Address = ({ userData }) => {

    return (
        <div className="card shadow-sm" >
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center px-2">
                    <div className="">
                        <h5>Address</h5>
                        <div className="mt-2" style={{ background: "#169632", width: "75%", height: "3px" }}></div>
                    </div>
                    <button className='btn' id='address-button' data-toggle="modal" data-target="#new-address-modal"><i className="far fa-location-dot"></i> New Address</button>
                </div>

                <NewAddressModal />

                <div className="mt-5 px-3">

                    {userData != undefined && userData.address.length != 0 ?
                        userData.address.map((item, index) => <AddressItem index={index} location={item.location} city={item.city} postalCode={item.postalCode} unit={item.unit} plaque={item.plaque} transferee={item.transferee} transfereePhone={item.transfereePhone} transfereeEmail={item.transfereeEmail} />) :
                        <div className="py-3 pb-5">
                            <div className="d-flex justify-content-center">
                                <AddressSvg />
                            </div>
                            <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>You have not registered an address yet</span>
                        </div>
                    }

                </div>

            </div>
        </div>
    );
}

export default Address;