import React from 'react';
import checkimg from '../../assets/products/Check.png'
const Pricing = () => {
    return (
        <div className='container mx-auto '>
                    <div className='text-center items-center'>
                    <h1 className='font-bold text-2xl'>Simple, Transparent Pricing</h1>
                    <h1 className='px-15'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</h1>
                    </div>
                    <div className='grid grid-cols-1  sm:grid-cols-3 justify-around m-4 sm:m-20 gap-10'>
                               
                        <div className='shadow p-10 space-y-8 rounded-md transition-all duration-300 hover:scale-105 hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white'>
                           <h1 className='font-bold'>Starter</h1>
                           <p>Perfect for getting started</p>
                           <p> <span className='font-bold text-xl'>$0</span>/month</p>
                           <ul>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Access to 10 free tools</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Basic templates</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Community support</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />1 project per month</li>
                           </ul>
                           <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Get Started Free</button>
                        </div>
                               
                        <div className='shadow  p-10 space-y-8 rounded-md transition-all duration-300 hover:scale-105 hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white'>
                             <h1 className='font-bold'>Pro</h1>
                           <p>Best for professionals</p>
                           <p> <span className='font-bold text-xl'>$29</span>/month</p>
                           <ul>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Access to all premium tools</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Unlimited templates</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Priority support</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Unlimited projects</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Cloud sync</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Advanced analytics</li>
                           </ul>
                           <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Start Pro Trial</button>
                            
                       </div>
                               
                        <div className='shadow  p-10 space-y-8 rounded-md transition-all duration-300 hover:scale-105 hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white'>
                             <h1 className='font-bold'>Enterprise</h1>
                           <p>For teams and businesses</p>
                           <p> <span className='font-bold text-xl'>$99</span>/month</p>
                           <ul>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Everything in Pro</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Team collaborations</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Custom integrations</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Dedicated support</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />SLA guarantee</li>
                            <li className='flex gap-3'><img src={checkimg} alt="" />Custom branding</li>
                           </ul>
                           <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full'>Contact Sales</button>
                            
                         </div>
                    </div>
                 
                </div>
    );
};

export default Pricing;