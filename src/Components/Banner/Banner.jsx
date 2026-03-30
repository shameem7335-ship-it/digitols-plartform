import React from 'react';
import bannerimg from '../../assets/products/banner.png'
import { Disc, Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero bg-base-200 px-25 py-15">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='ml-20 p-10'
      src={bannerimg}
    />
    <div className='space-y-3'>
        <button className='bg-[#E1E7FF] p-2 rounded-3xl flex gap-3'><Disc className='bg-[#4F39F6] rounded-full'></Disc><span className=' bg-linear-to-r  from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span></button>
      <h1 className="text-5xl font-bold">Supercharge Your <span>Digital Workflow</span></h1>
      <p className="py-6">
      Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today. 
      </p>
     <div className='space-x-4'>
         <button className="btn btn-primary rounded-2xl">Explore Products</button>
      <button className="btn rounded-2xl border border-[#9514FA]"><Play className='text-[#9514FA]'></Play><span className=' bg-linear-to-r  from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span></button></div>
    </div>
  </div>
</div>
   <div className='bg-linear-to-r  from-[#4F39F6] to-[#9514FA] flex justify-around p-10'>
       <div>
        <h1 className='text-white font-bold text-center'>50K+</h1>
        <p className='text-white text-center'>Active Users</p>
       </div>
       <div >
        <h1 className='text-white font-bold text-center'>50K+</h1>
        <p className='text-white text-center'>Active Users</p>
       </div>
       <div >
        <h1 className='text-white font-bold text-center'>50K+</h1>
        <p className='text-white text-center'>Active Users</p>
       </div>
    </div>
        </div>
    );
};

export default Banner;