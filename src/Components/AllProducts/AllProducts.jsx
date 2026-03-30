import React, { use } from 'react';
import productImg from '../../assets/products/social-media.png'

const AllProducts = ({productsPromise}) => {
    console.log(productsPromise);
    const productData = use(productsPromise);
console.log(productData)

    return (
        <div className='grid grid-cols-3 gap-4'>
            {productData.map((product, index)  => {
     return <div key={index}  >
                <div className="card w-96 bg-base-100 shadow-sm ">
  <div className="card-body">
    <div className=' flex justify-end'>
    <span className={` px-3 py-1 items-center text-center rounded-full
    ${product.tag==='popular' ? ' text-[#BB4D00] bg-[#FEF3C6]': product.tag==='best seller' ? 'text-[#627382] bg-[#E1E7FF]' : product.tag==='new' ?'text-[#0A883E] bg-[#DBFCE7]' : ''}
    `}
    >{product.tag}</span>
    </div>
    <div>
      <img src={productImg} alt="" />
      </div>
    <div className="">
      <h2 className="text-3xl font-bold">{product.name}</h2>
    </div>
    <div>
      <h2>{product.description}
      </h2>
      </div>
      <div className="text-xl">{product.price}/{product.period}</div>
     
           {
            product.features.map(featre =>{
             return <ul>
                <li>
                   <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> {featre}
                </li>
              </ul>
            })
           }
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Buy now</button>
    </div>
  </div>
</div>
            </div>
            })}
           
        </div>
    );
};

export default AllProducts;