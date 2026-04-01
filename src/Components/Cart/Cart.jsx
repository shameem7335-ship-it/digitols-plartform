import React from 'react';
import productImg from '../../assets/products/social-media.png';
import { toast } from 'react-toastify';

const Cart = ({productsPromise, setCartItem, cartItem}) => {
    console.log(cartItem)

      const handleRemove = (cart) => {
        const removeCart = cartItem.filter(newCart => newCart.name !== cart.name);
        setCartItem(removeCart);
        toast('removed from cart')
      }
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>



            {
              cartItem.length === 0 ? (<h1 className='font-bold text-center text-3xl shadow py-10'>Your card is empty</h1>) :
              (cartItem.map((cart, index) => {
             return   <div key={index} className=''>
                <div className='flex justify-between shadow mb-10 p-10'>
                    <div className='flex gap-9'>
                         <img src={productImg} alt="" />
                         <div className=''>
                            <h1 className='font-bold text-xl truncate'>{cart.name}</h1>
                            <h1>$ {cart.price}</h1>
                         </div>
                        </div>
                        <div>
                            <button onClick={()=>handleRemove(cart)} className='btn text-amber-600'>Remove</button>
                            </div>
                </div>
                       
                    </div>
            }))
            }

          <div className='flex justify-between mx-10'>
                        <p>Total</p>
                        <p>${
                       cartItem.reduce((total, item) => total + item.price, 0)
                       }</p>
                        </div>
                       <button onClick={() => setCartItem([])} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;