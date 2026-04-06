import { useSelector } from "react-redux";
import ShoppingCartPageHeader from "../components/ShoppingCartHeader";
import ShoppingCartList from "../components/ShoppingCartList";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

export default function Cart() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const total = cart.reduce((sum, item) => {
    if (!item.checked) return sum;
    return sum + item.product.price * item.count;
  }, 0);

  return (
    <section className="bg-[#FAFAFA] px-6 py-10 lg:py-14">
      <div className="mx-auto max-w-355">
        <ShoppingCartPageHeader itemCount={cart.length} />
        <div className="flex flex-col gap-6">
          <ShoppingCartList cart={cart} />
          <ShoppingCartSummary total={total} />
        </div>
      </div>
    </section>
  );
}
