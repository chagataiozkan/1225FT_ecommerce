import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../store/actions/productActions";

import ProductDetailDescription from "../components/ProductDetailDescription";
import ProductDetailSlider from "../components/ProductDetailSlider";
import ProductDetailBottomDescription from "../components/ProductDetailBottomDescription";
import ProductDetailNavbar from "../components/ProductDetailNavbar";
import ProductDetailProductCards from "../components/ProductDetailProductCards";
import ShopBrands from "../components/ShopBrands";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const productDetailLoading = useSelector(
    (state) => state.product.productDetailLoading,
  );

  useEffect(() => {
    if (!productId) return;
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (productDetailLoading === "FETCHING") {
    return (
      <section className="flex min-h-100 items-center justify-center bg-[#FAFAFA]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E8E8E8] border-t-[#23A6F0]" />
      </section>
    );
  }

  if (!selectedProduct) {
    return (
      <section className="flex min-h-100 items-center justify-center bg-[#FAFAFA] px-6 text-center">
        <p className="text-lg font-semibold text-[#252B42]">
          Product could not be loaded.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#FAFAFA] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-90 px-6 lg:max-w-354 lg:px-0">
        <div className="w-full">
          <ProductDetailNavbar />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full lg:w-1/2">
            <ProductDetailSlider />
          </div>

          <div className="w-full lg:w-1/2">
            <ProductDetailDescription />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFFFFF] px-6">
        <ProductDetailBottomDescription />
      </div>

      <div className="w-full px-4">
        <ProductDetailProductCards />
      </div>

      <div>
        <ShopBrands />
      </div>
    </section>
  );
}
