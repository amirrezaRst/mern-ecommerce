import React, { useContext } from 'react';
import moment from "moment";
import axios from "axios";
import { toast } from 'react-toastify';

import config from "../../services/config.json";
import ContextApi from "../../services/ContextApi";
import { MessageClubSvg } from '../utils/ProfileSvg';

const SingleMessageItem = ({ id, icon, title, text, read, time }) => {

    const context = useContext(ContextApi);

    const seenMessage = async () =>
        // alert("test")
        await axios.get(`${config.domain}/api/user/seenMessage/${context.userData._id}/${id}`).then(res => {
            context.setUserData(res.data.user);
        }).catch(err => {
            toast.error(`Something went wrong. please try again`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })


    return (
        <React.Fragment>
            <div className="message-item d-flex p-2">
                <div className="">
                    {icon != "score" ?
                        <div className="message-icon rounded-circle" style={{ background: "#F9A825", width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i class={`far ${icon == "message" ? "fa-gift" : null} text-white`} style={{ fontSize: "1rem" }}></i>
                        </div> :

                        <div className="message-icon rounded-circle" style={{ background: "#F9A825", width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <MessageClubSvg />
                        </div>
                    }

                </div>
                <div className="w-100 pl-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <span className='text-capitalize' style={{ fontSize: "1.12rem", fontWeight: "normal" }}>{title}</span>
                        {!read ?
                            <span className='rounded-circle' style={{ width: "13px", height: "13px", background: "#169632" }}></span> : null
                        }
                    </div>
                    <div className="">
                        <span style={{ fontSize: "1.07rem", fontWeight: "300" }}>{text}</span>
                    </div>
                    <div className="mt-3 d-flex align-item-center justify-content-between">
                        <span style={{ fontSize: "1.12rem", fontWeight: "normal", color: "#169632", cursor: "pointer" }} onClick={seenMessage}>Get points <i class="fa-regular fa-chevron-right ml-1"></i></span>
                        <span style={{ fontSize: "1rem", fontWeight: "300" }}>{moment(time).format("YYYY MMMM DD")}</span>
                    </div>
                </div>
            </div>
            <div className="dropdown-divider mt-3"></div>
        </React.Fragment>
    );
}

export default SingleMessageItem;