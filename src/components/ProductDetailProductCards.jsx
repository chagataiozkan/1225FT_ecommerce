import ProductCard from "./ProductCard";

export default function ProductDetailProductCards() {
    const products = Array.from({length: 8});

    return (
        <section className="bg-[#FAFAFA] px-8 py-12 lg:px-35 lg:py-20">
            <div className="text-center font-bold">
                <h2 className="mt-2 text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h2>
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