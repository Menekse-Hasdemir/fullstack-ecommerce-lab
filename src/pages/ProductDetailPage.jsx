import React from 'react';
import { Link,useParams } from 'react-router-dom';
import bestImage1 from '../assets/23057910d190d178c2a7b276e896b9d38b982bf6.jpg';
import bestImage2 from '../assets/edfda1c222054dedce3ff32fe480d8fc8eb07474.jpg';
import bestImage3 from '../assets/4a6a10161217dc07ba1cda4632e93a5851162bcb.jpg';
import bestImage4 from '../assets/74e648e43f346f3e64ec6890751ec33b3c7f5197.jpg';
import bestImage5 from '../assets/41ba1a582a6be5d0abdf4716fbac8cd3a73cb266.jpg';
import bestImage6 from '../assets/a4b9d5defc9e3b83803619da05903140ffc77947.jpg';
import bestImage7 from '../assets/110bc11c4432558f247264194359558513a225fe.jpg';
import bestImage8 from '../assets/c91168410dcfe4d267b32aaf7b21288f7b9656f2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';

const ProductDetailPage =() => {

  
const commonData = {
  reviews: "10 Reviews",
  price: "$6,48",
  availability: "In Stock",
  description: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.",
  colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
  actions: [faHeart, faShoppingCart, faEye],
  thumbnails: [1, 2],
  rating: 4
}

const products = [
  { id: 1, img: bestImage1, title: "Floating Phone", ...commonData },
  { id: 2, img: bestImage2, title: "Graphic Design", ...commonData },
  { id: 3, img: bestImage3, title: "Graphic Design", ...commonData },
  { id: 4, img: bestImage4, title: "Graphic Design", ...commonData },
  { id: 5, img: bestImage5, title: "Graphic Design", ...commonData },
  { id: 6, img: bestImage6, title: "Graphic Design", ...commonData },
  { id: 7, img: bestImage7, title: "Graphic Design", ...commonData },
  { id: 8, img: bestImage8, title: "Graphic Design", ...commonData },
]

    const {productId}=useParams();
    const product = products.find(p => p.id === Number(productId));
    //console.log(product);

    return (
        <div className="bg-white w-full font-['Montserrat']">

           <section className="bg-[#FAFAFA]">
            <div className="max-w-[1050px] mx-auto pb-[48px] px-4 flex flex-col md:flex-row gap-[30px]">
            
            <div className="w-full md:w-[510px] overflow-hidden flex flex-col gap-[15px]">
            <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
                <img
                src={product.img} alt={product.title}/>
            </div>
            
            <div className="flex gap-[16px]">
            <div className="w-[100px] h-[75px] overflow-hidden">
                <img
                src={product.img} alt="thumb1" className="w-full h-full object-cover"/>
            </div>
            
            <div className="w-[100px] h-[75px] overflow-hidden">
                <img
                src={product.img} alt="thumb2" className="w-full h-full object-cover"/>
            </div>
            </div>

            </div>

                <div className="flex flex-1 flex-col ">
                    
                    <h1 className="font-bold text-[24px] leading-[32px] text-[#252B42]">{product.title}</h1>
                    <div className="flex flex-row py-4 gap-3">
                        {[1, 2, 3, 4, 5].map((star)=>(
                          <FontAwesomeIcon
                          key={star}
                          icon={star<=product.rating ? fasStar : farStar}
                          className={"text-[#F3CD03]"}
                          />
                        ))}
                        <h6 className="font-bold text-[14px] text-[#737373]">{product.reviews}</h6>
                    </div>
                    <h3 className="font-bold text-[24px] text-[#252B42]">{product.price}</h3>
                    <h6 className="font-bold text-[14px] text-[#737373] pb-6">Availability:<span className="text-[#23A6F0]">{product.availability}</span></h6>
                    <p className="font-normal text-[14px] text-[#858585] pb-4">{product.description}</p>
                    
                    <hr className="border-[#BDBDBD]"/>

                    <div className="flex gap-[10px] py-10">
                        {product.colors.map((color)=>(
                            <div key={color} className="w-[30px] h-[30px] rounded-full cursor-pointer" style={{ backgroundColor: color }} />
                     ))}    
                    </div>

                    <div className="flex gap-[10px]">
                        <button className="bg-[#23A6F0] text-white rounded-[5px] text-[14px] font-bold px-5 py-4">Select Options</button>
                        {product.actions.map((icon,i)=>(
                         <button key={i} className="w-[40px] h-[40px] border border-[#EDEDED] rounded-full flex items-center justify-center hover:border-[#23A6F0] transition-colors">
                         <FontAwesomeIcon icon={icon} className="text-[#252B42]" />
                         </button>
                        ))}
                    </div>


                </div>
            
            </div>     
           </section>
        </div>
                    
    )
}

export default ProductDetailPage;