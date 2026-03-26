import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <Link to="/product">
      <div className="flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <img
            src="/images/product-cover-5.png"
            alt="Product"
            className="w-full object-cover"
          />
        </div>
        <div className="mt-8 flex flex-col items-center text-center">
          <h3 className="text-base font-bold text-[#252B42]">Graphic Design</h3>
          <p className="mt-2 text-sm font-bold text-[#737373]">
            English Department
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold">
            <span className="text-[#BDBDBD] line-through">$16.48</span>
            <span className="text-[#23856D]">$6.48</span>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
            <span className="h-4 w-4 rounded-full bg-[#2DC071]"></span>
            <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
            <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
          </div>
        </div>
      </div>
    </Link>
  );
}
