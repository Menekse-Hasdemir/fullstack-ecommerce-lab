
const GrowSection=({image})=>{
        return(
            <section className="w-full overflow-hidden">
            <div className="flex flex-row ">
             <div className="bg-[#23A6F0] pr-[250px] flex flex-1 items-center pl-[60px]  py-[80px]">
               <div className="text-white md:w-[438px] pl-[50px] flex flex-col gap-[24px] ">
               <h5 className="font-bold text-[16px]">WORK WITH US</h5>
               <h2 className="font-bold text-[40px]">Now Let’s grow Yours</h2>
               <p className="font-normal text-[14px]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th</p>
               <button className="font-normal text-[14px] rounded-[5px] px-[40px] py-[15px] border-[1px] border-[#FAFAFA] hover:bg-white hover:text-[#23A6F0] transition-colors w-fit">Contact Us</button>
               </div>
             </div>   
             <div className="hidden md:block">
               <img
                src={image}
                alt="Work With Us"
                className="w-full h-full  object-cover"
                />
             </div>
            </div>
            </section>
        )
    }

    export default GrowSection;