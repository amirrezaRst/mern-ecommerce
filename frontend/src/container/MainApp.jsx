import React, { Profiler, useEffect, useState } from 'react';

import { Route, Routes } from 'react-router';
import axios from "axios";
import config from "../services/config.json";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';

import About from '../components/aboutPage/About';
import Contact from '../components/contactPage/Contact';
import Home from '../components/homePage/Home';
import Shop from '../components/shopPage/Shop';

import ShopCart from '../components/shopPage/ShopCart';
import SingleProductPage from "../components/SingleProductPage";

import Signup from '../components/register/Signup';
import Login from '../components/register/Login';

import FavoriteProduct from '../components/profilePage/FavoriteProduct';
import Profile from "../components/profilePage/Profile";

import MainLayout from '../components/layout/MainLayout';
import ContextApi from '../services/ContextApi';


const MainApp = () => {

    //! Auth States
    const [userData, setUserData] = useState({});
    const [userLogin, setUserLogin] = useState(false);

    const [products, setProducts] = useState([]);


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
            // console.log(res.data.user);
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

        <MainLayout userStatus={userLogin} userData={userData}>

            <ContextApi.Provider value={{ products, setProducts, userData, setUserData, userLogin, setUserLogin }}>

                <Routes>
                    <Route path="/" exact element={<Home products={products} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop products={products} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/*" element={<SingleProductPage products={products} />} />

                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/shop-cart" element={userLogin === true ? <ShopCart userData={userData} /> : <Login />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/favorite" element={userLogin === true ? <FavoriteProduct userData={userData} /> : <Login />} />
                </Routes>
                <ToastContainer />


            </ContextApi.Provider>

        </MainLayout>

    );
}

export default MainApp;