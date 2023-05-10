import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SingleShopContent from '../SingleShopCart';


const ShopContent = ({ products }) => {

    const [categoryColor, setCategoryColor] = useState("all");
    const [categorySize, setCategorySize] = useState("all");
    const [categoryProduct, setCategoryProduct] = useState("all");
    const [categoryGender, setCategoryGender] = useState("all");


    const [filterProduct, setFilterProduct] = useState();


    const handleFilter = (genderProp, productProp) => {
        console.log("running handle filter function");
        if (!genderProp && !productProp) {
            console.log("without props");
            const newFilter = products.filter(item => {
                if (categoryGender == "all" && categoryProduct == "all") {
                    console.log("gender and product == ALL");
                    return products;
                }
                else if (categoryGender == "all") {
                    console.log("gender == ALL");
                    return item.category == categoryProduct;
                }
                else if (categoryProduct == "all") {
                    console.log("product == ALL");
                    return item.gender == categoryGender;
                }
                else {
                    console.log("gender and product != ALL");
                    return item.category == categoryProduct && item.gender == categoryGender
                }
            })
            setFilterProduct(newFilter);
        }
        else if (genderProp && !productProp) {
            console.log("gender props");
            if (genderProp == "all") return setFilterProduct(products);
            const genderFilter = products.filter(item => {
                return item.gender == genderProp
            })
            setFilterProduct(genderFilter);
        }
        else if (!genderProp && productProp) {
            console.log("product props");
            if (productProp == "all") return setFilterProduct(products);
            const productFilter = products.filter(item => {
                return item.category == productProp
            })
            setFilterProduct(productFilter);
        }
        else if (genderProp && productProp) {
            console.log("gender & product props");
            if (genderProp == "all") setFilterProduct(products);
            else if (productProp == "all") return setFilterProduct(products);
            const allFilter = products.filter(item => {
                return item.gender == genderProp && item.category == productProp
            })
            setFilterProduct(allFilter);
        }
    }

    useEffect(() => {
        handleFilter();
        // console.log("useEffect test");
    }, [products])

    //! gender handler
    const changeGender = (gen) => {
        setCategoryGender(gen);
        handleFilter(gen, undefined)
    }
    const handleGender = (gen) => {
        if (categoryGender == gen) {
            return { color: "#343a40", borderBottom: "2px solid green", cursor: "pointer" }
        }
        return { color: "#bcbcbc", cursor: "pointer" }
    }

    //! color handler
    const changeColor = (col) => {
        setCategoryColor(col);
    }
    const handleColor = (col) => {
        if (categoryColor == col) {
            return { color: "black", cursor: "pointer" }
        }
        return { color: "#bcbcbc", cursor: "pointer" }
    }


    //! size handler
    const changeSize = (siz) => {
        setCategorySize(siz);
    }
    const handleSize = (siz) => {
        if (categorySize == siz) {
            return { color: "black", cursor: "pointer" }
        }
        return { color: "#bcbcbc", cursor: "pointer" }
    }

    //! product handler
    const changeProduct = (pro) => {
        setCategoryProduct(pro);
        handleFilter(undefined, pro);
    }
    const handleProduct = (pro) => {
        if (categoryProduct == pro) {
            return { color: "#343a40", borderBottom: "2px solid green", cursor: "pointer" }
        }
        return { color: "#bcbcbc", cursor: "pointer" }
    }


    const result = () => {
        // const filter = products.filter(item => {
        //     return item.gender == "men"
        // })
        // console.log(filter);
        console.log(filterProduct);
        console.log(`gender : ${categoryGender}`);
        console.log(`product : ${categoryProduct} `);
    }

    return (
        <div class="container py-5">
            <div class="row">

                <div class="col-lg-3">
                    <h1 class="h2 pb-4" onClick={result}>Categories</h1>
                    <ul class="list-unstyled templatemo-accordion">

                        <li class="pb-3">
                            <a class="collapsed d-flex justify-content-between h3 text-decoration-none" data-toggle="collapse" data-target="#collapseColorCategories">
                                Color
                                <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                            </a>
                            <ul id="collapseColorCategories" class="collapse list-unstyled pl-3">
                                <li><p class="mb-0" style={handleColor("all")} onClick={() => changeColor("all")}>All</p></li>
                                <li><p class="mb-0" style={handleColor("black")} onClick={() => changeColor("black")}>Black</p></li>
                                <li><p class="mb-0" style={handleColor("blue")} onClick={() => changeColor("blue")}>Blue</p></li>
                                <li><p class="mb-0" style={handleColor("red")} onClick={() => changeColor("red")}>Red</p></li>
                                <li><p class="mb-0" style={handleColor("yellow")} onClick={() => changeColor("yellow")}>Yellow</p></li>
                                <li><p class="mb-0" style={handleColor("green")} onClick={() => changeColor("green")}>Green</p></li>
                                <li><p class="mb-0" style={handleColor("gray")} onClick={() => changeColor("gray")}>Gray</p></li>
                                <li><p class="mb-0" style={handleColor("purple")} onClick={() => changeColor("purple")}>Purple</p></li>
                            </ul>
                        </li>
                        <li class="pb-3">
                            <a class="collapsed d-flex justify-content-between h3 text-decoration-none" data-toggle="collapse" data-target="#collapseSizeCategories">
                                Size
                                <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                            </a>
                            <ul id="collapseSizeCategories" class="collapse list-unstyled pl-3">
                                <li><p className='mb-0' style={handleSize("all")} onClick={() => changeSize("all")}>All</p></li>
                                <li><p className='mb-0' style={handleSize("s")} onClick={() => changeSize("s")}>S</p></li>
                                <li><p className='mb-0' style={handleSize("m")} onClick={() => changeSize("m")}>M</p></li>
                                <li><p className='mb-0' style={handleSize("l")} onClick={() => changeSize("l")}>L</p></li>
                                <li><p className='mb-0' style={handleSize("x")} onClick={() => changeSize("x")}>X</p></li>
                                <li><p className='mb-0' style={handleSize("xl")} onClick={() => changeSize("xl")}>XL</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-9">
                    {/* <button className="btn btn-primary" onClick={result}>Result</button> */}
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <ul class="list-inline shop-top-menu pb-1 mb-0">
                                <li class="list-inline-item">
                                    <p class="h3 text-decoration-none mr-3" style={handleGender("all")} onClick={() => changeGender("all")}>All</p>
                                </li>
                                <li class="list-inline-item">
                                    <p class="h3 text-decoration-none mr-3" style={handleGender("men")} onClick={() => changeGender("men")}>Men's</p>
                                </li>
                                <li class="list-inline-item">
                                    <p class="h3 text-decoration-none" style={handleGender("women")} onClick={() => changeGender("women")}>Women's</p>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-12">
                            <ul class="list-inline shop-top-menu">
                                <li class="list-inline-item py-1">
                                    <p class="h4 text-decoration-none mr-3" style={handleProduct("all")} onClick={() => changeProduct("all")}>All</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none mr-3" style={handleProduct("t shirt")} onClick={() => changeProduct("t shirt")}>T Shirt</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none" style={handleProduct("shirt")} onClick={() => changeProduct("shirt")}>Shirt</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none" style={handleProduct("shoes")} onClick={() => changeProduct("shoes")}>Shoes</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none" style={handleProduct("sneakers")} onClick={() => changeProduct("sneakers")}>sneakers</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none" style={handleProduct("sunglass")} onClick={() => changeProduct("sunglass")}>Sunglass</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none" style={handleProduct("watch")} onClick={() => changeProduct("watch")}>Watch</p>
                                </li>
                                <li class="list-inline-item mx-3">
                                    <p class="h4 text-decoration-none" style={handleProduct("jacket")} onClick={() => changeProduct("jacket")}>jacket</p>
                                </li>
                            </ul>
                        </div>

                    </div>


                    <div class="row">

                        {/* {products.map(item => <SingleShopContent id={item._id} name={item.name} color={item.color} picture={item.picture} price={item.price} size={item.size} />)} */}
                        {filterProduct.map(item => <SingleShopContent id={item._id} name={item.name} color={item.color} picture={item.picture} price={item.price} size={item.size} />)}

                    </div>

                </div >

            </div >
        </div >
    );
}

export default ShopContent;