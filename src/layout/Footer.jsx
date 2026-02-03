import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
    <footer className="flex flex-col w-full bg-white font-['Montserrat']">
        <div className="bg-[#FAFAFA] border-b border-[#E6E6E6]">
            <div className="max-w-[1050px] mx-auto py-[40px] flex justify-between items-center px-4">
                <div className="flex">
                    <div className="w-[236px] h-[58px] flex items-center">
                        <div className="w-[187px] h-[58px] flex flex-col justify-center gap-[10px]">
                            <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">Bandage</h3>
                        </div>
                        
                    </div>
                    
                    <div className="w-[236px] flex justify-end items-center">
                        <div className="flex gap-[20px] text-[#23A6F0] hover:opacity-80 cursor-pointer">                           
                            <FaFacebook className="text-[24px]" />
                            <FontAwesomeIcon icon={faInstagram} className="text-[24px]"/>
                            <FontAwesomeIcon icon={faXTwitter} className="text-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white w-full top-[142px]">
            <div className="max-w-[1050px] mx-auto py-[50px] px-4 flex flex-col ">

                <div className="flex flex-row justify-between gap-[30px] font-bold font-['Montserrat']">

                    <div className="w-[148px] flex flex-col gap-[20px]">
                        <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Company Info</h5>
                        <div className="flex flex-col gap-[10px] text-[14px]  leading-[24px] tracking-[0.2px] text-[#737373]">
                            <Link to="/about" className="hover:text-[#23A6F0] transition-colors duration-300">About Us</Link>
                            <Link to="/carrier" className="hover:text-[#23A6F0] transition-colors duration-300">Carrier</Link>
                            <Link to="/hiring" className="hover:text-[#23A6F0] transition-colors duration-300">We are hiring</Link>
                            <Link to="/blog" className="hover:text-[#23A6F0] transition-colors duration-300">Blog</Link>
                        </div>
                    </div>

                    <div className="w-[152px] flex flex-col gap-[20px]">
                        <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Legal</h5>
                        <div className="flex flex-col gap-[10px] text-[14px]  leading-[24px] tracking-[0.2px] text-[#737373]">
                            <Link to="/about" className="hover:text-[#23A6F0] transition-colors duration-300">About Us</Link>
                            <Link to="/carrier" className="hover:text-[#23A6F0] transition-colors duration-300">Carrier</Link>
                            <Link to="/hiring" className="hover:text-[#23A6F0] transition-colors duration-300">We are hiring</Link>
                            <Link to="/blog" className="hover:text-[#23A6F0] transition-colors duration-300">Blog</Link>
                        </div>
                    </div>

                    <div className="w-[148px] flex flex-col gap-[20px]">
                        <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Features</h5>
                        <div className="flex flex-col gap-[10px] text-[14px]  leading-[24px] tracking-[0.2px] text-[#737373]">
                            <Link to="/about" className="hover:text-[#23A6F0] transition-colors duration-300 whitespace-nowrap">Businnes Marketing</Link>
                            <Link to="/carrier" className="hover:text-[#23A6F0] transition-colors duration-300">User Analytic</Link>
                            <Link to="/hiring" className="hover:text-[#23A6F0] transition-colors duration-300">Live Chat</Link>
                            <Link to="/blog" className="hover:text-[#23A6F0] transition-colors duration-300">Unlimited Support</Link>
                        </div>
                    </div>

                    <div className="w-[152px] flex flex-col gap-[20px]">
                        <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Resources</h5>
                        <div className="flex flex-col gap-[10px] text-[14px]  leading-[24px] tracking-[0.2px] text-[#737373]">
                            <Link to="/about" className="hover:text-[#23A6F0] transition-colors duration-300">IOS & Android</Link>
                            <Link to="/carrier" className="hover:text-[#23A6F0] transition-colors duration-300">Watch a Demo</Link>
                            <Link to="/hiring" className="hover:text-[#23A6F0] transition-colors duration-300">Customers</Link>
                            <Link to="/blog" className="hover:text-[#23A6F0] transition-colors duration-300">API</Link>
                        </div>
                    </div>

                    <div className="w-[321px] flex flex-col gap-[20px]">
                        <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Get In Touch</h5>
                        <div className="flex flex-row  w-full h-[58px] max-w-[321px] border border-[#E6E6E6] overflow-hidden rounded-[5px]">
                            <input
                               type="email"
                               placeholder="Your Email"
                               className="flex-grow min-w-0 bg-[#F9F9F9] px-[20px] text-[14px] text-[#737373] outline-none font-['Montserrat']"
                            
                            />

                           
                            <button className="bg-[#23A6F0] text-white px-[22.5px] text-[14px] font-['Montserrat'] flex-shrink-0 whitespace-nowrap hover:bg-[#1a85c2] transition-colors">
                             Subscribe
                            </button>
                        </div>
                        <p className="font-['Montserrat'] text-[12px] leading-[28px] tracking-[0.2px] text-[#737373]">
                        Lore imp sum dolor Amit
                        </p>
                    </div>

                </div>

            </div>

        </div>



        <div className="w-full bg-[#FAFAFA] py-[25px]">
            <div className="flex flex-col max-w-[1050px] mx-auto px-4 justify-start">
                <div className="flex gap-[213px]">
                    <h6 className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                        Made With Love By Finland All Right Reserved 
                    </h6>

                </div>

            </div>
 
        </div>
        
    

    </footer>
    );
}