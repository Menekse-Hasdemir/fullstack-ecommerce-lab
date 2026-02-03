import React from 'react';
import heroBg from '../assets/shop-hero-1-product-slide-1.jpg';
import menImage from '../assets/9da5ab42c0357746eb27e42fff6279478e2c8a48.jpg';
import womenImage from '../assets/b384eba608bd8616723a95d25fce7dcb8f25ba9d.jpg';
import accessoriesImage from '../assets/5077f785cbfd4a6cf9efad13d9b5d66b1b7cbf4f.jpg';
import kidsImage from '../assets/edfcad0dba1967435dad649ed91c2e00be5f640f.jpg';
import bestImage1 from '../assets/23057910d190d178c2a7b276e896b9d38b982bf6.jpg';
import bestImage2 from '../assets/edfda1c222054dedce3ff32fe480d8fc8eb07474.jpg';
import bestImage3 from '../assets/4a6a10161217dc07ba1cda4632e93a5851162bcb.jpg';
import bestImage4 from '../assets/74e648e43f346f3e64ec6890751ec33b3c7f5197.jpg';
import bestImage5 from '../assets/41ba1a582a6be5d0abdf4716fbac8cd3a73cb266.jpg';
import bestImage6 from '../assets/a4b9d5defc9e3b83803619da05903140ffc77947.jpg';
import bestImage7 from '../assets/110bc11c4432558f247264194359558513a225fe.jpg';
import bestImage8 from '../assets/c91168410dcfe4d267b32aaf7b21288f7b9656f2.jpg';
import vitaImage from '../assets/vita.png';
import neuralImage from '../assets/5f8ce73d1a41b674cbd12f927c7ea9a6ca0ce76c.png';
import postImage1 from '../assets/679b3cdf17b8ec542ce1c452944dfb51f10ba010.jpg';
import postImage2 from '../assets/412d5bc5d51defa7e9522a5eb5f534d0442131b2.jpg';
import postImage3 from '../assets/af91645f60a447510f7b4e8aa158f122b0d1fe29.jpg';


import { Link } from 'react-router-dom';


export default function ShopPage(){
    return (
        <div className="w-full font-['Montserrat'] min-h-screen overflow-x-hidden">
           
            <section className="relative w-full md:min-h-[716px] h-[600px] flex items-center bg-[#23A6F0] overflow-hidden"> 
           

            <div className="absolute inset-0 z-0">
            <img 
            src={heroBg} 
            alt="New Collection" 
            className="w-full h-full object-cover"
          />
        </div>



        <div className="relative z-10 flex flex-col gap-[80px] text-white max-w-[1044px] ml-[197.5px] py-[112px]">

            <div className="flex flex-row py-[48px] gap-[30px] "> 

                <div className="flex flex-col gap-[35px]">
                 <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]  h-[24px]">SUMMER 2020</h5>
                 <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px]  h-[80px]">NEW COLLECTION</h1>
                 <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[376px] h-[60px]">We know how large objects will act, but things on a small scale.</h4>
                 <button className="font-bold rounded-[5px] px-[40px] py-[15px]  gap-[10px] bg-[#2DC071] w-fit">SHOP NOW</button>
                </div>

                <div className="flex w-[415px]"> </div>

            </div>

            </div>



            <div className="absolute bottom-[35px] left-1/2 -translate-x-1/2 flex gap-[5px] z-20">

                <div className="w-[62px] h-[10px] bg-[#FFFFFF]"> </div>

                <div className="w-[63px] h-[10px] bg-[#FFFFFF] opacity-50"> </div>

                </div>

                <button className="absolute font-normal text-white text-[58px] w-[24px] h-[44.47px] left-[40px] top-[283px] z-20 items-center justify-center"> ❮ </button>
                <button className="absolute font-normal text-white text-[58px] w-[24px] h-[44.47px] right-[40px] top-[283px] z-20 items-center justify-center"> ❯ </button>
        
        </section>




        <section className="w-full bg-[#FAFAFA] ">
            
                <div className="max-w-[1050px] mx-auto py-[80px] gap-[48px] flex flex-col items-center px-4">



            <div className="gap-[10px] max-w-[607px] w-full text-center">
                <h2 className="font-['Montserrat'] font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">EDITOR'S PICK</h2>
                <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between</p>
            </div>



            <div className="gap-[30px] flex flex-row max-w-[1050px] w-full">


                <div className="relative w-[510px] h-[500px] overflow-hidden">
                    <img
                    src={menImage}
                    alt="Men"
                    className="w-full h-full object-cover"
                    />

                <div className="flex absolute left-[31px] top-[426px] w-[170px] h-[48px] bg-white items-center justify-center">
                    <span className="font-bold text-[16px] tracking-[0.1px] leading-[24px]">MEN</span>
                </div>
                </div>

                <div className="relative w-[240px] h-[500px] overflow-hidden">
                  <img
                    src={womenImage}
                    alt="Women"
                    className="w-full h-full object-cover"
                    />  
                <div className="flex absolute left-[21px] top-[434px] w-[136px] h-[48px] bg-white items-center justify-center px-[48px] py-[12px] gap-[10px]">
                    <span className="font-bold text-[16px] tracking-[0.1px] leading-[24px]">WOMEN</span>
                </div>
                </div>

                <div className="flex flex-col relative w-[240px] h-[500px] overflow-hidden gap-[16px]">

                    <div className="relative w-[240px] h-[242px]">
                      <img
                    src={accessoriesImage}
                    alt="Accessories"
                    className="w-full h-full object-cover"
                    />   
                    <div className="flex absolute left-[14px] top-[171px] w-[170px] h-[48px] bg-white items-center justify-center px-[26px] py-[12px] gap-[10px]">
                        <span className="font-bold text-[16px] tracking-[0.1px] leading-[24px]">ACCESSORIES</span>
                    </div>
                    </div>


                    <div className="relative w-[240px] h-[242px]">
                        <img
                    src={kidsImage}
                    alt="Kids"
                    className="w-full h-full object-cover"
                    /> 
                    <div className="flex absolute left-[18px] top-[176px] w-[120px] h-[48px] bg-white items-center justify-center px-[40px] py-[12px] gap-[10px]">
                        <span className="font-bold text-[16px] tracking-[0.1px] leading-[24px]">KIDS</span>
                    </div>
                    </div>


                </div>



            </div>


            </div>
            
        </section>




        <section className="w-full bg-white ">
           <div className="max-w-[1124px] mx-auto py-[80px] gap-[80px] flex flex-col items-center px-4"> 
              

                <div className="flex flex-col gap-[10px] max-w-[691px] w-full text-center font-['Montserrat']">
                     <h4 className="font-normal text-[20px] tracking-[0.2px] leading-[30px] text-[#737373]">Featured Products</h4>
                     <h3 className="font-bold text-[24px] tracking-[0.1px] leading-[32px] text-[#252B42]">BESTSELLER PRODUCTS</h3>
                     <p className="font-normal text-[14px] tracking-[0.2px] leading-[20px] text-[#737373]">Problems tryying to resolve conflict between</p>
                </div>



                <div className=" flex flex-row max-w-[1049px] mx-auto gap-[30px] overflow-hidden">

                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage1}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>



                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage2}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage3}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>



                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage4}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>


                  
                </div>





            <div className=" flex flex-row max-w-[1049px] mx-auto gap-[30px] overflow-hidden">

                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage5}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>



                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage6}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage7}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>



                    <div className="flex flex-col">
                        <div className="w-[239px] h-[427px]">
                        <img
                        src={bestImage8}
                        alt="Product"
                        className="w-full h-full object-cover"
                        />
                        </div>

                        <div className="flex flex-col w-[239px] top-[25px] bottom-[35px] px-[25px] gap-[10px]">
                             <h5 className="font-bold text-[16px] text-[#252B42]">Graphic Design</h5>
                             <Link to="/shop/english-department" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">English Department</Link>
                             
                             <div className="flex gap-[5px] py-[5px] px-[3px]">
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">$16.48</span>
                             <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</span>
                             </div>

                             <div className="flex gap-[6.08px]">
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                                <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                             </div>
                        </div>
                    </div>


                  
                </div>

           
           </div>

        </section>



        <section className="flex w-full h-[711px] bg-[#23856D] text-white overflow-hidden relative">

          <div className="w-[1440px] mx-auto w-full flex flex-col items-center px-[200px]">

            <div className="w-full py-[112px] "> 

                <div className="h-[599px] gap-[30px] "> 

                  <div className="flex w-full items-center justify-between"> 

                    <div className="flex flex-col w-[509px] gap-[30px] font-['Montserrat']">

                        <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] w-[154px] h-[30px]">SUMMER 2020</h4>
                        <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] w-[509px] h-[160px]">Vita Classic Product</h1>
                        <p className="font- normal text-[14px] leading-[20px] tracking-[0.2px] w-[341px] h-[40px]">We know how large objects will act, We know how are objects will act, We know</p>
                        <div className="gap-[34px] flex flex-row">
                            <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] w-[77px] h-[32px]">$16.48</h3>
                            <button className="bg-[#2DC071] py-[15px] px-[40px] rounded-[5px] gap-[10px] font-bold text-[14px] leading-[22px] tracking-[0.2px]">ADD TO CART</button>
                        </div>
                    </div>

                        <div className="w-[510px] h-[685px]">
                        <img
                        src={vitaImage}
                        alt="Model"
                        className="w-full h-full object-contain"
                        />
                        
                        </div>

                   </div>   

                </div>

            </div>


          </div>

          <div className="absolute bottom-[48px] left-1/2 -translate-x-1/2 flex gap-[2px]">
  
                       <div className="w-[62px] h-[10px] bg-white opacity-100"></div>
  
                       <div className="w-[62px] h-[10px] bg-white opacity-50"></div>
                    </div>

                    <button className="absolute left-[30px] top-1/2 -translate-y-1/2 text-white text-[48px] font-light">❮</button>
                    <button className="absolute right-[30px] top-1/2 -translate-y-1/2 text-white text-[48px] font-light">❯</button>

        </section>

        
        <section className="bg-white w-full min-h-[682px] flex justify-center overflow-hidden">

            <div className="flex flex-row items-center justify-between gap-[10px] w-full max-w-[1439px] px-4">
                <div className="relative w-[704px] h-[682px] overflow-hidden  shrink-0 ml-[100px]">
                <img
                src={neuralImage}
                alt="Neural Universe Couple"
                className="absolute max-w-[725px] w-full h-[774px] object-cover bottom-0 left-[-137px]"
                />
                </div> 

                <div className="flex flex-col font-['Montserrat'] w-[537px] gap-[30px] ml-[30px]">
                    <h5 className="w-[122px] h-[24px] w-full font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">SUMMER 2020</h5>
                    <h2 className="w-[375px] h-[100px] w-full font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Part of the Neural Universe</h2>
                    <h4 className="max-w-[376px] h-[60px] w-full font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">We know how large objects will act, but things all a small scale.</h4>
                    <div className="flex flex-row gap-[10px]">
                        <button className="bg-[#2DC071] py-[15px] px-[40px] rounded-[5px] gap-[10px] font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">BUY NOW</button>
                        <button className="bg-white border border-[#2DC071] py-[15px] px-[40px] rounded-[5px] gap-[10px] font-bold text-[14px] leading-[22px] tracking-[0.2px] text-[#2DC071]">READ MORE</button>

                    </div>
                </div>

            </div>
        </section>



        <section className="w-full bg-white">
            <div className="flex flex-col max-w-[1050px] mx-auto py-[112px] gap-[80px] items-center text-center font-['Montserrat']"> 
               
               <div className="flex flex-col items-center gap-[10px] text-center max-w-[691px] w-full"> 
                   <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">Practice Advice</h6>
                   <h3 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Featured Posts</h3>
                   <p className="max-w-[469px] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between <br className="hidden md:block" />
                   the two major realms of Classical physics: Newtonian mechanics</p>
                   
               </div>

            <div className="flex flex-row gap-[10px] justify-center w-full">
      
               <div className="flex flex-col w-[348px] min-h-[606px] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)]"> 
                  <div className="relative w-full h-[300px] overflow-hidden shrink-0">
                     <img 
                       src={postImage1}
                       alt="Post 1" 
                       className="w-full h-full object-cover"
                     />

                     <div className="absolute top-[20px] left-[20px] bg-[#E74C3C] text-white px-[10px] py-[0px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-bold text-[14px] leading-[24px]">NEW</div>

                  </div>

                  <div className="flex flex-col gap-[10px] px-[25px] pt-[25px] pb-[35px] items-start text-left">
                    <div className="flex gap-[15px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                        <small className="text-[#8EC2F2]">Google</small>
                        <small className="text-[#737373]">Trending</small>
                        <small className="text-[#737373]">New</small>
                    </div>

                    <h4 className="text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal">Loudest à la Madison #1 (L'integral)</h4>

                    <p className="className=text-[#737373] text-[14px] leading-[20px] tracking-[0.2px]">We focus on ergonomics and meeting you where you work. It's only a<br className="hidden md:block" />keystroke away.</p>

                    <div className="flex flex-row justify-between items-center w-full py-[15px]">
                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               width="16" 
                               height="16" 
                               viewBox="0 0 24 24" 
                               fill="none" 
                               stroke="currentColor" 
                               stroke-width="2" 
                               stroke-linecap="round" 
                               stroke-linejoin="round" 
                               class="ai ai-Clock"
                               className="text-[#23A6F0]"
                               >
                                <circle cx="12" cy="12" r="10"/>
                               <path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"/>
                               </svg>
                          <span>22 April 2021</span>
                        </div>

                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               viewBox="0 0 1024 1024" 
                               width="16" height="14.67" 
                               fill="#23856D" 
                               style={{ opacity: 1 }}>
    
                               <path  d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8"/>
                          </svg>
                          <span>10 comments</span>
                        </div>

                        
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer group">
                            <span className="text-[#737373] font-bold text-[14px] leading-[24px]">Learn More</span>
                            <svg 
                             xmlns="http://www.w3.org/2000/svg" 
                             width="9" 
                             height="16" 
                             viewBox="0 0 9 16" 
                             fill="none"
                             className="text-[#23A6F0]" 
                            >
                            <path 
                             d="M1 1L8 8L1 15" 
                             stroke="currentColor" 
                             strokeWidth="2" 
                             strokeLinecap="round" 
                             strokeLinejoin="round"
                            />
                            </svg>

                        </div>

                  </div>

               </div>


               <div className="flex flex-col w-[348px] min-h-[606px] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)]"> 
                  <div className="relative w-full h-[300px] overflow-hidden shrink-0">
                     <img 
                       src={postImage2}
                       alt="Post 2" 
                       className="w-full h-full object-cover"
                     />

                     <div className="absolute top-[20px] left-[20px] bg-[#E74C3C] text-white px-[10px] py-[0px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-bold text-[14px] leading-[24px]">NEW</div>

                  </div>

                  <div className="flex flex-col gap-[10px] px-[25px] pt-[25px] pb-[35px] items-start text-left">
                    <div className="flex gap-[15px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                        <small className="text-[#8EC2F2]">Google</small>
                        <small className="text-[#737373]">Trending</small>
                        <small className="text-[#737373]">New</small>
                    </div>

                    <h4 className="text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal">Loudest à la Madison #1 (L'integral)</h4>

                    <p className="className=text-[#737373] text-[14px] leading-[20px] tracking-[0.2px]">We focus on ergonomics and meeting you where you work. It's only a<br className="hidden md:block" />keystroke away.</p>

                    <div className="flex flex-row justify-between items-center w-full py-[15px]">
                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               width="16" 
                               height="16" 
                               viewBox="0 0 24 24" 
                               fill="none" 
                               stroke="currentColor" 
                               stroke-width="2" 
                               stroke-linecap="round" 
                               stroke-linejoin="round" 
                               class="ai ai-Clock"
                               className="text-[#23A6F0]"
                               >
                                <circle cx="12" cy="12" r="10"/>
                               <path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"/>
                               </svg>
                          <span>22 April 2021</span>
                        </div>

                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               viewBox="0 0 1024 1024" 
                               width="16" height="14.67" 
                               fill="#23856D" 
                               style={{ opacity: 1 }}>
    
                               <path  d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8"/>
                          </svg>
                          <span>10 comments</span>
                        </div>

                        
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer group">
                            <span className="text-[#737373] font-bold text-[14px] leading-[24px]">Learn More</span>
                            <svg 
                             xmlns="http://www.w3.org/2000/svg" 
                             width="9" 
                             height="16" 
                             viewBox="0 0 9 16" 
                             fill="none"
                             className="text-[#23A6F0]" 
                            >
                            <path 
                             d="M1 1L8 8L1 15" 
                             stroke="currentColor" 
                             strokeWidth="2" 
                             strokeLinecap="round" 
                             strokeLinejoin="round"
                            />
                            </svg>

                        </div>

                  </div>

               </div>


               <div className="flex flex-col w-[348px] min-h-[606px] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)]"> 
                  <div className="relative w-full h-[300px] overflow-hidden shrink-0">
                     <img 
                       src={postImage3}
                       alt="Post 3" 
                       className="w-full h-full object-cover"
                     />

                     <div className="absolute top-[20px] left-[20px] bg-[#E74C3C] text-white px-[10px] py-[0px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-bold text-[14px] leading-[24px]">NEW</div>

                  </div>

                  <div className="flex flex-col gap-[10px] px-[25px] pt-[25px] pb-[35px] items-start text-left">
                    <div className="flex gap-[15px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                        <small className="text-[#8EC2F2]">Google</small>
                        <small className="text-[#737373]">Trending</small>
                        <small className="text-[#737373]">New</small>
                    </div>

                    <h4 className="text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal">Loudest à la Madison #1 (L'integral)</h4>

                    <p className="className=text-[#737373] text-[14px] leading-[20px] tracking-[0.2px]">We focus on ergonomics and meeting you where you work. It's only a<br className="hidden md:block" />keystroke away.</p>

                    <div className="flex flex-row justify-between items-center w-full py-[15px]">
                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               width="16" 
                               height="16" 
                               viewBox="0 0 24 24" 
                               fill="none" 
                               stroke="currentColor" 
                               stroke-width="2" 
                               stroke-linecap="round" 
                               stroke-linejoin="round" 
                               class="ai ai-Clock"
                               className="text-[#23A6F0]"
                               >
                                <circle cx="12" cy="12" r="10"/>
                               <path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"/>
                               </svg>
                          <span>22 April 2021</span>
                        </div>

                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               viewBox="0 0 1024 1024" 
                               width="16" height="14.67" 
                               fill="#23856D" 
                               style={{ opacity: 1 }}>
    
                               <path  d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8"/>
                          </svg>
                          <span>10 comments</span>
                        </div>

                        
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer group">
                            <span className="text-[#737373] font-bold text-[14px] leading-[24px]">Learn More</span>
                            <svg 
                             xmlns="http://www.w3.org/2000/svg" 
                             width="9" 
                             height="16" 
                             viewBox="0 0 9 16" 
                             fill="none"
                             className="text-[#23A6F0]" 
                            >
                            <path 
                             d="M1 1L8 8L1 15" 
                             stroke="currentColor" 
                             strokeWidth="2" 
                             strokeLinecap="round" 
                             strokeLinejoin="round"
                            />
                            </svg>

                        </div>

                  </div>

               </div>

                 

            </div> 

            </div> 
        </section>
     </div>
    )
} 


