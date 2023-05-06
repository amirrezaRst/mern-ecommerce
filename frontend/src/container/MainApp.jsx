import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router';
import axios from "axios";
import config from "../services/config.json";

import About from '../components/aboutPage/About';
import Contact from '../components/contactPage/Contact';
import FavoriteProduct from '../components/FavoriteProduct';
import Home from '../components/homePage/Home';
import MainLayout from '../components/layout/MainLayout';
import Shop from '../components/shopPage/Shop';
import ShopCart from '../components/shopPage/ShopCart';
import SingleProductPage from "../components/SingleProductPage";
import Signup from '../components/register/Signup';
import Login from '../components/register/Login';


const MainApp = () => {

    //! Auth States
    const [userData, setUserData] = useState([]);
    const [userLogin, setUserLogin] = useState(false);

    const [products, setProducts] = useState([]);


    const getProductApi = async () => {
        await axios.get(`${config.domain}/api/product/productList`).then(res => {
            console.log("products fetched");
            setProducts(res.data.products);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getProductApi();
    }, [])


    return (

        <MainLayout>

            <Routes>
                <Route path="/" exact element={<Home products={products} />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop products={products} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/*" element={<SingleProductPage products={products} />} />
                <Route path="/shop-cart" element={<ShopCart />} />
                <Route path="/favorite-product" element={<FavoriteProduct />} />

                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </MainLayout>

    );
}

export default MainApp;