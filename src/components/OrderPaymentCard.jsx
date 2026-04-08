import { Pencil, Trash2 } from "lucide-react";

function maskCardNumber(cardNumber = "") {
  const lastFour = cardNumber.slice(-4);
  return `**** **** **** ${lastFour}`;
}

export default function OrderPaymentCard({
  card,
  selected,
  onSelect,
  onDelete,
  onEdit,
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(card.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(card.id);
        }
      }}
      className={`w-full cursor-pointer rounded-md border p-4 transition ${
        selected
          ? "border-[#23A6F0] bg-[#F3FAFF]"
          : "border-[#E8E8E8] bg-white hover:border-[#23A6F0]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h4 className="text-base font-bold text-[#252B42]">
            {card.name_on_card}
          </h4>

          <p className="mt-2 text-sm font-semibold text-[#252B42]">
            {maskCardNumber(card.card_no)}
          </p>

          <p className="mt-2 text-sm text-[#737373]">
            Expire: {card.expire_month}/{card.expire_year}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(card);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0]"
          >
            <Pencil size={16} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(card.id);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#737373] hover:border-red-400 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>

          <div
            className={`mt-1 h-4 w-4 rounded-full border-2 ${
              selected ? "border-[#23A6F0] bg-[#23A6F0]" : "border-[#BDBDBD]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
