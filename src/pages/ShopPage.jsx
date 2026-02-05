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
import postImage4 from '../assets/6fa1d42dda5f231255f5a899906c50f4f3638388.jpg';
import postImage5 from '../assets/3f46bc27bfdeda7c44028b59453c136c10512828.jpg';
import postImage6 from '../assets/6e5a1e407b100e0e65dada874a961f311a92cfce.jpg';
import { Link } from 'react-router-dom';




           const Hero = () => {
            return (
            <section className="relative w-full md:min-h-[716px] h-[600px] flex items-center bg-[#23A6F0] overflow-hidden"> 
           

            <div className="absolute inset-0 z-0">
            <img 
            src={heroBg} 
            alt="New Collection" 
            className="w-full h-full object-cover"
          />
        </div>



        <div className="relative z-10 w-full mx-auto px-6 md:px-0 flex flex-col items-center md:items-start text-center md:text-left md:gap-20 gap-10 text-white max-w-[1044px]  md:py-[112px]">

            <div className="flex md:flex-row flex-col md:py-[48px] md:gap-[30px] py-8 gap-6 "> 

                <div className="flex flex-col md:gap-[35px] gap-6">
                 <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]  h-[24px]">SUMMER 2020</h5>
                 <h1 className="font-bold md:text-[58px] text-[40px] md:leading-[80px] leading-tight tracking-[0.2px]  md:min-h-[80px]">NEW COLLECTION</h1>
                 <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] max-w-[376px] md:min-h-[60px]">We know how large objects will act, but things on a small scale.</h4>
                 <button className="font-bold rounded-[5px] px-[40px] py-[15px]  bg-[#2DC071] w-fit">SHOP NOW</button>
                </div>

                <div className="hidden md:flex w-[415px]"> </div>

            </div>

            </div>



            <div className="absolute bottom-[35px] left-1/2 -translate-x-1/2 flex gap-[5px] z-20">

                <div className="w-[62px] h-[10px] bg-[#FFFFFF]"> </div>

                <div className="w-[63px] h-[10px] bg-[#FFFFFF] opacity-50"> </div>

                </div>

                <button className="absolute font-normal text-white md:text-[58px] text-[40px] md:left-[40px] left-4 z-20 top-1/2 -translate-y-1/2"> ❮ </button>
                <button className="absolute font-normal text-white md:text-[58px] text-[40px] md:right-[40px] right-4 z-20 top-1/2 -translate-y-1/2"> ❯ </button>
        
        </section>
            )
        }



        const EditorsPick = () => {
        return (
        <section className="w-full bg-[#FAFAFA] ">
            
                <div className="max-w-[1050px] mx-auto py-10 md:py-[80px] gap-8 md:gap-[48px] flex flex-col items-center px-4">



            <div className="gap-2 max-w-[607px] w-full text-center flex flex-col">
                <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">EDITOR'S PICK</h2>
                <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between</p>
            </div>



            <div className="gap-[30px] flex flex-col md:flex-row  w-full justify-center">


                <div className="relative w-full md:w-[510px]  h-[500px] overflow-hidden group">
                    <img
                    src={menImage}
                    alt="Men"
                    className="w-full h-full object-cover"
                    />

                <div className="flex absolute left-[31px] bottom-[31px] w-[170px] h-[48px] bg-white items-center justify-center shadow-md">
                    <span className="font-bold text-[16px] tracking-[0.1px]">MEN</span>
                </div>
                </div>

                <div className="relative w-full md:w-[240px] h-[500px] overflow-hidden group">
                  <img
                    src={womenImage}
                    alt="Women"
                    className="w-full h-full object-cover"
                    />  
                <div className="flex absolute left-[21px] bottom-[31px] w-[136px] h-[48px] bg-white items-center justify-center shadow-md">
                    <span className="font-bold text-[16px] tracking-[0.1px]">WOMEN</span>
                </div>
                </div>

                <div className="flex flex-col md:w-[240px] md:h-[500px] w-full gap-[16px]">

                    <div className="relative w-full h-[242px] overflow-hidden">
                      <img
                    src={accessoriesImage}
                    alt="Accessories"
                    className="w-full h-full object-cover"
                    />   
                    <div className="flex absolute left-[14px] bottom-[23px] w-[170px] h-[48px] bg-white items-center justify-centershadow-sm">
                        <span className="font-bold text-[16px] tracking-[0.1px]">ACCESSORIES</span>
                    </div>
                    </div>


                    <div className="relative w-full h-[242px] overflow-hidden">
                        <img
                    src={kidsImage}
                    alt="Kids"
                    className="w-full h-full object-cover"
                    /> 
                    <div className="flex absolute left-[18px] bottom-[18px] w-[120px] h-[48px] bg-white items-center justify-center shadow-sm">
                        <span className="font-bold text-[16px] tracking-[0.1px]">KIDS</span>
                    </div>
                    </div>


                </div>
            </div>
            </div>           
        </section>

        )
    }

        const BestsellerProducts = () => {
          const products=[
            {id:1, img:bestImage1, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:2, img:bestImage2, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:3, img:bestImage3, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:4, img:bestImage4, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:5, img:bestImage5, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:6, img:bestImage6, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:7, img:bestImage7, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
            {id:8, img:bestImage8, title:"Graphic Design", department:"English Department", oldPrice:"$16.48",newPrice:"$6.48"},
          ]  
        return (
        <section className="w-full bg-white ">
           <div className="max-w-[1124px] mx-auto py-10 md:py-[80px] md:gap-[80px] gap-10 flex flex-col items-center px-4"> 
              
        <div className="flex flex-col gap-[10px] max-w-[691px] w-full text-center">
          <h4 className="font-normal text-[20px] tracking-[0.2px] leading-[30px] text-[#737373]">Featured Products</h4>
          <h3 className="font-bold text-[24px] tracking-[0.1px] leading-[32px] text-[#252B42]">BESTSELLER PRODUCTS</h3>
          <p className="font-normal text-[14px] tracking-[0.2px] leading-[20px] text-[#737373]">Problems trying to resolve conflict between</p>
        </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full max-w-[1049px]">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              
              
              <div className="w-full md:w-[239px] h-[427px] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              
              <div className="flex flex-col items-center pt-[25px] pb-[35px] px-[25px] gap-[10px] text-center">
                <h5 className="font-bold text-[16px] text-[#252B42]">{product.title}</h5>
                <Link to="/shop" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-[#23A6F0]">
                  {product.dept}
                </Link>
                
                <div className="flex gap-[5px] py-[5px]">
                  <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">{product.oldPrice}</span>
                  <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">{product.newPrice}</span>
                </div>

                
                <div className="flex gap-[6.08px]">
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23A6F0] cursor-pointer"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#23856D] cursor-pointer"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#E77C40] cursor-pointer"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-[#252B42] cursor-pointer"></div>
                </div>
              </div>

            </div>
            ))}
           </div>
         </div>
        </section>
            )
        }


        const VitaClassic = ()=> {
            return (
        <section className="relative  w-full  bg-[#23856D] text-white overflow-hidden ">

          <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-end md:items-center justify-between  md:px-[200px] px-8 pt-16 pb-0 md:py-0">

            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[509px] gap-[30px] z-10 mb-8 md:mb-0 md:self-center">

                        <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] ">SUMMER 2020</h4>
                        <h1 className="font-bold md:text-[58px] text-[40px] md:leading-[80px] leading-tight tracking-[0.2px] ">Vita Classic Product</h1>
                        <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] max-w-[341px]">We know how large objects will act, We know how are objects will act, We know</p>
                        <div className="gap-[34px] flex md:flex-row flex-col items-center mt-4 md:mt-0">
                            <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px]">$16.48</h3>
                            <button className="bg-[#2DC071] py-[15px] px-[40px] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] hover:bg-green-600 trnsition-colors">ADD TO CART</button>
                        </div>
            </div>

                        <div className="relative md:max-w-[510px] w-full max-w-[400px]">
                        <img
                        src={vitaImage}
                        alt="Vita Classic Model"
                        className="w-full h-full object-contain"
                        />
                        
                        </div>

                   </div>   

              

            <div className="hidden md:flex absolute bottom-[48px] left-1/2 -translate-x-1/2 gap-[2px] z-20">
              <div className="w-[62px] h-[10px] bg-white"></div>
              <div className="w-[62px] h-[10px] bg-white opacity-50"></div>
            </div>

                <button className="absolute left-4 md:left-[30px] top-1/2 -translate-y-1/2 text-white text-[40px] md:text-[48px] font-light hover:scale-110 transition-transform z-30">❮</button>
                <button className="absolute right-4 md:right-[30px] top-1/2 -translate-y-1/2 text-white text-[40px] md:text-[48px] font-light hover:scale-110 transition-transform z-30">❯</button>

        </section>
            )
        }

       

    const NeuralUniverse = () => {
    return (
        <section className="bg-white w-full min-h-[682px] flex justify-center overflow-hidden">

            <div className="flex md:flex-row flex-col-reverse items-center justify-between md:gap-[10px] gap-[30px] w-full max-w-[1439px] px-4 md:px-0">
                
                <div className="relative w-full md:w-[704px] md:h-[682px] h-[300px] overflow-hidden  shrink-0 ml-0 md:ml-[100px]">
                <img
                src={neuralImage}
                alt="Neural Universe Couple"
                className="relative md:absolute md:max-w-[725px] w-full h-full md:h-[774px] object-cover bottom-0 left-0 md:left-[-137px]"
                />
                </div> 

                <div className="flex flex-col md:w-[537px] w-full gap-[30px] ml-0 md:ml-[30px] items-center md:text-left py-10 md:py-0" >
                    <h5 className="w-full font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">SUMMER 2020</h5>
                    <h2 className="max-w-[375px] w-full font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Part of the Neural Universe</h2>
                    <h4 className="max-w-[376px]  w-full font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">We know how large objects will act, but things all a small scale.</h4>
                    <div className="flex sm:flex-row flex-col gap-[10px]">
                        <button className="md:bg-[#2DC071] bg-[#23A6F0] py-[15px] px-[40px] rounded-[5px]  font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">BUY NOW</button>
                        <button className="bg-white border md:border-[#2DC071] border-[#23A6F0] py-[15px] px-[40px] rounded-[5px] font-bold text-[14px] leading-[22px] tracking-[0.2px] md:text-[#2DC071] text-[#23A6F0]">
                            <span className="md:hidden">Learn More</span>
                            <span className="hidden md:inline">READ MORE</span>
                        </button>

                    </div>
                </div>

            </div>
        </section>
  )
}

         
        const FeaturedPosts = ()=> {
            const posts=[
                {
                    id:1,
                    desktopImg: postImage1,
                    mobileImg: postImage4,
                    title:"Loudest à la Madison #1 (L'integral)",
                    desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    date:"22 April 2021",
                    comments:"10 comments"
                },
                {
                    id:1,
                    desktopImg: postImage2,
                    mobileImg: postImage5,
                    title:"Loudest à la Madison #1 (L'integral)",
                    desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    date:"22 April 2021",
                    comments:"10 comments"   
                },
                {
                    id:1,
                    desktopImg: postImage3,
                    mobileImg: postImage6,
                    title:"Loudest à la Madison #1 (L'integral)",
                    desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    date:"22 April 2021",
                    comments:"10 comments"  
                },
            ]

        return (
        <section className="w-full bg-white">

            <div className="flex flex-col max-w-[1050px] mx-auto md:py-[112px] px-4 md:px-0 md:gap-[80px] gap-[60px] items-center"> 
               
               <div className="flex flex-col items-center gap-[10px] text-center max-w-[691px]"> 
                   <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">Practice Advice</h6>
                   <h3 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Featured Posts</h3>
                   <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] md:max-w-[469px]">Problems trying to resolve the conflict between <br className="hidden md:block" />
                   the two major realms of Classical physics: Newtonian mechanics
                   </p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[10px] gap-[30px] w-full">

               {posts.map((post) => (
               <div key={post.id} className="flex flex-col  bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] group hover:shadow-lg duration-300"> 
                <div className="relative w-full h-[300px] overflow-hidden">
                     <img 
                       src={post.mobileImg}
                       alt={post.title} 
                       className="w-full h-full object-cover block md:hidden"
                     />

                     <img 
                       src={post.desktopImg}
                       alt={post.title} 
                       className="w-full h-full object-cover hidden md:block"
                     />

                     <div className="absolute top-[20px] left-[20px] bg-[#E74C3C] text-white px-[10px] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] font-bold text-[14px] leading-[24px] tracking-[0.2px]">NEW</div>
                </div>

                <div className="flex flex-col gap-[10px] px-[25px] pt-[25px] pb-[35px]">
                    <div className="flex gap-[15px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                        <small className="text-[#8EC2F2] cursor-pointer hover:text-[#252B42]">Google</small>
                        <small className="text-[#737373] cursor-pointer hover:text-[#252B42]">Trending</small>
                        <small className="text-[#737373] cursor-pointer hover:text-[#252B42]">New</small>
                    </div>

                    <h4 className="text-[#252B42] text-[20px] leading-[30px] tracking-[0.2px] font-normal">{post.title}</h4>

                    <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] max-w-[300px]">{post.desc}</p>

                    <div className="flex flex-row justify-between items-center w-full py-[15px]">
                        <div className="flex items-center gap-[5px] text-[12px] leading-[16px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               width="16" 
                               height="16" 
                               viewBox="0 0 24 24" 
                               fill="none" 
                               stroke="currentColor" 
                               strokeWidth="2" 
                               strokeLinecap="round" 
                               strokeLinejoin="round" 
                               class="ai ai-Clock"
                               className="text-[#23A6F0]"
                               >
                                <circle cx="12" cy="12" r="10"/>
                               <path d="M15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6"/>
                               </svg>
                          <span>{post.date}</span>
                        </div>

                        <div className="flex items-center gap-[5px] text-[12px] text-[#737373]">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                               viewBox="0 0 1024 1024" 
                               width="16" height="14.67" 
                               fill="#23856D" 
                               style={{ opacity: 1 }}>
    
                               <path  d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8"/>
                          </svg>
                          <span>{post.comments}</span>
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
                ))}
               </div>
             </div>               
        </section>
            )
        }

        export default function ShopPage(){
    return (
     <div className="w-full font-['Montserrat'] min-h-screen overflow-x-hidden">
        <Hero />
        <EditorsPick />
        <BestsellerProducts /> 
        <VitaClassic />
        <NeuralUniverse />
        <FeaturedPosts />
     </div>

    )
} 


