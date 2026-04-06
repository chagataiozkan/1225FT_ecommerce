export default function ShoppingCartPageHeader({ itemCount }) {
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#252B42] lg:text-3xl">
                My Cart ({itemCount} Product{itemCount !== 1 ? "s" : ""})
            </h1>
        </div>
    )
}