import ShoppingCartItemRow from "./ShoppingCartItemRow";

export default function ShoppingCartList({ cart }) {
  if (cart.length === 0) {
    return (
      <div className="rounded-md border border-[#E8E8E8] bg-white p-8 text-center">
        <p className="text-base font-semibold text-[#737373]">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 shadow-sm">
      {cart.map((item) => (
        <ShoppingCartItemRow key={item.product.id} item={item} />
      ))}
    </div>
  );
}
