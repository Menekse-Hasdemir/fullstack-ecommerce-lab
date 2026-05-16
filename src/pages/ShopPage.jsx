import { Link } from "react-router-dom"
import bestImage4 from '../assets/74e648e43f346f3e64ec6890751ec33b3c7f5197.jpg';
import heroBg from '../assets/shop-hero-1-product-slide-1.jpg';
import growImage from '../assets/7bc2f9fb559eeb7e6b92ed49f40128729a9f74f1.jpg';
import neuralImage from '../assets/5f8ce73d1a41b674cbd12f927c7ea9a6ca0ce76c.png';
import menImage from '../assets/9da5ab42c0357746eb27e42fff6279478e2c8a48.jpg';
import icon from '../assets/icon.png';
import vektor from '../assets/Vector.png';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import faBrands1 from "../assets/fa-brands-1.png";
import faBrands2 from "../assets/fa-brands-2.png";
import faBrands3 from "../assets/fa-brands-3.png";
import faBrands4 from "../assets/fa-brands-4.png";
import faBrands5 from "../assets/fa-brands-5.png";

const BreadcrumbSection= ()=>{
    return (
       <section className="w-full bg-[#FAFAFA] border-b border-[#EDEDED]">
      <div className="max-w-[1050px] mx-auto px-4 py-[24px] flex items-center justify-between">
        <h3 className="font-bold text-[24px] text-[#252B42]">Shop</h3>
        <div className="flex items-center gap-[15px]">
          <Link to="/" className="font-bold text-[14px] text-[#252B42] hover:text-[#23A6F0]">Home</Link>
          <span className="text-[#BDBDBD]">›</span>
          <span className="font-bold text-[14px] text-[#BDBDBD]">Shop</span>
        </div>
      </div>
    </section>
    )
}

const CategorySection= ()=>{
    const categories=[
        {id:1 ,name: "CLOTHS", items: "5 Items", img: bestImage4},
        {id:2 ,name: "CLOTHS", items: "5 Items", img: heroBg},
        {id:3 ,name: "CLOTHS", items: "5 Items", img: growImage},
        {id:4 ,name: "CLOTHS", items: "5 Items", img: neuralImage},
        {id:5 ,name: "CLOTHS", items: "5 Items", img: menImage},
    ]
    return (
       <section className="w-full bg-white">
        <div className="max-w-[1088px] mx-auto flex-col md:flex-row items-center px-4 pb-[48px] flex gap-[15px]">
            {categories.map((cat)=>(
              <div key={cat.id} className="relative flex flex-shrink-0 w-[332px] md:flex-1 md:w-auto h-[300px] overflow-hidden cursor-pointer">
                <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h5 className="font-bold text-[16px]">{cat.name}</h5>
                <p className="font-normal text-[12px]">{cat.items}</p>
                </div>
              </div>
            ))

            }
        </div>
       </section>
    )
}

const FilterBar= ()=>{
    return (
        <section className="w-full bg-white">
            <div className="flex flex-col md:flex-row max-w-[1050px] mx-auto py-[24px] items-center justify-between gap-[50px]">
                <h6 className="font-bold text-[14px] text-[#737373]">Showing all 12 results</h6>

                <div className="flex flex-row gap-[15px] items-center">
                    <h6 className="font-bold text-[14px] text-[#737373]">Views:</h6>
                    <button className="flex  gap-[15px]">
                        <div className="rounded-[5px] border p-[15px] border-[#ECECEC]">
                        <img
                        src={icon}
                        alt=""
                        className="w-[16px] h-[16px]"
                        />
                        </div>

                        <div className="rounded-[5px] border p-[15px] border-[#ECECEC]">
                        <img
                        src={vektor}
                        alt=""
                        className="w-[16px] h-[16px]"
                        />
                        </div>
                    </button>

                </div>

                <div className="flex gap-[15px] px-[1px]">
                  <select className="border border-[#DDDDDD] h-[50px] rounded-[5px] text-normal text-[14px] text-[#737373]">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <button className="px-[20px] py-[10px] rounded-[5px] bg-[#23A6F0] font-bold text-[#14px] text-white">Filter</button>

                </div>
            </div>

        </section>
        
    )
}

const ProductGrid= ()=>{
    return (
    <section className="w-full bg-white">
     <div className="max-w-[1050px] mx-auto px-4 py-[48px] flex flex-col gap-[48px]">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex items-center justify-center border border-[#EDEDED] rounded-[7px] w-fit mx-auto">
            <button className="p-[25px] border border-[#EDEDED] text-[#737373] font-bold text-[14px]">First</button>
            {[1,2,3].map((num)=>(
              <button key={num} className="px-[20px] py-[25px] border border-[#EDEDED] font-bold text-[14px] text-[#23A6F0]">{num}</button> 
            ))}
            
            <button className="p-[25px] border border-[#EDEDED] text-[#737373] font-bold text-[14px]">Next</button>

        </div>

      </div>
    </section>
  )
}



const BrandsSection= ()=>{
    return (
    <section className="bg-[#FAFAFA]">
    <div className="flex gap-[50px] py-[50px] items-center justify-center flex-wrap ">
    <img src={faBrands1} alt="brand" className="object-contain" /> 
    <img src={faBrands2} alt="brand" className="object-contain" /> 
    <img src={faBrands3} alt="brand" className="object-contain" /> 
    <img src={faBrands4} alt="brand" className="object-contain" /> 
    <img src={faBrands5} alt="brand" className="object-contain" /> 
     </div>
     </section>
    )
}


export default function ShopPage() {
  return (
    
    <div className="w-full font-['Montserrat']">
      <BreadcrumbSection />
      <CategorySection />
      <FilterBar />
      <ProductGrid />
      <BrandsSection />
    </div>

  )
}