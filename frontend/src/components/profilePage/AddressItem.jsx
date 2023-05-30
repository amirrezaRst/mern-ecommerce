import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

import config from "../../services/config.json";
import ContextApi from "../../services/ContextApi"

const AddressItem = ({ index, location, city, postalCode, unit, plaque, transferee, transfereePhone, transfereeEmail }) => {

    const context = useContext(ContextApi);

    const deleteAddress = async () => {
        // console.log("running")
        Swal.fire({
            icon: "error",
            html: '<span style="font-size:1.4rem;font-weight:normal">Are you sure you want to delete?</sp>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#db3030",
            confirmButtonText: "Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${config.domain}/api/user/deleteAddress/${context.userData._id}/${index}`).then(res => {
                    console.log(res.data);
                    context.setUserData(res.data.user);
                }).catch(err => {
                    toast.error(`Something went wrong!`, {
                        position: "bottom-right",
                        theme: "light",
                        closeOnClick: true
                    })
                    console.log(err);
                })
            }
        })

    }

    return (
        <div className='mb-5 card'>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <p className='text-capitalize font-weight-normal text-dark' onClick={deleteAddress}>{location}</p>
                    <div className="">
                        <i class="fa-regular fa-trash mr-3" style={{ cursor: "pointer", color: "#ef4056", fontSize: "1.2rem" }} onClick={deleteAddress}></i>
                        <i class="fa-regular fa-pen-line mr-2" style={{ cursor: "pointer", color: "#818284", fontSize: "1.2rem" }}></i>
                    </div>
                </div>
                <div className="pl-3" style={{ color: '#767790' }}>
                    <div><i class="fa-sharp far fa-location-dot mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal text-capitalize' style={{ fontSize: "1rem" }}>{city}</span></div>
                    <div><i class="far fa-envelope mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>{postalCode}</span></div>
                    <div><i class="far fa-phone mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>{transfereePhone}</span></div>
                    <div><i class="far fa-user mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal text-capitalize' style={{ fontSize: "1rem" }}>{transferee}</span></div>
                    <div><i class="far fa-at mr-2" style={{ fontSize: "1.1rem" }}></i> <span className='font-weight-normal' style={{ fontSize: "1rem" }}>{transfereeEmail}</span></div>
                </div>
            </div>
        </div>
    );
}

export default AddressItem;