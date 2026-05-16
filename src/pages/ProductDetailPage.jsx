import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { products } from '../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';

  const ProductDetailPage =() => {

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