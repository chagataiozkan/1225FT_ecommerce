import { useDispatch } from "react-redux";
import {
  updateCartItemCount,
  removeFromCart,
  toggleCartItemChecked,
} from "../store/actions/shoppingCartActions";
import { Trash2 } from "lucide-react";

export default function CartItemRow({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 rounded-md border border-[#E8E8E8] bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => dispatch(toggleCartItemChecked(item.product.id))}
          className="h-8 w-8 accent-[#23A6F0]"
        />
        <img
          src={item.product.images?.[0]?.url}
          className="h-24 w-24 rounded-md object-cover"
        />

        <div>
          <h2 className="text-base font-bold text-[#252B42]">
            {item.product.name}
          </h2>

          <p className="mt-2 text-sm text-[#737373]">
            {item.product.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between lg:min-w-60 lg:justify-end lg:gap-8">
        <div className="flex items-center rounded-md border border-[#E8E8E8] bg-white shadow-sm">
          <button
            type="button"
            onClick={() =>
              dispatch(updateCartItemCount(item.product.id, "decrease"))
            }
            className="flex h-10 w-10 items-center justify-center text-lg font-bold text-[#252B42] transition hover:bg-[#F6F6F6]"
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
            className="flex h-10 w-10 items-center justify-center text-lg font-bold text-[#252B42] transition hover:bg-[#F6F6F6]"
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
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E8E8E8] text-[#737373] transition hover:border-red-400 hover:text-red-500"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
