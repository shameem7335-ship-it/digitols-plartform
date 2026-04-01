import React from 'react';
import img01 from '../../assets/products/user.png'
import img02 from '../../assets/products/package.png'
import img03 from '../../assets/products/rocket.png'

const GetStart = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center items-center'>
            <h1 className='font-bold text-2xl'>Get start in 3 step</h1>
            <h1>Start using premium digital tools in minutes, not hours.</h1>
            </div>
            <div className='flex m-20 gap-10'>
                       <div>
                <div className='shadow'>
                    <div className='flex justify-end'>
                          <button className='bg-[#4F39F6] text-white rounded-full p-1 text-left mr-10 '>01</button>
                    </div>
                    <div className='flex flex-col text-center items-center gap-8'>
                    <img  src={img01} alt="" />
                    <h1 className='font-bold text-xl'>Create Acount</h1>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                    </div>
            </div>
                       <div>
                <div className='shadow'>
                    <div className='flex justify-end'>
                          <button className='bg-[#4F39F6] text-white rounded-full p-1 text-left mr-10'>02</button>
                    </div>
                    <div className='flex flex-col text-center items-center gap-8'>
                    <img  src={img02} alt="" />
                    <h1 className='font-bold text-xl'>Choose Products</h1>
                    <p>Browse our catalog and select the toolsthat fit your needs.</p>
                </div>
                    </div>
            </div>
                       <div>
                <div className='shadow'>
                    <div className='flex justify-end'>
                          <button className='bg-[#4F39F6] text-white rounded-full p-1 text-left mr-10'>03</button>
                    </div>
                    <div className='flex flex-col text-center items-center gap-8'>
                    <img  src={img03} alt="" />
                    <h1 className='font-bold text-xl'>Start Creating</h1>
                    <p>Download and start using your premium tools immediately.</p>
                </div>
                    </div>
            </div>
            </div>
         
        </div>
    );
};

export default GetStart;