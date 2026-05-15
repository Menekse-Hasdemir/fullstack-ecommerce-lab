
import aboutImage from '../assets/7466f01545eb1f33b39fa1e1f6b0ddf5bb703345.png';
import aboutGrowImage from '../assets/a01449552eeaef7ecedd3954687aefbdb6236bb6.jpg'
import GrowSection from '../components/GrowSection';
import preview from '../assets/preview.webp';
import TeamGrid from "../components/TeamPage";
import faBrands1 from "../assets/fa-brands-1.png";
import faBrands2 from "../assets/fa-brands-2.png";
import faBrands3 from "../assets/fa-brands-3.png";
import faBrands4 from "../assets/fa-brands-4.png";
import faBrands5 from "../assets/fa-brands-5.png";



    
    const HeroSection = ()=>{
        return(
            <section className="w-full bg-white overflow-hidden">
             <div className="flex md:flex-row flex-col gap-[40px] items-center max-w-[1050px] mx-auto px-4 py-[80px]">
                <div className="flex flex-col gap-[35px] text-center md:text-start">
                    <h5 className="font-bold text-[16px] text-[#252B42] hidden md:block">ABOUT COMPANY</h5>
                    <h1 className="font-bold text-[58px] text-[#252B42]">ABOUT US</h1>
                    <h4 className="font-normal text-[20px] text-[#737373]  md:max-w-[376px] max-w-[276px] ">We know how large objects will act, but things on a small scale</h4>
                    <button className="w-fit font-bold text[14px] text-white px-[40px] py-[15px] gap-[10px] rounded-[5px] bg-[#23A6F0]">Get Quote Now</button>
                </div>

                <div className="md:w-[550px] w-full">

                  <div className="absolute right-1/4 md:top-[150px] md:right-[300px] md:w-[350px] md:h-[350px] w-[250px] h-[250px] rounded-full bg-[#FFE9EA] opacity-80 z-0" />
                  <div className="absolute  md:left-[600px] md:w-[77px] md:h-[77px] w-[47px] h-[47px] rounded-full bg-[#FFE9EA] opacity-80 z-0" />
                <img
                     src={aboutImage}
                     alt="About Us"
                     className="w-full h-full  object-cover scale-[1.4]"
                 />
                </div>
             </div>
            </section>
        )
    }
    const ProblemsSection = ()=>{
        return(
            <section className="w-full bg-white">
                <div className="flex md:flex-row flex-col gap-[60px] max-w-[1018px] mx-auto py-10 px-4 items-center justify-between">
                    <div className="flex flex-col gap-[15px]">
                      <p className="font-normal text-[14px] text-[#E74040]">Problems trying</p>
                      <h3 className="font-bold text-[24px] text-[#252B42]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                    </div>

                    <div>
                     <p className="font-normal text-[14px] text-[#737373] py-">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
            </section>
        )
    }


    const StatsSection = ()=>{
        const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ]

        return(
            <section className="w-full bg-white">
                <div className="max-w-[1050px] mx-auto px-4 py-[80px] flex flex-col md:flex-row justify-between gap-[50px]">
                    {stats.map((stat,i)=>(
                      <div key={i} className="flex flex-col items-center text-center gap-[10px]">
                        <h1 className="font-bold text-[58px] text-[#252B42]">{stat.value}</h1>
                        <h5 className="font-bold text-[16px] text-[#737373]">{stat.label}</h5>
                      </div>
                    ))}
                </div>
                
            </section>
        )
    }

    const VideoSection = ()=>{
        return(
            <section>
                <div className="flex items-center">
                    <img
                    src={preview}
                    alt=""
                    className="md:max-w-[1050px] md:mx-[195px] max-w-[307px] mx-[54px] my-[81px]"
                    />
                </div>
            </section>
        )
    }

    const TeamSection = ()=>{
        return(
            <section>
              <TeamGrid/>  
            </section>
        )
    }

    const CompaniesSection = ()=>{
        return(
            <section className="w-full bg-[#FAFAFA]">
                <div className="flex flex-col max-w-[1050px] md:mx-[195px] py-[80px] px-4 gap-[24px]">
                    <div className=" justify-center md:max-w-[850px] max-w-[325px] text-center">
                      <h2 className="font-bold text-[40px] text-[#252B42]">Big Companies Are Here</h2>
                      <p className="font-normal text-[14px] text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>

                    <div className="flex gap-[50px] py-[50px] items-center justify-center flex-wrap">
                      <img src={faBrands1} alt="brand" className="object-contain" /> 
                      <img src={faBrands2} alt="brand" className="object-contain" /> 
                      <img src={faBrands3} alt="brand" className="object-contain" /> 
                      <img src={faBrands4} alt="brand" className="object-contain" /> 
                      <img src={faBrands5} alt="brand" className="object-contain" /> 
                    </div>
                </div>
            </section>
        )
    }
    
    const GrowCTA = ()=>{
        return(
        <GrowSection image={aboutGrowImage}/>
            
        )
    }

  export default function AboutUsPage(){
    return (
    <div className="w-full font-['Montserrat']">
      <HeroSection />
      <ProblemsSection/>
      <StatsSection />
      <VideoSection />
      <TeamSection />
      <CompaniesSection />
      <GrowCTA />
    </div>
  )
}