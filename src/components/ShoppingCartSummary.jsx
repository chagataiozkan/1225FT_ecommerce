export default function ShoppingCartSummary({ total }) {
  return (
    <div className="rounded-md border border-[#E8E8E8] bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#252B42]">Cart Total</h2>
        <p className="text-xl font-bold text-[#23A6F0]">${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
