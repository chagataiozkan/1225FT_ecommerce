import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ShopHeader() {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="bg-[#FAFAFA] px-10 py-10 lg:px-50">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-20 lg:flex-row lg:justify-between">
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
        {topCategories.map((category) => {
          const categorySlug = category.code.split(":")[1];

          return (
            <Link
              key={category.id}
              to={`/shop/${category.gender}/${categorySlug}/${category.id}`}
              className="relative mb-5 w-full overflow-hidden lg:mb-0"
            >
              <img
                src={category.img}
                alt={category.title}
                className="aspect-square w-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-t from-black/60 to-transparent text-white">
                <p className="text-lg font-bold">{category.title}</p>
                <p className="text-sm">Rating: {category.rating}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
