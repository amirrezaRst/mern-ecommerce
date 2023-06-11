import React, { lazy, Suspense, Fragment, useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router';
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';

import config from "../services/config.json";
import MainLayout from '../components/layout/MainLayout';
import ProfileLayout from '../components/layout/ProfileLayout';
import ContextApi from '../services/ContextApi';
import Loading from "../components/common/Loading";
import ErrorBoundary from './ErrorBoundary';
import PaymentValidation from '../components/paymentPage/PaymentValidation';


const MainApp = () => {

    const Home = lazy(() => import("../components/homePage/Home"));
    const Shop = lazy(() => import("../components/shopPage/Shop"));
    const About = lazy(() => import("../components/aboutPage/About"));
    const Contact = lazy(() => import("../components/contactPage/Contact"));
    const SingleProductPage = lazy(() => import("../components/SingleProductPage"));

    const Signup = lazy(() => import("../components/register/Signup"));
    const Login = lazy(() => import("../components/register/Login"));

    const ShopCart = lazy(() => import("../components/shopPage/ShopCart"));
    const Payment = lazy(() => import("../components/paymentPage/Payment"));
    const VerifyPayment = lazy(() => import("../components/paymentPage/VerifyPayment"));

    const Profile = lazy(() => import("../components/profilePage/Profile"));
    const FavoriteProduct = lazy(() => import("../components/profilePage/FavoriteProduct"));
    const Messages = lazy(() => import("../components/profilePage/Messages"));
    const PersonalInfo = lazy(() => import("../components/profilePage/PersonalInfo"));
    const Comments = lazy(() => import("../components/profilePage/Comments"));
    const Orders = lazy(() => import("../components/profilePage/Orders"));
    const Address = lazy(() => import("../components/profilePage/Address"));


    //! Auth States
    const [userData, setUserData] = useState({});
    const [userLogin, setUserLogin] = useState(false);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const path = useLocation().pathname;

    setTimeout(() => {
        setLoading(false);
        // }, 2000);
    }, 0);

    const getProductApi = async () => {
        await axios.get(`${config.domain}/api/product/productList`).then(res => {
            console.log("products fetched");
            setProducts(res.data.products);
        }).catch(err => {
            toast.error(`A problem occurred on the server side, please try again`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    }

    const userApi = async () => {
        const userId = localStorage.getItem("userId");

        await axios.get(`${config.domain}/api/user/singleUser/${userId}`).then(res => {
            setUserData(res.data.user);
            setUserLogin(true);
        }).catch(err => {
            toast.error(`A problem occurred on the server side, please try again`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    }

    useEffect(() => {
        getProductApi();
        if (localStorage.getItem("userId")) userApi();
    }, [])


    return (
        <Fragment>

            <ContextApi.Provider value={{ products, setProducts, userData, setUserData, userLogin, setUserLogin }}>

                {loading === true ?
                    <Loading />
                    :

                    <Suspense fallback={<Loading />}>
                        <ErrorBoundary fallback={<h1>Something went wrong!</h1>}>

                            {path == "/profile" || path == "/profile/favorite" || path == "/profile/orders" || path == "/profile/comments" || path == "/profile/info" || path == "/profile/messages" || path == "/profile/address" ?
                                <ProfileLayout userStatus={userLogin} userData={userData}>

                                    <Routes>
                                        <Route path="/profile" element={userLogin === true ? <Profile userData={userData} /> : <Login />} />
                                        <Route path="/profile/favorite" element={userLogin === true ? <FavoriteProduct userData={userData} /> : <Login />} />
                                        <Route path="/profile/messages" element={userLogin === true ? <Messages userData={userData} /> : <Login />} />
                                        <Route path="/profile/info" element={userLogin === true ? <PersonalInfo userData={userData} /> : <Login />} />
                                        <Route path="/profile/comments" element={userLogin === true ? <Comments userData={userData} /> : <Login />} />
                                        <Route path="/profile/address" element={userLogin === true ? <Address userData={userData} /> : <Login />} />
                                        <Route path="/profile/orders" element={userLogin === true ? <Orders userData={userData} /> : <Login />} />
                                    </Routes>
                                    <ToastContainer />

                                </ProfileLayout> :
                                <MainLayout userStatus={userLogin} userData={userData}>


                                    <Routes>
                                        <Route path="/" exact element={<Home products={products} />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/shop" element={<Shop products={products} />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/product/*" element={<SingleProductPage products={products} />} />

                                        <Route path="/signup" element={<Signup />} />
                                        <Route path="/login" element={<Login />} />

                                        <Route path="/shop-cart" element={userLogin === true ? <ShopCart userData={userData} /> : <Login />} />
                                        <Route path="/payment" element={userData.cart && userData.cart.length > 0 ? <Payment userData={userData} /> : <ShopCart userData={userData} />} />
                                        <Route path="/verifyPayment" element={<VerifyPayment />} />
                                        <Route path="/paymentValidation" element={<PaymentValidation />} />


                                    </Routes>
                                    <ToastContainer />

                                </MainLayout>
                            }

                        </ErrorBoundary>
                    </Suspense>
                }

            </ContextApi.Provider >

        </Fragment >
    );
}

export default MainApp;