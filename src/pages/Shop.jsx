import ShopBrands from "../components/ShopBrands";
import ShopHeader from "../components/ShopHeader";
import ShopProducts from "../components/ShopProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

export default function Shop() {
  const { gender, categoryName, categoryId } = useParams();

  const categories = useSelector((state) => state.product.categories);

  const selectedCategory = categories.find(
    (category) => String(category.id) === categoryId,
  );

  const dispatch = useDispatch();

  const [sortOption, setSortOption] = useState("");
  const [filterText, setFilterText] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();

    if (categoryId) {
      params.set("category", categoryId);
    }

    if (sortOption) {
      params.set("sort", sortOption);
    }

    if (appliedFilter) {
      params.set("filter", appliedFilter);
    }

    const queryString = params.toString() ? `?${params.toString()}` : "";

    dispatch(fetchProducts(queryString));
  }, [dispatch, categoryId, sortOption, appliedFilter]);

  return (
    <>
      <ShopHeader />
      <ShopProducts
        sortOption={sortOption}
        setSortOption={setSortOption}
        filterText={filterText}
        setFilterText={setFilterText}
        onApplyFilter={() => {
          setAppliedFilter(filterText);
          setCurrentPage?.(1);
        }}
      />
      <ShopBrands />
    </>
  );
}
