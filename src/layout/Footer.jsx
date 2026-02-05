import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="flex flex-col w-full bg-white font-['Montserrat']">
            
            
            <div className="bg-[#FAFAFA] border-b border-[#E6E6E6]">
                <div className="max-w-[1050px] mx-auto py-[40px] px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
                    
                    
                    <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
                            Bandage
                        </h3>
                    </div>

                    
                    <div className="flex gap-[20px] text-[#23A6F0]">
                        <FaFacebook className="text-[24px] cursor-pointer hover:opacity-80" />
                        <FontAwesomeIcon icon={faInstagram} className="text-[24px] cursor-pointer hover:opacity-80"/>
                        <FontAwesomeIcon icon={faXTwitter} className="text-[24px] cursor-pointer hover:opacity-80" />
                    </div>

                </div>
            </div>

            
            <div className="bg-white w-full">
                <div className="max-w-[1050px] mx-auto py-[50px] px-4">
                    
                    
                    <div className="flex flex-col md:flex-row justify-between gap-[30px]">

                        
                        <div className="flex flex-col gap-[20px] min-w-[148px]">
                            <h5 className="text-[16px] font-bold text-[#252B42]">Company Info</h5>
                            <div className="flex flex-col gap-[10px] text-[14px] font-bold text-[#737373]">
                                <Link to="/about" className="hover:text-[#23A6F0]">About Us</Link>
                                <Link to="/carrier" className="hover:text-[#23A6F0]">Carrier</Link>
                                <Link to="/hiring" className="hover:text-[#23A6F0]">We are hiring</Link>
                                <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] min-w-[148px]">
                            <h5 className="text-[16px] font-bold text-[#252B42]">Legal</h5>
                            <div className="flex flex-col gap-[10px] text-[14px] font-bold text-[#737373]">
                                <Link to="/about" className="hover:text-[#23A6F0]">About Us</Link>
                                <Link to="/carrier" className="hover:text-[#23A6F0]">Carrier</Link>
                                <Link to="/hiring" className="hover:text-[#23A6F0]">We are hiring</Link>
                                <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] min-w-[148px]">
                            <h5 className="text-[16px] font-bold text-[#252B42]">Features</h5>
                            <div className="flex flex-col gap-[10px] text-[14px] font-bold text-[#737373]">
                                <Link to="/about" className="hover:text-[#23A6F0]">Business Marketing</Link>
                                <Link to="/carrier" className="hover:text-[#23A6F0]">User Analytic</Link>
                                <Link to="/hiring" className="hover:text-[#23A6F0]">Live Chat</Link>
                                <Link to="/blog" className="hover:text-[#23A6F0]">Unlimited Support</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] min-w-[148px]">
                            <h5 className="text-[16px] font-bold text-[#252B42]">Resources</h5>
                            <div className="flex flex-col gap-[10px] text-[14px] font-bold text-[#737373]">
                                <Link to="/about" className="hover:text-[#23A6F0]">IOS & Android</Link>
                                <Link to="/carrier" className="hover:text-[#23A6F0]">Watch a Demo</Link>
                                <Link to="/hiring" className="hover:text-[#23A6F0]">Customers</Link>
                                <Link to="/blog" className="hover:text-[#23A6F0]">API</Link>
                            </div>
                        </div>

                        
                        <div className="flex flex-col gap-[20px] w-full md:max-w-[321px]">
                            <h5 className="text-[16px] font-bold text-[#252B42]">Get In Touch</h5>
                            <div className="flex flex-row w-full h-[58px] border border-[#E6E6E6] rounded-[5px] overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-grow bg-[#F9F9F9] px-[20px] text-[14px] text-[#737373] outline-none"
                                />
                                <button className="bg-[#23A6F0] text-white px-[22px] text-[14px] hover:bg-[#1a85c2]">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[12px] text-[#737373]">Lore imp sum dolor Amit</p>
                        </div>

                    </div>
                </div>
            </div>

           
            <div className="w-full bg-[#FAFAFA] py-[25px]">
                <div className="max-w-[1050px] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between">
                    <h6 className="font-bold text-[14px] text-[#737373] text-center md:text-left">
                        Made With Love By Finland All Right Reserved
                    </h6>
                </div>
            </div>

        </footer>
    );
}