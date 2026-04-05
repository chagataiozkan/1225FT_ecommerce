import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductDetailNavbar() {
  const navigate = useNavigate();

  return (
    <section className="mb-12 mt-4 lg:mt-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#737373] lg:justify-start">
          <Link to="/" className="text-[#252B42]">
            Home
          </Link>

          <ChevronRight size={16} strokeWidth={2} className="text-[#BDBDBD]" />

          <Link to="/shop">Shop</Link>

          <ChevronRight size={16} strokeWidth={2} className="text-[#BDBDBD]" />

          <p>Product</p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="self-center rounded-md border border-[#23A6F0] px-4 py-2 text-sm font-bold text-[#23A6F0] transition hover:bg-[#23A6F0] hover:text-white lg:self-auto"
        >
          Back
        </button>
      </div>
    </section>
  );
}