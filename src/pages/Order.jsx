import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../store/actions/clientActions";
import OrderAddressSection from "../components/OrderAddressSection";
import OrderStepHeader from "../components/OrderStepHeader";
import OrderSummary from "../components/OrderSummary";
import OrderPaymentSection from "../components/OrderPaymentSection";
import { createOrder } from "../store/actions/clientActions";
import { setCart } from "../store/actions/shoppingCartActions";

export default function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const creditCards = useSelector((state) => state.client.creditCards);
  const selectedCardData = creditCards.find((card) => card.id === selectedCard);

  const token = localStorage.getItem("token");
  const isVerifiedUser = Boolean(user?.email);

  function buildOrderPayload() {
    const selectedItems = cart.filter((item) => item.checked);

    const productTotal = selectedItems.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0,
    );

    const products = selectedItems.map((item) => ({
      product_id: item.product.id,
      count: item.count,
      detail: item.product.name, // basit geçiyoruz
    }));

    return {
      address_id: selectedAddress,
      order_date: new Date().toISOString(),
      card_no: selectedCardData.card_no,
      card_name: selectedCardData.name_on_card,
      card_expire_month: selectedCardData.expire_month,
      card_expire_year: selectedCardData.expire_year,
      card_ccv: 321, // şimdilik sabit
      price: productTotal,
      products,
    };
  }

  useEffect(() => {
    if (!isVerifiedUser) return;
    dispatch(fetchAddresses());
  }, [dispatch, isVerifiedUser]);

  if (!token && !isVerifiedUser) {
    return <Navigate to="/login" replace />;
  }

  if (token && !isVerifiedUser) {
    return (
      <section className="flex min-h-100 items-center justify-center bg-[#FAFAFA]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E8E8E8] border-t-[#23A6F0]" />
      </section>
    );
  }

  function buildOrderPayload() {
    const selectedItems = cart.filter((item) => item.checked);

    const productTotal = selectedItems.reduce(
      (sum, item) => sum + item.product.price * item.count,
      0,
    );

    const products = selectedItems.map((item) => ({
      product_id: item.product.id,
      count: item.count,
      detail: item.product.name, // basit geçiyoruz
    }));

    return {
      address_id: selectedAddress,
      order_date: new Date().toISOString(),
      card_no: selectedCardData.card_no,
      card_name: selectedCardData.name_on_card,
      card_expire_month: selectedCardData.expire_month,
      card_expire_year: selectedCardData.expire_year,
      card_ccv: 321, // şimdilik sabit
      price: productTotal,
      products,
    };
  }

  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-10 lg:py-14">
      <div className="mx-auto w-full max-w-365">
        <OrderStepHeader
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="w-full lg:w-[70%]">
            {currentStep === 1 ? (
              <OrderAddressSection
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            ) : (
              <OrderPaymentSection
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              />
            )}
          </div>

          <div className="w-full lg:w-[30%]">
            <OrderSummary
              cart={cart}
              buttonText={
                currentStep === 1 ? "Save and Continue" : "Complete Order"
              }
              onButtonClick={async () => {
                if (currentStep === 1) {
                  setCurrentStep(2);
                  return;
                }

                if (!selectedAddress || !selectedCardData) {
                  alert("Please select address and card");
                  return;
                }

                const payload = buildOrderPayload();

                const result = await dispatch(createOrder(payload));

                if (!result.success) {
                  alert(result.error);
                  return;
                }

                alert("Order created successfully!");
                dispatch(setCart([]));
                setCurrentStep(1);
                setSelectedAddress(null);
                setSelectedCard(null);
                navigate("/previous-orders");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
