import React, { useEffect, useState } from 'react';
import axios from "axios";

import config from "../services/config.json";

import SingleRelatedCart from './SingleRelatedCart';

const SingleProductPage = ({ products }) => {

    const [product, setProduct] = useState();
    const [image, setImage] = useState();

    const [productSize, setProductSize] = useState();
    const [productCount, setProductCount] = useState(1);


    useEffect(() => {
        getProductApi();
    }, [])

    const getProductApi = async () => {
        await axios.get(`${config.domain}/api/product/singleProduct/${window.location.pathname.split("/")[2]}`).then(res => {
            console.log("single product fetched");
            setProduct(res.data.product)
            if (res.data.product.picture[0] && image == undefined) {
                setImage(res.data.product.picture[0]);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const changeImage = (id) => {
        setImage(id);
    }



    //! Product Handler
    const changeSize = (size) => {
        setProductSize(size)
    }

    const plusCount = () => {
        setProductCount(productCount + 1)
    }
    const minusCount = () => {
        if (productCount > 1) setProductCount(productCount - 1)
    }

    const result = () => {
        console.log(productSize)
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
                                                            <img class="card-img img-fluid" src={`${config.domain}/${item}`} alt={product ? product.name : null} onClick={() => changeImage(item)} />
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
                                    <p class="h3 py-2">${product ? product.price : null}</p>
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
                                    <ul class="list-unstyled pb-3">
                                        {product && product.Specification != null ? product.Specification : "_"}
                                    </ul>

                                    <form>
                                        {/* <input type="hidden" name="product-title" value="Activewear" /> */}
                                        <div class="row">
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item">Size :{/* <input type="hidden" name="product-size" id="product-size" value="S" /> */}</li>
                                                    {product && product.size[0] != "single" ?
                                                        product.size.map(size => <li class="list-inline-item"><span class={productSize != size ? "btn btn-success btn-size" : "btn btn-secondary btn-size"} onClick={() => changeSize(size)}>{size}</span></li>) :
                                                        <li class="list-inline-item"><span class="btn btn-success btn-size" onClick={() => changeSize("single")}>One Size</span></li>
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
                                            <div class="col d-grid">
                                                <button type="button" class="btn btn-success btn-lg">Add To Cart</button>
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

                    <SingleRelatedCart />

                </div>

            </section>


        </React.Fragment >

    );
}

export default SingleProductPage;