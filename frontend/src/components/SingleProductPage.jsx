import React, { useEffect, useState } from 'react';
import axios from "axios";

import config from "../services/config.json";

import SingleRelatedCart from './SingleRelatedCart';
import { Link, useNavigate } from 'react-router-dom';

const SingleProductPage = ({ products }) => {

    const [product, setProduct] = useState();
    const [image, setImage] = useState();

    const [productSize, setProductSize] = useState();
    const [productCount, setProductCount] = useState(1);
    const [relatedProduct, setRelatedProduct] = useState();

    const navigation = useNavigate();
    // to={`/product/${item._id}`}
    useEffect(() => {
        getProductApi();
    }, [])

    useEffect(() => {
        var filterProducts = products.filter(item => {
            if (product) {
                return item.category == product.category && item._id != product._id
            }
        })
        setRelatedProduct(filterProducts);
    }, [products])

    // useEffect(() => {
    //     // console.log("change location");
    //     alert("test")
    // }, [window.location.pathname.split("/")[2]])
    // useEffect(() => {
    //     if (window.location.pathname.split("/")[1] == "about") {
    //         setUserData(undefined);
    //         getUserApi();
    //     }
    // }, [window.location.pathname.split("/")[2]])

    const getProductApi = async () => {
        await axios.get(`${config.domain}/api/product/singleProduct/${window.location.pathname.split("/")[2]}`).then(res => {
            console.log("single product fetched");
            setProduct(res.data.product);
            if (res.data.product.picture[0] && image == undefined) {
                setImage(res.data.product.picture[0]);
            }
            if (res.data.product.size[0] == "single") {
                setProductSize("single")
            }
        }).catch(err => {
            console.log(err);
        })
    }



    


    //! Product Handler
    const changeImage = (id) => {
        setImage(id);
    }
    const changeSize = (size) => {
        setProductSize(size);
    }

    const plusCount = () => {
        setProductCount(productCount + 1)
    }
    const minusCount = () => {
        if (productCount > 1) setProductCount(productCount - 1)
    }


    //! Page Handler
    const changeProduct = async (id) => {
        navigation(`/product/${id}`)
        setProduct(undefined);
        await axios.get(`${config.domain}/api/product/singleProduct/${window.location.pathname.split("/")[2]}`).then(res => {
            console.log("single product fetched2");
            setProduct(res.data.product);
            setImage(res.data.product.picture[0]);
            if (res.data.product.size[0] == "single") {
                setProductSize("single")
            }
        }).catch(err => {
            console.log(err);
        })
        var filterProducts = products.filter(item => {
            if (product) {
                return item.category == product.category && item._id != id
            }
        })
        setRelatedProduct(filterProducts);
        window.scrollTo({
            top: 20,
            behavior: "smooth"
        })
    }

    const result = () => {
        console.log(product);
    }

    return (

        <React.Fragment>

            <section class="bg-light">
                <div class="container pb-5">
                    <div class="row">

                        <div class="col-lg-5 mt-5">
                            <div class="card mb-3">
                                {/* <img class="card-img img-fluid" src={product && product.picture[0] ? `${config.domain}/${product.picture[0]}` : null} alt={product ? product.name : null} id="product-detail" /> */}
                                <img class="card-img img-fluid" src={image ? `${config.domain}/${image}` : null} alt={product ? product.name : null} id="product-detail" />
                            </div>
                            <div class="row">

                                <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                    <div class="carousel-inner product-links-wap" role="listbox">

                                        <div class="row">
                                            {product && product.picture[0] ?
                                                product.picture.map(item =>
                                                    <div class="col-4 mb-3">
                                                        <div>
                                                            <img class="card-img img-fluid product-thumbnail" src={`${config.domain}/${item}`} alt={product ? product.name : null} onClick={() => changeImage(item)} />
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-7 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="h2" onClick={result}>{product ? product.name : null}</h1>
                                    <p class="py-2">

                                        {product && product.score == 0 ? <div className='d-inline'>
                                            <i class="fa fa-star text-secondary"></i>
                                            <i class="fa fa-star text-secondary"></i>
                                            <i class="fa fa-star text-secondary"></i>
                                            <i class="fa fa-star text-secondary"></i>
                                            <i class="fa fa-star text-secondary"></i>
                                        </div> : null}
                                        {product && product.score <= 0.5 && product.score != 0 ? <div className='d-inline'>
                                            <i class="fa fa-star-half text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 1 && product.score > 0.5 ? <div className='d-inline'>
                                            <i class="fa fa-star text-secondary"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 1.5 && product.score > 1 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star-half text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 2 && product.score > 1.5 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 2.5 && product.score > 2 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star-half text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 3 && product.score > 2.5 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 3.5 && product.score > 3 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star-half text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 4 && product.score > 3.5 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 4.5 && product.score > 4 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star-half text-warning"></i>
                                        </div> : null}
                                        {product && product.score <= 5 && product.score > 4.5 ? <div className='d-inline'>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                            <i class="fa fa-star text-warning"></i>
                                        </div> : null}

                                        <span class="list-inline-item text-dark ml-3">{product ? `Rating ${product.score} | ${product.scoreCount} Comments` : null}</span>
                                    </p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Brand:</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>{product ? product.brand : null}</strong></p>
                                        </li>
                                    </ul>

                                    <h6>Description:</h6>
                                    <p>{product ? product.description : null}.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Avaliable Color :</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <div className="product-wap">
                                                {product && product.color[0] ?
                                                    product.color.map(color => <span class={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`}></span>) : null
                                                }
                                            </div>
                                        </li>
                                    </ul>

                                    <h6>Specification:</h6>
                                    <ul class="list-unstyled">
                                        {product && product.Specification != null ? product.Specification : "_"}
                                    </ul>

                                    {product && product.available == true ? <h4 class="pb-2 mb-4 font-weight-bold" style={{ color: "#169632" }}>${product ? product.price : null}</h4> : null}


                                    <form>
                                        <div class="row">
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item">Size :</li>
                                                    {product && product.size[0] != "single" ?
                                                        product.size.map(size => <li class="list-inline-item"><span class={productSize != size ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize(size)}>{size}</span></li>) :
                                                        <li class="list-inline-item"><span class={productSize != "single" ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize("single")}>One Size</span></li>
                                                    }
                                                </ul>
                                            </div>
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item text-right">
                                                        Quantity
                                                    </li>
                                                    <li class="list-inline-item"><span class={productCount == 1 ? "btn btn-secondary" : "btn btn-success"} id="btn-minus" onClick={minusCount}>-</span></li>
                                                    <li class="list-inline-item"><span style={{ fontWeight: "bolder" }}>{productCount}</span></li>
                                                    <li class="list-inline-item"><span class="btn btn-success" id="btn-plus" onClick={plusCount}>+</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row pb-3">
                                            <div class="col d-flex justify-content-between align-items-center">
                                                {product && product.available == true ?
                                                    <button type="button" class="btn btn-success btn-lg">Add To Cart</button> :
                                                    <h4 className='mr-3 mt-2 text-danger'>Not Available</h4>
                                                }
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section class="py-5 container">
                <div class="row text-left p-2 pb-3">
                    <h4>Related Products</h4>
                </div>

                <div className="row">

                    {/* {relatedProduct ? relatedProduct.map(item => <SingleRelatedCart id={item._id} name={item.name} picture={item.picture} price={item.price} color={item.color} size={item.size} />) : null} */}
                    {relatedProduct ? relatedProduct.map(item =>
                        <div id="carousel-related-product" className='col-4'>
                            <div class="p-2 pb-3">
                                <div class="product-wap card rounded-0">
                                    <div class="card">
                                        <img class="card-img img-fluid" src={item.picture[0] ? `${config.domain}/${item.picture[0]}` : null} />
                                        <div class="card-img-overlay product-overlay d-flex align-items-center justify-content-center">
                                            <ul class="list-unstyled">
                                                <li><button class="btn btn-success text-white"><i class="fas fa-heart"></i></button></li>
                                                <li><div class="btn btn-success text-white mt-2" onClick={() => changeProduct(item._id)}><i class="far fa-eye"></i></div></li>
                                                <li><button class="btn btn-success text-white mt-2"><i class="fas fa-cart-plus"></i></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div onClick={() => changeProduct(item._id)} class="card-body" style={{ textDecoration: "none" }}>
                                        <a href="shop-single.html" class="h3 text-decoration-none text-capitalize">{item.name}</a>
                                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-1">
                                            <li className='' style={{ color: "#898989" }}>{item.size[0] && item.size[0] != "single" ? item.size.map(size => <span>{size}/</span>) : "_"}</li>
                                            <li class="pt-2">
                                                {item.color[0] ? item.color.map(ProductColor =>
                                                    <span class={`product-color-dot color-dot-${ProductColor} float-left rounded-circle ml-1`}></span>) : null
                                                }
                                            </li>
                                        </ul>
                                        <p class="mb-0" style={{ color: "#208e38", fontWeight: "bold" }}>${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}

                </div>

            </section>


        </React.Fragment >

    );
}

export default SingleProductPage;