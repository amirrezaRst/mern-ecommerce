import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

import config from "../services/config.json";
import ContextApi from '../services/ContextApi';


const SingleProductPage = ({ products }) => {

    const [product, setProduct] = useState();
    const [image, setImage] = useState();
    const [relatedProduct, setRelatedProduct] = useState();

    //! Buy States
    const [productSize, setProductSize] = useState();
    const [productCount, setProductCount] = useState(1);
    const [productColor, setProductColor] = useState();
    const [totalPrice, setTotalPrice] = useState();

    //! Buy Class
    const [colorClass, setColorClass] = useState("text-danger font-weight-normal mb-4 d-none");
    const [sizeClass, setSizeClass] = useState("text-danger font-weight-normal mb-4 d-none");

    const context = useContext(ContextApi);
    const navigation = useNavigate();


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


    const getProductApi = async () => {
        await axios.get(`${config.domain}/api/product/singleProduct/${window.location.pathname.split("/")[2]}`).then(res => {
            console.log("single product fetched");
            setProduct(res.data.product);
            if (totalPrice == undefined) {
                setTotalPrice(res.data.product.price * productCount)
            }

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
        const count = productCount + 1
        setTotalPrice(product.price * count)
    }
    const minusCount = () => {
        if (productCount > 1) {
            setProductCount(productCount - 1)
            const count = productCount - 1
            setTotalPrice(product.price * count)
        }
    }

    //! Handle Color
    const changeColor = (color) => {
        setProductColor(color);
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


    const addToCart = async () => {
        if (productColor == undefined) {
            toast.error(`Please choose the color of the product you want`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            return setColorClass("text-danger font-weight-normal mb-4 d-block");
        }
        else if (productSize == undefined) {
            setColorClass("text-danger font-weight-normal mb-4 d-none")
            toast.error(`Please choose the size of the product you want`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            return setSizeClass("text-danger font-weight-normal mb-4 d-block");
        }
        setSizeClass("text-danger font-weight-normal mb-4 d-none");

        const body = {
            name: product.name,
            count: productCount,
            color: productColor,
            size: productSize,
            price: totalPrice,
            picture: product.picture[0],
            clubScore: product.clubScore,
            productId: product.productId
        }

        axios.post(`${config.domain}/api/cart/addCart/${context.userData._id}`, body).then(res => {
            console.log(res);
            context.setUserData(res.data.user);
            Swal.fire({
                icon: 'success',
                title: 'Added to cart',
                showDenyButton: true,
                // showCancelButton: true,
                confirmButtonColor: "#59AB6E",
                confirmButtonText: "Ok",
                denyButtonColor: "#ffffff",
                denyButtonText: `<i class="fa-solid fa-cart-shopping" style="color: #59AB6E;font-size:1.5rem;"></i>`,

            }).then((result) => {
                if (result.isDenied) {
                    navigation("/shop-cart")
                }
            })
        }).catch(err => {
            toast.error(`Something went wrong please try later`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })

    }


    const result = () => {
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Added to cart',
        //     confirmButtonColor: "#59AB6E",
        //     confirmButtonText: "Ok"
        // })

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
                                    <ul class="list-inline mt-4">
                                        <li class="list-inline-item">
                                            <h6 className='mb-0'>Avaliable Color :</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <div className="product-wap">
                                                {product && product.color[0] ?
                                                    product.color.map(color => <span class={`product-color-dot color-dot-${color} float-left rounded-circle ml-1 d-flex align-items-center justify-content-center`} style={{ padding: "16px", cursor: "pointer" }} onClick={() => changeColor(color)}>{productColor == color ? <i class="fa-solid fa-check" style={{ color: "#ffffff", textShadow: "0px 0px 5px rgba(0,0,0,0.7)" }}></i> : null}</span>) : null
                                                }
                                            </div>
                                        </li>
                                        <span className={colorClass} style={{ fontSize: "1.07rem" }}>Please select the color of the product</span>
                                    </ul>

                                    <h6 className='mt-4'>Specification:</h6>
                                    <ul class="list-unstyled">
                                        {product && product.Specification != null ? product.Specification : "_"}
                                    </ul>

                                    {product && product.available == true ? <h4 class="pb-2 mb-4 font-weight-bold" style={{ color: "#169632" }}>${totalPrice != undefined ? totalPrice : null}</h4> : null}


                                    <form>
                                        <div class="d-flex justify-content-between pr-4">
                                            <div>
                                                <ul class="list-inline mb-2">
                                                    <li class="list-inline-item">Size :</li>
                                                    {product && product.size[0] != "single" ?
                                                        product.size.map(size => <li class="list-inline-item"><span class={productSize != size ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize(size)}>{size}</span></li>) :
                                                        <li class="list-inline-item"><span class={productSize != "single" ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize("single")}>One Size</span></li>
                                                    }
                                                </ul>
                                                <span className={sizeClass} style={{ fontSize: "1.07rem" }}>Please select the color of the product</span>

                                            </div>
                                            <div>
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
                                        {/* <div class="row">
                                            <div class="col-6">
                                                <ul class="list-inline mb-2">
                                                    <li class="list-inline-item">Size :</li>
                                                    {product && product.size[0] != "single" ?
                                                        product.size.map(size => <li class="list-inline-item"><span class={productSize != size ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize(size)}>{size}</span></li>) :
                                                        <li class="list-inline-item"><span class={productSize != "single" ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize("single")}>One Size</span></li>
                                                    }
                                                </ul>
                                                <span className={sizeClass} style={{ fontSize: "1.07rem" }}>Please select the color of the product</span>

                                            </div>
                                            <div class="col-6">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item text-right">
                                                        Quantity
                                                    </li>
                                                    <li class="list-inline-item"><span class={productCount == 1 ? "btn btn-secondary" : "btn btn-success"} id="btn-minus" onClick={minusCount}>-</span></li>
                                                    <li class="list-inline-item"><span style={{ fontWeight: "bolder" }}>{productCount}</span></li>
                                                    <li class="list-inline-item"><span class="btn btn-success" id="btn-plus" onClick={plusCount}>+</span></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div class="row pb-3">
                                            <div class="col d-flex justify-content-between align-items-center">
                                                {product && product.available == true ?
                                                    <button type="button" class="btn btn-success btn-lg" onClick={addToCart}>Add To Cart</button> :
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

                    {relatedProduct && relatedProduct.length < 0 ? relatedProduct.map(item =>
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
                    ) : <h5 className='mx-auto my-4 text-black-50'>There is no related product</h5>}

                </div>
            </section>


        </React.Fragment >

    );
}

export default SingleProductPage;