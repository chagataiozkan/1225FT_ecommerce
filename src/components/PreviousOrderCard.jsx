import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PreviousOrderProductRow from "./PreviousOrderProductRow";

function maskCardNumber(cardNumber) {
  const cardString = String(cardNumber);
  return `**** **** **** ${cardString.slice(-4)}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString();
}

export default function PreviousOrderCard({ order }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md border border-[#E8E8E8] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-[#737373]">
            Order ID: <span className="font-semibold text-[#252B42]">{order.id}</span>
          </p>

          <p className="text-sm text-[#737373]">
            Date:{" "}
            <span className="font-semibold text-[#252B42]">
              {formatDate(order.order_date)}
            </span>
          </p>

          <p className="text-sm text-[#737373]">
            Card:{" "}
            <span className="font-semibold text-[#252B42]">
              {order.card_name} - {maskCardNumber(order.card_no)}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <p className="text-xl font-bold text-[#23A6F0]">
            ${Number(order.price).toFixed(2)}
          </p>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-md border border-[#23A6F0] px-4 py-2 text-sm font-bold text-[#23A6F0] transition hover:bg-[#23A6F0] hover:text-white"
          >
            {isOpen ? "Hide Details" : "Show Details"}
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-6 border-t border-[#E8E8E8] pt-6">
          <h3 className="mb-4 text-base font-bold text-[#252B42]">
            Order Details
          </h3>

          <div className="space-y-4">
            {order.products.map((product) => (
              <PreviousOrderProductRow key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}