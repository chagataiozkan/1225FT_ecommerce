import OrderAddressCard from "./OrderAddressCard";

export default function OrderAddressList({
  title,
  addresses,
  selectedId,
  onSelect,
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#252B42]">{title}</h3>

      {addresses.length === 0 ? (
        <div className="mt-4 rounded-md border border-dashed border-[#E8E8E8] bg-[#FAFAFA] p-6 text-sm text-[#737373]">
          No saved address found.
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {addresses.map((address) => (
            <OrderAddressCard
              key={address.id}
              address={address}
              selected={selectedId === address.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
