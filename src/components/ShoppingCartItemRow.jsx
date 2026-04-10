import { useDispatch } from "react-redux";
import {
  updateCartItemCount,
  removeFromCart,
  toggleCartItemChecked,
} from "../store/actions/shoppingCartActions";
import { Trash2 } from "lucide-react";

export default function ShoppingCartItemRow({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 rounded-md border border-[#E8E8E8] bg-white p-4 lg:flex-row lg:items-center">
      {/* LEFT */}
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => dispatch(toggleCartItemChecked(item.product.id))}
          className="h-8 w-8 shrink-0 accent-[#23A6F0]"
        />

        <img
          src={item.product.images?.[0]?.url}
          alt={item.product.name}
          className="h-24 w-24 shrink-0 rounded-md object-cover"
        />

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-bold text-[#252B42]">
            {item.product.name}
          </h2>

          <p className="mt-2 truncate text-sm text-[#737373]">
            {item.product.description}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex shrink-0 items-center justify-between lg:ml-6 lg:w-[320px] lg:justify-end lg:gap-6">
        <div className="flex items-center rounded-md border border-[#E8E8E8] bg-white shadow-sm">
          <button
            type="button"
            onClick={() =>
              dispatch(updateCartItemCount(item.product.id, "decrease"))
            }
            className="flex h-10 w-10 items-center justify-center text-lg font-bold text-[#252B42] transition hover:bg-[#F6F6F6] cursor-pointer"
          >
            -
          </button>

          <span className="flex h-10 w-12 items-center justify-center border-x border-[#E8E8E8] text-sm font-bold text-[#252B42]">
            {item.count}
          </span>

          <button
            type="button"
            onClick={() =>
              dispatch(updateCartItemCount(item.product.id, "increase"))
            }
            className="flex h-10 w-10 items-center justify-center text-lg font-bold text-[#252B42] transition hover:bg-[#F6F6F6] cursor-pointer"
          >
            +
          </button>
        </div>

        <p className="w-25 text-right text-lg font-bold text-[#23A6F0]">
          ${(item.product.price * item.count).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => dispatch(removeFromCart(item.product.id))}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E8E8E8] text-[#737373] transition hover:border-red-400 hover:text-red-500 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
