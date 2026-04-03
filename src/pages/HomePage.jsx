import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";

import EditorsPick from "../components/HomePageEditorsPick";
import FeaturedPosts from "../components/HomePageFeaturedPosts";
import FeaturedProducts from "../components/HomePageFeaturedProducts";
import HeroSlider from "../components/HomePageHeroSlider";
import ProductBanner from "../components/HomePageProductBanner";
import ProductSlider from "../components/HomePageProductSlider";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
