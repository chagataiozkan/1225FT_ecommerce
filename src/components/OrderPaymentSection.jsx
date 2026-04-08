import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../store/actions/clientActions";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderPaymentCardForm from "./OrderPaymentCardForm";
import { deleteCard } from "../store/actions/clientActions";

export default function PaymentSection({ selectedCard, setSelectedCard }) {
  const dispatch = useDispatch();
  const creditCards = useSelector((state) => state.client.creditCards);

  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (!creditCards.length) return;
    setSelectedCard((prev) => prev ?? creditCards[0].id);
  }, [creditCards, setSelectedCard]);

  async function handleDelete(cardId) {
    const result = await dispatch(deleteCard(cardId));
    if (!result.success) {
      alert(result.error);
    }
  }

  function handleEdit(card) {
    setEditingCard(card);
    setShowCardForm(true);
  }

  return (
    <div className="rounded-md border border-[#E8E8E8] bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#252B42]">Payment Methods</h2>

          <p className="mt-2 text-sm text-[#737373]">
            Select your saved card or add a new one.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingCard(null);
            setShowCardForm((prev) => !prev);
          }}
          className="cursor-pointer rounded-md bg-[#23A6F0] px-5 py-3 text-sm font-bold text-white"
        >
          {showCardForm ? "Close Form" : "Add New Card"}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-[#252B42]">Saved Cards</h3>

        {creditCards.length === 0 ? (
          <div className="mt-4 rounded-md border border-dashed border-[#E8E8E8] bg-[#FAFAFA] p-6 text-sm text-[#737373]">
            No saved card found.
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            {creditCards.map((card) => (
              <OrderPaymentCard
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={setSelectedCard}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </div>

      {showCardForm && (
        <OrderPaymentCardForm
          initialData={editingCard}
          onCancel={() => {
            setShowCardForm(false);
            setEditingCard(null);
          }}
        />
      )}
    </div>
  );
}
