import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, img, title, dept, oldPrice, newPrice, colors } = product;

  return (
    <div className="flex flex-col items-center">

      <Link to={`/shop/${id}`} className="w-full md:w-[239px] h-[427px] overflow-hidden block">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="flex flex-col items-center pt-[25px] pb-[35px] px-[25px] gap-[10px] text-center">
        
        <h5 className="font-bold text-[16px] text-[#252B42]">{title}</h5>

        {dept && (
          <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
            {dept}
          </p>
        )}

        <div className="flex gap-[5px] py-[5px]">
          <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD]">
            ${oldPrice}
          </span>
          <span className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">
            ${newPrice}
          </span>
        </div>

        {colors && (
          <div className="flex gap-[6.08px]">
            {colors.map((color) => (
              <div
                key={color}
                className="w-[16px] h-[16px] rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}