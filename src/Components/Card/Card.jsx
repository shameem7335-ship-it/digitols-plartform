import React, { useState } from 'react';


const Card = ({ handleCart, productData, setCartItem, cartItem}) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
            {productData.map((product, index)  => {
              console.log(product.img)
              console.log(product.name)

              const [btnText, setBtnText] = useState(true);

              const handleCart = () => {
      setCartItem ([...cartItem, product])
      setBtnText(false)

    }
     return <div key={index}  >
                <div className="card w-96 bg-base-100 shadow-sm ">
  <div className="card-body">
    <div className=' flex justify-end'>
    <span className={` px-3 py-1 items-center text-center rounded-full
    ${product.tag==='popular' ? ' text-[#BB4D00] bg-[#FEF3C6]': product.tag==='best seller' ? 'text-[#627382] bg-[#E1E7FF]' : product.tag==='new' ?'text-[#0A883E] bg-[#DBFCE7]' : ''}
    `}
    >{product.tag}</span>
    </div>
    <div className='border border-2'>
      <img src={product.img} alt="" />
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
            product.features.map((featre, index) =>{
             return <ul key={index}>
                <li>
                   <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> {featre}
                </li>
              </ul>
            })
           }
    <div className="mt-6">
  <button type="button" onClick={()=>handleCart(product)} className="btn btn-primary btn-block">
    {
      btnText ? 'Buy now' : 'Added to cart'
   }</button>
    </div>
  </div>
</div>
            </div>
            })}
           
        </div>
        </div>
    );
};

export default Card;