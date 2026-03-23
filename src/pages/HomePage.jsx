import EditorsPick from "../components/EditorsPick";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSlider from "../components/HeroSlider";
import ProductBanner from "../components/ProductBanner";
import ProductSlider from "../components/ProductSlider";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <EditorsPick />
      <FeaturedProducts />
      <ProductSlider />
      <ProductBanner />
      <FeaturedPosts />
    </div>
  );
}
