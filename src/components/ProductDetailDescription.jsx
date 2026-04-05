import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useSelector } from "react-redux";

export default function ProductDetailDescription() {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) return null;

  const roundedRating = Math.round(selectedProduct.rating || 0);

  return (
    <div className="mb-30 w-full">
      <h1 className="text-2xl font-semibold text-[#252B42]">
        {selectedProduct.name}
      </h1>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center gap-1 text-[#F3CD03]">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              fill={index < roundedRating ? "currentColor" : "none"}
              strokeWidth={1.5}
            />
          ))}
        </div>

        <span className="text-sm font-bold text-[#737373]">
          {selectedProduct.rating?.toFixed(1)} Rating
        </span>
      </div>

      <p className="mt-6 text-3xl font-bold text-[#252B42]">
        ${selectedProduct.price}
      </p>

      <p className="mt-4 text-sm font-bold text-[#737373]">
        Availability :{" "}
        <span className="text-[#23A6F0]">
          {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </p>

      <p className="mt-8 max-w-70 text-sm font-semibold leading-6 text-[#858585] lg:max-w-100">
        {selectedProduct.description}
      </p>

      <div className="mt-6 h-px w-full max-w-[320px] bg-[#BDBDBD] lg:max-w-100" />

      <div className="mt-6 flex items-center gap-3">
        <span className="h-8 w-8 rounded-full bg-[#23A6F0]" />
        <span className="h-8 w-8 rounded-full bg-[#2DC071]" />
        <span className="h-8 w-8 rounded-full bg-[#E77C40]" />
        <span className="h-8 w-8 rounded-full bg-[#252B42]" />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button className="rounded-md bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white">
          Select Options
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#252B42]"
        >
          <Heart size={18} />
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#252B42]"
        >
          <ShoppingCart size={18} />
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white text-[#252B42]"
        >
          <Eye size={18} />
        </button>
      </div>
    </div>
  );
}