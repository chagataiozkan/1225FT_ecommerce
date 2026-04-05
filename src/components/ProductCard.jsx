import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductCard({ product }) {
  const categories = useSelector((state) => state.product.categories);

  const productCategory = categories.find(
    (category) => String(category.id) === String(product?.category_id),
  );

  const slugify = (text) =>
    text
      ?.toLowerCase()
      .trim()
      .replaceAll("ı", "i")
      .replaceAll("ğ", "g")
      .replaceAll("ü", "u")
      .replaceAll("ş", "s")
      .replaceAll("ö", "o")
      .replaceAll("ç", "c")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const productNameSlug = slugify(product?.name);

  const gender = productCategory?.gender || "unisex";
  const categoryName = slugify(productCategory?.title || "category");
  const categoryId = productCategory?.id;

  const productDetailPath = categoryId
    ? `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product?.id}`
    : "#";

  return (
    <Link to={productDetailPath} className="group">
      <div className="flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <img
            src={product?.images?.[0]?.url}
            alt={product?.name}
            className="w-full object-cover transition group-hover:opacity-90"
          />
        </div>

        <div className="mt-8 flex flex-col items-center text-center">
          <h3 className="text-base font-bold text-[#252B42]">{product?.name}</h3>
          <p className="mt-2 line-clamp-1 text-sm font-bold text-[#737373]">
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