import { useSelector } from "react-redux";
import ShoppingCartPageHeader from "../components/ShoppingCartHeader";
import ShoppingCartList from "../components/ShoppingCartList";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

export default function Cart() {
  const cart = useSelector((state) => state.shoppingCart.cart);

  return (
    <section className="bg-[#FAFAFA] px-6 py-10 lg:py-14">
      <div className="mx-auto max-w-355">
        <ShoppingCartPageHeader itemCount={cart.length} />
        <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
          <div className="w-full lg:w-[70%]">
            <ShoppingCartList cart={cart} />
          </div>
          <div className="w-full lg:w-[30%]">
            <ShoppingCartSummary cart={cart} />
          </div>
        </div>
      </div>
    </section>
  );
}
