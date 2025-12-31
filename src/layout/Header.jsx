import React from 'react';
import { Phone,Mail,Instagram,Youtube,Facebook,Twitter } from 'lucide-react';

export default function Header(){
    return (
    <header>
    <div className="w-full flex flex-col">

   <div className="font-['Montserrat'] hidden md:flex bg-[#252B42] text-white  py-2 px-9 justify-between items-center">

    <div className="flex items-center gap-[10px] h-[46px]">

        <div className="flex items-center gap-[5px] p-[10px]  font-bold text-white ttext-[14px] leading-[24px] tracking-[0.2px]">
            <Phone size={16} />
            <span>(225) 555-0118</span>
    
            </div>

        <div className=" flex items-center gap-[5px] p-[10px] font-bold text-white text-[14px] leading-[24px] tracking-[0.2px]">
            <Mail size={16} />
            <a href="mailto:michelle.rivera@example.com"  className="hover:underline">michelle.rivera@example.com</a>
        </div>
    </div>

    <div className="flex items-center gap-[10px] p-[10px] h-[44px]">
        <h6 className="font-bold text-white text-[14px] leading-[24px] tracking-[0.2px]">Follow Us and get a chance to win 80% off</h6>
    </div>

    <div className="flex items-center gap-[10px] p-[10px] h-[46px]">

        <h6 className="font-bold text-white text-[14px] leading-[24px] tracking-[0.2px]">Follow Us: </h6>
         
        <div className="flex items-center gap-[5px] w-[120px] h-[26px] p-[5px]">
              <a href="#" className="hover:opacity-80"><Instagram size={16} /></a>
              <a href="#" className="hover:opacity-80 "><Youtube size={16} /></a>
              <a href="#" className="hover:opacity-80 "><Facebook size={16} /></a>
              <a href="#" className="hover:opacity-80 "><Twitter size={16} /></a>
            </div>

    </div>
    
   </div>




   <div className="flex w-full h-[78px] " >
    <div className="flex items-center w-[187px] h-[58px] ml-[38px] ">
    <h3 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">Bandage</h3>
     </div>

     <div className="flex justify-between items-center ml-[265px] mr-[24px] h-[58px] w-[1155px]">
        <div>
    <nav>
        <a href ="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href ="/blog">Blog</a>
        <a href ="/contact">Contact</a>
        <a href="/pages">Pages</a>
    </nav>
     </div>

    <div>
        <span>Login/Register</span>
    </div>

   </div>

   </div>

    </div>
    </header>


    )
}
