 
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import questionsImage from '../assets/86715b0002656e5e55f527a50fe8ae2bc1e70550.jpg';
import heroBg from '../assets/shop-hero-1-product-slide-1.jpg';
import growImage from '../assets/7bc2f9fb559eeb7e6b92ed49f40128729a9f74f1.jpg';
 const HeroSection =()=>{
    return(
        <section>
           <div className="flex flex-col gap-[36px] max-w-[607px] mx-auto px-4 items-center text-center py-20">
            <h2 className="font-bold text-[50px] text-[#252B42]">Get answers to all your questions.</h2>
            <h4 className="font-normal text-[20px] text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: </h4>
            <button className="text-white bg-[#23A6F0] rounded-[5px] px-[40px] py-[15px] font-bold text-[14px]">CONTACT OUR COMPANY</button>
            <div className="flex gap-[20px] items-center">
            <FaTwitter className="text-[#737373] text-[24px] cursor-pointer hover:text-[#23A6F0]" />
            <FaFacebook className="text-[#737373] text-[24px] cursor-pointer hover:text-[#23A6F0]" />
            <FaInstagram className="text-[#737373] text-[24px] cursor-pointer hover:text-[#23A6F0]" />
            <FaLinkedin className="text-[#737373] text-[24px] cursor-pointer hover:text-[#23A6F0]" />
            </div>
            </div> 
        </section>
    )
 }

 const QuestionsSection=()=>{
        return(
            <section className="relative w-full">
             <div>
                <img
                src={questionsImage}
                alt="Questions ann Answers"
                className="w-full h-full object-cover"
                />
             </div>

             <div className="absolute top-0 left-0 w-full h-full  flex flex-col items-center justify-center gap-[36px]">
              
              <h2 className="font-bold text-[40px] text-[#252B42]">Questions & Answers</h2>
              <p className="font-medium text-[14px] text-[#737373] ">Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
              <h6 className="font-bold text-[14px] text-[#23A6F0]">CONTACT US</h6>
             </div>
             
            </section>
        )
    }

    const ContactUsSection=()=>{
        return(
            <section className="relative w-full overflow-hidden min-h-[757px]">
           
             <div>
                <img
                src={heroBg}
                alt="Contact Us"
                className="w-full h-full object-cover absolute inset-0"
                />
             </div>

             <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-75"></div>

             <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row text-white gap-[30px] items-center px-[112px]">
                <div className="flex flex-[2] flex-col gap-[36px] ">
                    <h2 className="font-bold text-[40px] ">CONTACT US</h2>
                    <p className="font-normal text-[14px] max-w-[360px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    <button className="font-bold text-[14px] px-[40px] py-[15px] w-fit rounded-[5px] bg-[#23A6F0]">CONTACT US</button>
                </div>

                <div className="flex-1 flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[16px]">
                    <h3 className="font-bold text-[24px]">Paris</h3>
                    <h4 className="font-normal text-[20px]">1901 Thorn ridge Cir.</h4>
                    <hr className="border-[#23A6F0] w-[58px]"/>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">75000 Paris</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Phone ; +451 215 215</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Fax : +451 215 215</h5>
                    </div>

                    <div className="flex flex-col gap-[16px]">
                    <h3 className="font-bold text-[24px]">Berlin</h3>
                    <h4 className="font-normal text-[20px]">4140 Parker Rd.</h4>
                    <hr className="border-[#23A6F0] w-[58px]"/>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">75000 Berlin</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Phone ; +451 215 215</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Fax : +451 215 215</h5>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[16px]">
                    <h3 className="font-bold text-[24px]">New York</h3>
                    <h4 className="font-normal text-[20px]">2715 Ash Dr. San Jose,</h4>
                    <hr className="border-[#23A6F0] w-[58px]"/>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">75000 New York</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Phone ; +451 215 215</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Fax : +451 215 215</h5>
                    </div>

                    <div className="flex flex-col gap-[16px]">
                    <h3 className="font-bold text-[24px]">London</h3>
                    <h4 className="font-normal text-[20px]">3517 W. Gray St. Utica,</h4>
                    <hr className="border-[#23A6F0] w-[58px]"/>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">75000 London</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Phone ; +451 215 215</h5>
                    <h5 className="font-bold text-[16px] text-[#ECECEC]">Fax : +451 215 215</h5>
                    </div>
                </div>
             </div>
            </section>
        )
    }

    const GrowSection=()=>{
        return(
            <section className="[w-full]">
            <div className="flex flex-row ">
             <div className="bg-[#23A6F0] flex items-center pl-[60px] pr-[250px] py-[80px]">
               <div className="text-white md:w-[438px] pl-[50px] flex flex-col gap-[24px] ">
               <h5 className="font-bold text-[16px]">WORK WITH US</h5>
               <h2 className="font-bold text-[40px]">Now Let’s grow Yours</h2>
               <p className="font-normal text-[14px]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th</p>
               <button className="font-normal text-[14px] rounded-[5px] px-[40px] py-[15px] border-[1px] border-[#FAFAFA] hover:bg-white hover:text-[#23A6F0] transition-colors w-fit">Contact Us</button>
               </div>
             </div>   
             <div className="hidden md:block">
               <img
                src={growImage}
                alt="Work With Us"
                className="w-full h-full  object-cover"
                />
             </div>
            </div>
            </section>
        )
    }


 export default function ContactPage() {
    return (
    <div className="w-full font-['Montserrat']">
      <HeroSection />
      <QuestionsSection />
      <ContactUsSection />
      <GrowSection />
    </div>
  )
}