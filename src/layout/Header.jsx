import React, { useState } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, ChevronDown, User, Search, ShoppingCart, Menu, X,Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col font-['Montserrat'] bg-white">
      
     
      <div className="hidden lg:flex bg-[#252B42] text-white py-2">
        <div className="max-w-[1050px] mx-auto w-full flex justify-between items-center px-2">
          <div className="flex items-center gap-4 font-bold text-[14px]">
            <div className="flex items-center gap-1"><Phone size={16} /><span>(225) 555-0118</span></div>
            <div className="flex items-center gap-1"><Mail size={16} /><span>michelle.rivera@example.com</span></div>
          </div>
          <div className="font-bold text-[14px]">Follow Us and get a chance to win 80% off</div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-[14px]">Follow Us : </span>
            <Instagram size={16} /><Youtube size={16}/><Facebook size={16}/><Twitter size={16}/></div>
        </div>
      </div>

      <nav className="w-full bg-white relative z-50">
        
        <div className="max-w-[1050px] mx-auto w-full px-2 h-[78px] flex justify-between items-center">
          
          
          <div className="flex-shrink-0">
             <Link to="/" className="text-[#252B42] font-bold text-[24px]">Bandage</Link>
          </div>

          
          <div className="hidden md:flex items-center gap-[15px] font-bold text-[14px] text-[#737373]">
            <Link to="/">Home</Link>
            <Link to="/shop" className="flex items-center gap-1">Shop <ChevronDown size={14}/></Link>
            <Link to="/team">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          
          <div className="flex items-center text-[#23A6F0] gap-1">

            <Link to="/login" className="hidden lg:flex items-center gap-1 p-2 font-bold text-[14px]">
              <User size={18} />
              <span>Login / Register</span>
            </Link>
            
            
            <button className="p-2"><Search size={20} /></button>
            <button className="p-2 flex items-center">
              <ShoppingCart size={20} />
              <span className="hidden text-[12px] ml-1">1</span>
            </button>
            <button className="hidden lg:flex p-2 items-center">
              <Heart size = {20}/>
              <span className="text-[12px] ml-1">1</span>
            </button>
            
            
            <button 
              className="md:hidden p-2 text-[#252B42]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="absolute top-[78px] left-0 w-full bg-white py-12 md:hidden  shadow-2xl">
            <div className="flex flex-col items-center gap-8 text-[#737373] text-[30px] font-normal leading-[45px]">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link>
                <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/team" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}