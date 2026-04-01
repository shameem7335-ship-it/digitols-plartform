import React from 'react';
import insta from '../../assets/products/Instagram.png';
import fcbk from '../../assets/products/Facebook.png';
import twtr from '../../assets/products/Twitter.png'


const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 ">
  <nav className='flex-1 '>
    <h6 className="footer-title  sm:text-4xl">Digitools</h6>
    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Social Links</h6>
    <div className='flex gap-2'>
     <a className="link link-hover"><img src={insta} alt="" /></a>
    <a className="link link-hover"><img src={fcbk} alt="" /></a>
    <a className="link link-hover"><img src={twtr} alt="" /></a>
    </div>
  </nav>
</footer>
   {/* <p>Copyright © {new Date().getFullYear()} - All right reserved</p> */}
        </div>
    );
};

export default Footer;