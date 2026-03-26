import ProductDetailDescription from "../components/ProductDetailDescription";
import ProductDetailSlider from "../components/ProductDetailSlider";
import ProductDetailBottomDescription from "../components/ProductDetailBottomDescription";
import ProductDetailNavbar from "../components/ProductDetailNavbar";
import ProductDetailProductCards from "../components/ProductDetailProductCards";
import ShopBrands from "../components/ShopBrands";

export default function ProductDetail() {
  return (
    <section className="bg-[#FAFAFA] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-90 lg:max-w-354 px-6 lg:px-0">
        <div className="w-full lg:w-1/2">
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
