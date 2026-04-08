import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAddress, updateAddress } from "../store/actions/clientActions";

export default function OrderAddressForm({ onCancel, initialData = null }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  useEffect(() => {
    if (!initialData) return;

    setFormData({
      id: initialData.id,
      title: initialData.title || "",
      name: initialData.name || "",
      surname: initialData.surname || "",
      phone: initialData.phone || "",
      city: initialData.city || "",
      district: initialData.district || "",
      neighborhood: initialData.neighborhood || "",
      address: initialData.address || "",
    });
  }, [initialData]);

  async function handleSubmit(e) {
    e.preventDefault();

    const result = initialData
      ? await dispatch(updateAddress(formData))
      : await dispatch(addAddress(formData));

    if (!result.success) {
      alert(result.error);
      return;
    }

    onCancel();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-md border border-[#E8E8E8] bg-[#FAFAFA] p-6"
    >
      <h3 className="text-lg font-bold text-[#252B42]">
        {initialData ? "Edit Address" : "Add New Address"}
      </h3>

      <div className="mt-6 flex flex-col gap-4">
        <input
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          type="text"
          placeholder="Address Title"
          className="rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
        />

        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
          />
          <input
            name="surname"
            value={formData.surname}
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
            type="text"
            placeholder="Surname"
            className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
          />
        </div>

        <input
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          type="text"
          placeholder="Phone"
          className="rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
        />

        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            type="text"
            placeholder="City"
            className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
          />
          <input
            name="district"
            value={formData.district}
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            type="text"
            placeholder="District"
            className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
          />
        </div>

        <input
          name="neighborhood"
          value={formData.neighborhood}
          onChange={(e) =>
            setFormData({ ...formData, neighborhood: e.target.value })
          }
          type="text"
          placeholder="Neighborhood"
          className="rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
        />

        <textarea
          name="address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          placeholder="Address"
          rows={4}
          className="rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
        />

        <div className="flex flex-col gap-3 pt-2 lg:flex-row">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-[#E8E8E8] px-6 py-3 text-sm font-bold text-[#737373]"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white"
          >
            {initialData ? "Update Address" : "Save Address"}
          </button>
        </div>
      </div>
    </form>
  );
}
