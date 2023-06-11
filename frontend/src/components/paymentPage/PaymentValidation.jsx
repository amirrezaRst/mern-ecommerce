import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

import ContextApi from '../../services/ContextApi';
import config from "../../services/config.json";
import Loading from '../common/Loading';


const PaymentValidation = () => {
    const [loading, setLoading] = useState(true)
    const [paymentStatus, setPaymentStatus] = useState();
    const [userPayment, setUserPayment] = useState();

    const queryParams = new URLSearchParams(window.location.search);
    const authority = queryParams.get("Authority");
    const status = queryParams.get("Status");
    const context = useContext(ContextApi);
    const navigate = useNavigate();

    const verifyPaymentApi = async () => {
        await axios.get(`${config.domain}/api/payment/verifyPayment/${authority}/${status}`).then(async (res) => {
            setPaymentStatus(true);
            context.setUserData(res.data.user);
            setUserPayment(res.data.payment)
            setLoading(false);
            navigate("/verifyPayment", { replace: true, state: { userPayment: res.data.payment, paymentStatus: true } });
        }).catch(err => {
            console.log(err);
            setPaymentStatus(false);
            setLoading(false)
            navigate("/verifyPayment", { replace: true, state: { userPayment: undefined, paymentStatus: false } });
        });
    }

    useEffect(() => {
        if (status == "OK") {
            if (!userPayment) {
                verifyPaymentApi();
            }
        }
        else {
            console.log("run this line");
            setPaymentStatus(false);
            navigate("/verifyPayment", { replace: true, state: { userPayment: undefined, paymentStatus: false } });
        }
    }, [status, authority]);

    return (

        <div>
            {loading === true ?
                <Loading /> : null
            }
        </div>

    );
}

export default PaymentValidation;