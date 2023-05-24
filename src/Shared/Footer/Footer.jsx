import React from 'react';
import Footer1 from './Footer1';
import {FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="card lg:card-side shadow-xl rounded-none text-center justify-normal">
                <div className='card-body bg-base-100'>
                    <h2 className="card-title mx-auto">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="card-body bg-base-300 py-16">
                    <h2 className="card-title mx-auto">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className='flex flex-cols-3 mt-0 mx-auto'>
                        <FaFacebookF className='mr-4'></FaFacebookF>
                        <FaInstagram className='mr-4'></FaInstagram>
                        <FaTwitter></FaTwitter>
                    </div>

                </div>
            </div> 
            <Footer1></Footer1>
        </div>
    );
};

export default Footer;