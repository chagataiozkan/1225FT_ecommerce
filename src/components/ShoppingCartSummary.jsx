import { useNavigate } from "react-router-dom";

export default function ShoppingCartSummary({ cart }) {
  const selectedItems = cart.filter((item) => item.checked);
  const productTotal = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0,
  );

  const navigate = useNavigate();

  const shipping = productTotal > 150 ? 0 : 29.99;
  const discount = productTotal > 300 ? productTotal * 0.1 : 0;
  const grandTotal = productTotal + shipping - discount;

  return (
    <div className="sticky top-24 rounded-md border border-[#E8E8E8] bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-[#252B42]">Order Summary</h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-[#737373]">Products</span>
          <span className="font-semibold">${productTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#737373]">Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#737373]">Discount</span>
          <span className="font-semibold text-red-500">
            -${discount.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-[#E8E8E8] pt-4 flex justify-between text-base font-bold">
          <span>Total</span>
          <span className="text-[#23A6F0]">${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate("/order")}
        className="mt-6 w-full rounded-md bg-[#23A6F0] py-3 text-sm font-bold text-white transition hover:bg-[#1e8bb8] cursor-pointer"
      >
        Create Order
      </button>
    </div>
  );
}
