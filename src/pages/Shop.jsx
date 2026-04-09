import ShopBrands from "../components/ShopBrands";
import ShopHeader from "../components/ShopHeader";
import ShopProducts from "../components/ShopProducts";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

export default function Shop() {
  const { gender, categoryName, categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = useSelector((state) => state.product.categories);

  const selectedCategory = categories.find(
    (category) => String(category.id) === categoryId,
  );

  const dispatch = useDispatch();

  const [sortOption, setSortOption] = useState("");
  const [filterText, setFilterText] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 24;

  const isFilterApplied = appliedFilter.trim() !== "";

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

    params.set("limit", limit);
    params.set("offset", (currentPage - 1) * limit);

    const queryString = params.toString() ? `?${params.toString()}` : "";

    setSearchParams(params);
    dispatch(fetchProducts(queryString));
  }, [
    dispatch,
    categoryId,
    sortOption,
    appliedFilter,
    currentPage,
    limit,
    setSearchParams,
  ]);

  const handleFilterButtonClick = () => {
    if (isFilterApplied) {
      setFilterText("");
      setAppliedFilter("");
      setCurrentPage(1);
      return;
    }

    setAppliedFilter(filterText.trim());
    setCurrentPage(1);
  };

  return (
    <>
      <ShopHeader />
      <ShopProducts
        sortOption={sortOption}
        setSortOption={setSortOption}
        filterText={filterText}
        setFilterText={setFilterText}
        onApplyFilter={handleFilterButtonClick}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        isFilterApplied={isFilterApplied}
      />
      <ShopBrands />
    </>
  );
}
