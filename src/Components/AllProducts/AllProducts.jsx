import React, { Suspense, use } from 'react';

import Card from '../Card/Card';

const AllProducts = ({handleCart, productsPromise, setCartItem, cartItem}) => {
    // console.log(productsPromise);
    const productData = use(productsPromise);
// console.log(productData)
  

    return (
      <Suspense> 
        <Card  handleCart={handleCart} productData={productData} setCartItem={setCartItem}  cartItem={cartItem} ></Card>
        </Suspense>
     
    );
};

export default AllProducts;