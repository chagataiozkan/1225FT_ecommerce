import { Heart, ShoppingCart, Eye, Star } from "lucide-react";

export default function ProductDetailDescription() {
  return (
    <div className="w-full mb-30">
      <h1 className="text-2xl font-semibold text-[#252B42]">Floating Phone</h1>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex items-center gap-1 text-[#F3CD03]">
          <Star size={18} fill="currentColor" strokeWidth={1.5} />
          <Star size={18} fill="currentColor" strokeWidth={1.5} />
          <Star size={18} fill="currentColor" strokeWidth={1.5} />
          <Star size={18} fill="currentColor" strokeWidth={1.5} />
          <Star size={18} fill="currentColor" strokeWidth={1.5} />
        </div>

        <span className="text-sm font-bold text-[#737373]">10 Reviews</span>
      </div>

      <p className="mt-6 text-3xl font-bold text-[#252B42]">$1139.33</p>

      <p className="mt-4 text-sm font-bold text-[#737373]">
        Availability : <span className="text-[#23A6F0]">In Stock</span>
      </p>

      <p className="mt-8 max-w-70 text-sm font-semibold leading-6 text-[#858585] lg:max-w-100">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met.
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