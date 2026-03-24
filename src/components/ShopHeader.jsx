import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShopHeader() {
  const categories = Array.from({ length: 5 });
  return (
    <section className="bg-[#FAFAFA] px-10 py-10 lg:px-50">
      <div className="mx-auto flex flex-col items-center max-w-360 gap-20 lg:flex-row lg:justify-between">
        <h2 className="text-3xl font-bold text-[#252B42]">Shop</h2>
        <div className="flex items-center gap-2 text-sm font-bold text-[#737373]">
          <Link to="/" className="text-[#252B42]">
            Home
          </Link>
          <ChevronRight size={18} />
          <Link to="/shop">Shop</Link>
        </div>
      </div>
      <div className="mt-16 flex flex-col lg:flex-row lg:gap-4">
        {categories.map((_, i) => (
          <div key={i} className="relative w-full overflow-hidden mb-5 lg:mb-0">
            <img
              src="/images/shop-hero-1-product-slide-1.jpg"
              alt="Category"
              className="aspect-square object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-linear-to-t from-black/60 to-transparent">
              <p className="text-lg font-bold">CLOTHS</p>
              <p className="text-sm">5 Items</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
