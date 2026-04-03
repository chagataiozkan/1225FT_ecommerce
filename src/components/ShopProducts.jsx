import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { List, Grid } from "lucide-react";
import { useSelector } from "react-redux";

export default function ShopProducts({
  sortOption,
  setSortOption,
  filterText,
  setFilterText,
  onApplyFilter,
}) {
  const products = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);

  const fetchState = useSelector((state) => state.product.fetchState);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const itemsPerPage = isDesktop ? 12 : 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex h-100 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#23A6F0] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="px-10 py-10 lg:px-50">
      <div className="mb-10 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-lg font-bold text-[#737373]">
          Showing all {total} results
        </p>
        <div className="flex items-center gap-6">
          <p className="text-lg font-bold text-[#737373]">Views:</p>
          <button className="rounded-md border border-[#ECECEC] p-4">
            <Grid size={24} />
          </button>
          <button className="rounded-md border border-[#ECECEC] p-4">
            <List size={24} />
          </button>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-md border border-[#DDDDDD] px-3 py-4 text-[#737373]"
          >
            <option value="">Popularity</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Add filter"
            className="rounded-md border border-[#DDDDDD] px-4 py-4 text-[#737373] outline-none"
          />
          <button
            onClick={onApplyFilter}
            className="rounded-md bg-[#23A6F0] px-8 py-4 font-bold text-white"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-between">
        {currentProducts.map((product) => (
          <div key={product.id} className="w-full lg:w-[20%]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mt-16 flex overflow-x-auto px-2 lg:justify-center">
        <div className="flex min-w-max rounded-md border border-[#BDBDBD] bg-white shadow-sm">
          <button
            onClick={() => setCurrentPage(1)}
            className="border-r border-[#E9E9E9] px-6 py-4 text-[#BDBDBD]"
          >
            First
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`border-r border-[#E9E9E9] px-6 py-4 font-bold ${
                  isActive ? "bg-[#23A6F0] text-white" : "text-[#23A6F0]"
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-6 py-4 font-bold text-[#23A6F0]"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
