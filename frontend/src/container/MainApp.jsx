import React, { Fragment, useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router';
import axios from "axios";
import config from "../services/config.json";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';

import MainLayout from '../components/layout/MainLayout';
import ProfileLayout from '../components/layout/ProfileLayout';

import About from '../components/aboutPage/About';
import Contact from '../components/contactPage/Contact';
import Home from '../components/homePage/Home';
import Shop from '../components/shopPage/Shop';

import ShopCart from '../components/shopPage/ShopCart';
import SingleProductPage from "../components/SingleProductPage";

import Signup from '../components/register/Signup';
import Login from '../components/register/Login';

import Profile from "../components/profilePage/Profile";
import FavoriteProduct from '../components/profilePage/FavoriteProduct';
import ContextApi from '../services/ContextApi';
import Messages from '../components/profilePage/Messages';
import PersonalInfo from '../components/profilePage/PersonalInfo';
import Comments from '../components/profilePage/Comments';
import Orders from '../components/profilePage/Orders';


const MainApp = () => {

    //! Auth States
    const [userData, setUserData] = useState({});
    const [userLogin, setUserLogin] = useState(false);

    const [products, setProducts] = useState([]);

    const path = useLocation().pathname;



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

                {path == "/profile" || path == "/profile/favorite" || path == "/profile/orders" || path == "/profile/comments" || path == "/profile/info" || path == "/profile/messages" ?
                    <ProfileLayout userStatus={userLogin} userData={userData}>

                        <Routes>
                            <Route path="/profile" element={userLogin === true ? <Profile userData={userData} /> : <Login />} />
                            <Route path="/profile/favorite" element={userLogin === true ? <FavoriteProduct userData={userData} /> : <Login />} />
                            <Route path="/profile/messages" element={userLogin === true ? <Messages userData={userData} /> : <Login />} />
                            <Route path="/profile/info" element={userLogin === true ? <PersonalInfo userData={userData} /> : <Login />} />
                            <Route path="/profile/comments" element={userLogin === true ? <Comments userData={userData} /> : <Login />} />
                            <Route path="/profile/orders" element={userLogin === true ? <Orders /> : <Login />} />
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




                        </Routes>
                        <ToastContainer />

                    </MainLayout>
                }

            </ContextApi.Provider>

        </Fragment>
    );
}

export default MainApp;