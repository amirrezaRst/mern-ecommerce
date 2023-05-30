import React from 'react';


const AddressItem = () => {
    return (
        <div className='mb-5 card'>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='text-capitalize font-weight-normal text-dark'>tehran ,tehranpars,seraj</p>
                    <div className="px-3 py-2 dropdown" style={{ cursor: "pointer" }} data-toggle="dropdown">
                        <i class="far fa-ellipsis-vertical" style={{ fontSize: "1.5rem" }}></i>
                        <div class="dropdown-menu">
                            <span class="dropdown-item" style={{ color: "#818284" }}><i class="fa-regular fa-pen-line mr-2"></i><span style={{ fontSize: "1rem" }}>Edit Address</span></span>
                            <span class="dropdown-item" style={{ color: "#ef4056" }}><i class="fa-regular fa-trash mr-1"></i> <span style={{ fontSize: "1rem" }}>Remove Address</span> </span>
                        </div>
                    </div>
                </div>
                <div className="pl-3" style={{ color: '#767790' }}>
                    <div><i class="fa-sharp far fa-location-dot mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>Tehran</span></div>
                    <div><i class="far fa-envelope mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>8604949494</span></div>
                    <div><i class="far fa-phone mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>09903738378</span></div>
                    <div><i class="far fa-user mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>09903738378</span></div>
                </div>
            </div>
        </div>
    );
}

export default AddressItem;