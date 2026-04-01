import React, { Suspense, use, useMemo, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';
import GetStart from '../GetStart/GetStart';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';

const fetchPromise = async () => {
    const res = await fetch ('/data.json');
    const data = res.json();
    console.log(data);
    return data;

} 

const Products = ({cartItem, setCartItem}) => {
    const[products, setProducts] = useState('products');
    const productsPromise = useMemo(()=>  fetchPromise(), []);
    
   

  const handleCart = (product) =>{
    setCartItem([...cartItem, product]);
  }
    return (
        <div className='container mx-auto m-10'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl m-5'>Premium Digital Tools</h1>
                <p className='p-10'>Choose from our curated collection of premium digital products designedto<br></br> boost your productivity and creativity.</p>
            </div>
            <div className='flex gap-1 justify-center m-5'>
               <button
               onClick={() => setProducts('products')}
               className={`btn ${products === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>Products</button>
               <button
                onClick={() => setProducts('cart')} 
                className={`btn ${products === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>cart ({cartItem.length})</button>
            </div>
            <div>
                {products==='products'? 
                <Suspense fallback='loading...'>
            <AllProducts  handleCart={handleCart} productsPromise={productsPromise} cartItem={cartItem} setCartItem={setCartItem}></AllProducts>
            </Suspense>
                : <Suspense fallback='loading...'>
                    <Cart productsPromise={productsPromise} cartItem={cartItem} setCartItem={setCartItem}></Cart>
                    </Suspense>}
            </div>
             
        </div>
    );
};

export default Products;