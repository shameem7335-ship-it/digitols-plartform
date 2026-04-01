import React, { Suspense, use } from 'react';

import Card from '../Card/Card';
import GetStart from '../GetStart/GetStart';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';

const AllProducts = ({handleCart, productsPromise, setCartItem, cartItem}) => {
    // console.log(productsPromise);
    const productData = use(productsPromise);
// console.log(productData)
  

    return (
    <div>

      <Suspense> 
        <Card  handleCart={handleCart} productData={productData} setCartItem={setCartItem}  cartItem={cartItem} ></Card>
        </Suspense>
     
     <GetStart></GetStart>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
    );
};

export default AllProducts;