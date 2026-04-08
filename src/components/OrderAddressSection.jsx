import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderAddressCard from "./OrderAddressCard";
import OrderAddressForm from "./OrderAddressForm";
import { deleteAddress } from "../store/actions/clientActions";

export default function OrderAddressSection({
  selectedAddress,
  setSelectedAddress,
}) {
  const addressList = useSelector((state) => state.client.addressList);
  const dispatch = useDispatch();
  const [editingAddress, setEditingAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);

  useEffect(() => {
    if (!addressList.length) return;
    setSelectedAddress((prev) => prev ?? addressList[0].id);
  }, [addressList, setSelectedAddress]);

  async function handleDelete(addressId) {
    const result = await dispatch(deleteAddress(addressId));
    if (!result.success) {
      alert(result.error);
    }
  }

  function handleEdit(address) {
    setEditingAddress(address);
    setShowAddressForm(true);
  }

  return (
    <div className="rounded-md border border-[#E8E8E8] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#252B42]">
            Address Information
          </h2>

          <p className="mt-2 text-sm text-[#737373]">
            Select your address from your saved addresses.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingAddress(null);
            setShowAddressForm((prev) => !prev);
          }}
          className="rounded-md bg-[#23A6F0] px-5 py-3 text-sm font-bold cursor-pointer text-white"
        >
          {showAddressForm ? "Close Form" : "Add New Address"}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-[#252B42]">Address</h3>

        {addressList.length === 0 ? (
          <div className="mt-4 rounded-md border border-dashed border-[#E8E8E8] bg-[#FAFAFA] p-6 text-sm text-[#737373]">
            No saved address found.
          </div>
        ) : (
          <div className="mt-2 space-y-4">
            {addressList.map((address) => (
              <OrderAddressCard
                key={address.id}
                address={address}
                selected={selectedAddress === address.id}
                onSelect={setSelectedAddress}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </div>

      {showAddressForm && (
        <OrderAddressForm
          initialData={editingAddress}
          onCancel={() => {
            setShowAddressForm(false);
            setEditingAddress(null);
          }}
        />
      )}
    </div>
  );
}
