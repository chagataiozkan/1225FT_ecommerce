import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
    const products = Array.from({length: 8});

    return (
        <section className="bg-[#FFFFFF] px-8 py-12 lg:px-20 lg:py-20">
            <div className="text-center font-bold">
                <p className="text-xl text-[#737373]">Featured Products</p>
                <h2 className="mt-2 text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h2>
                <p className="mt-2 text-sm text-[#737373]">Problems trying to resolve the conflict between</p>
            </div>
            <div className="mt-12 flex flex-col gap-16 lg:flex-row lg:flex-wrap lg:gap-x-8 lg:gap-y-24 lg:justify-center">
                {products.map((_, i) => (
                    <div key={i} className="w-full lg:w-1/5">
                        <ProductCard />
                    </div>
                ))}
            </div>
        </section>
    )
}