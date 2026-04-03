import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";

export default function ProductDetailProductCards({}) {
  const products = useSelector((state) => state.product.productList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="bg-[#FAFAFA] px-8 py-12 lg:px-35 lg:py-20">
      <div className="text-center font-bold">
        <h2 className="mt-2 text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h2>
      </div>
      <div className="mt-12 flex flex-col gap-16 lg:flex-row lg:flex-wrap lg:gap-x-8 lg:gap-y-24 lg:justify-center">
        {products.slice(0, 8).map((product) => (
          <div key={product?.id} className="w-full lg:w-1/5">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
