import { Pencil, Trash2 } from "lucide-react";

export default function OrderAddressCard({
  address,
  selected,
  onSelect,
  onDelete,
  onEdit,
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(address.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(address.id);
        }
      }}
      className={`w-full cursor-pointer rounded-md border p-4 text-left transition ${
        selected
          ? "border-[#23A6F0] bg-[#F3FAFF]"
          : "border-[#E8E8E8] bg-white hover:border-[#23A6F0]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h4 className="text-base font-bold text-[#252B42]">
              {address.title}
            </h4>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(address);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#737373] transition hover:border-[#23A6F0] hover:text-[#23A6F0]"
              >
                <Pencil size={16} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(address.id);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E8E8E8] text-[#737373] transition hover:border-red-400 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>

              <div
                className={`mt-1 h-4 w-4 shrink-0 rounded-full border-2 ${
                  selected
                    ? "border-[#23A6F0] bg-[#23A6F0]"
                    : "border-[#BDBDBD]"
                }`}
              />
            </div>
          </div>

          <p className="mt-2 text-sm font-semibold text-[#252B42]">
            {address.name} {address.surname}
          </p>

          <p className="mt-1 text-sm text-[#737373]">{address.phone}</p>

          <p className="mt-3 text-sm text-[#737373]">
            {address.neighborhood} / {address.district} / {address.city}
          </p>

          <p className="mt-1 text-sm text-[#737373]">{address.address}</p>
        </div>
      </div>
    </div>
  );
}
