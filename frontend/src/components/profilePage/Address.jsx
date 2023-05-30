import React from 'react';
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
                    <button className='btn' id='address-button'><i className="far fa-location-dot   "></i> New Address</button>
                </div>

                <div className="mt-5 px-3">

                    <AddressItem />

                </div>

            </div>
        </div>
    );
}

export default Address;