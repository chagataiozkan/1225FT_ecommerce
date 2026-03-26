import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductDetailNavbar() {
  return (
    <section>
      <div className="mb-20 lg:mb-12 mt-4 lg:mt-0 flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-[#737373]">
        <Link to="/" className="text-[#252B42]">
          Home
        </Link>
        <ChevronRight size={16} strokeWidth={2} className="text-[#BDBDBD]" />
        <Link to="/shop">Shop</Link>
      </div>
    </section>
  );
}
