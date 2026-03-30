import React, { Suspense, use, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';

const fetchPromise = async () => {
    const res = await fetch ('/data.json');
    return res.json();
} 

const Products = () => {
    const[products, setProducts] = useState('products');
    const productsPromise = fetchPromise();
    return (
        <div className='container mx-auto m-10'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl m-5'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designedto<br></br> boost your productivity and creativity.</p>
            </div>
            <div className='flex gap-1 justify-center m-5'>
               <button
               onClick={() => setProducts('products')}
               className={`btn ${products === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>Products</button>
               <button
                onClick={() => setProducts('cart')} 
                className={`btn ${products === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>cart</button>
            </div>
            <div>
                {products==='products'? 
                <Suspense fallback='loading...'>
            <AllProducts productsPromise={productsPromise}></AllProducts>
            </Suspense>
                : 'cart'}
            </div>
            
        </div>
    );
};

export default Products;