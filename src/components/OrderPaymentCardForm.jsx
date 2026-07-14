import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCard, updateCard } from "../store/actions/clientActions";

export default function OrderPaymentCardForm({ onCancel, initialData = null }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!formData.name_on_card.trim()) {
      newErrors.name_on_card = "Name on card is required.";
    }

    if (!/^\d{16}$/.test(formData.card_no)) {
      newErrors.card_no = "Card number must be exactly 16 digits.";
    }

    const month = Number(formData.expire_month);
    if (
      !formData.expire_month ||
      Number.isNaN(month) ||
      month < 1 ||
      month > 12
    ) {
      newErrors.expire_month = "Month must be between 1 and 12.";
    }

    const year = Number(formData.expire_year);
    if (
      !formData.expire_year ||
      Number.isNaN(year) ||
      year < 2016 ||
      year > 2036
    ) {
      newErrors.expire_year = "Year must be between 2016 and 2036.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      ...formData,
      expire_month: Number(formData.expire_month),
      expire_year: Number(formData.expire_year),
    };

    const result = initialData
      ? await dispatch(updateCard(payload))
      : await dispatch(addCard(payload));

    if (!result.success) {
      alert(result.error);
      return;
    }

    onCancel();
  }

  useEffect(() => {
    if (!initialData) return;

    setFormData({
      id: initialData.id,
      card_no: initialData.card_no || "",
      expire_month: String(initialData.expire_month || ""),
      expire_year: String(initialData.expire_year || ""),
      name_on_card: String(initialData.name_on_card || ""),
    });
  }, [initialData]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-md border border-[#E8E8E8] bg-[#FAFAFA] p-6"
    >
      <h3 className="text-lg font-bold text-[#252B42]">
        {initialData ? "Edit Card" : "Add New Card"}
      </h3>

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Card Number"
            value={formData.card_no}
            onChange={(e) =>
              setFormData({
                ...formData,
                card_no: e.target.value.replace(/\D/g, "").slice(0, 16),
              })
            }
            className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
          />
          {errors.card_no && (
            <p className="mt-1 text-xs text-red-500">{errors.card_no}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Name on Card"
            value={formData.name_on_card}
            onChange={(e) =>
              setFormData({ ...formData, name_on_card: e.target.value })
            }
            className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
          />
          {errors.name_on_card && (
            <p className="mt-1 text-xs text-red-500">{errors.name_on_card}</p>
          )}
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full">
            <input
              type="text"
              inputMode="numeric"
              maxLength={2}
              placeholder="Expire Month"
              value={formData.expire_month}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  expire_month: e.target.value.replace(/\D/g, "").slice(0, 2),
                })
              }
              className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
            />
            {errors.expire_month && (
              <p className="mt-1 text-xs text-red-500">{errors.expire_month}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="Expire Year (YYYY)"
              value={formData.expire_year}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  expire_year: e.target.value.replace(/\D/g, "").slice(0, 4),
                })
              }
              className="w-full rounded-md border border-[#E8E8E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
            />
            {errors.expire_year && (
              <p className="mt-1 text-xs text-red-500">{errors.expire_year}</p>
            )}
          </div>
        </div>

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
            {initialData ? "Update Card" : "Save Card"}
          </button>
        </div>
      </div>
    </form>
  );
}
