import React from 'react';
import ShopContent from './ShopContent';
import Brands from '../common/Brands';



const Shop = ({products}) => {
    return (
        <React.Fragment>

            <ShopContent products={products} />
            <Brands />

        </React.Fragment>
    );
}

export default Shop;