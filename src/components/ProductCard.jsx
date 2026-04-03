import { Link } from "react-router-dom";

export default function ProductCard({product}) {
  return (
    <Link to="/product">
      <div className="flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>
        <div className="mt-8 flex flex-col items-center text-center">
          <h3 className="text-base font-bold text-[#252B42]">{product?.name}</h3>
          <p className="mt-2 text-sm line-clamp-1 font-bold text-[#737373]">
            {product?.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold">
            <span className="text-[#23856D]">${product?.price}</span>
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
