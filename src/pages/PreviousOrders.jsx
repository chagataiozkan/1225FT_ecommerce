import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPreviousOrders } from "../store/actions/clientActions";
import PreviousOrderCard from "../components/PreviousOrderCard";
import api from "../api/axios";

export default function PreviousOrders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const isVerifiedUser = Boolean(user?.email);

  useEffect(() => {
    async function loadOrders() {
      setLoading(true);

      const result = await dispatch(fetchPreviousOrders());

      if (result.success) {
        setOrders(result.data);
      } else {
        console.log(result.error);
      }

      setLoading(false);
    }

    if (!isVerifiedUser) return;
    loadOrders();
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

  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-10 lg:py-14">
      <div className="mx-auto w-full max-w-365">
        <h1 className="text-3xl font-bold text-[#252B42]">Previous Orders</h1>

        {loading ? (
          <div className="mt-8 flex justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#E8E8E8] border-t-[#23A6F0]" />
          </div>
        ) : orders.length === 0 ? (
          <div className="mt-8 rounded-md border border-dashed border-[#E8E8E8] bg-white p-8 text-sm text-[#737373]">
            No previous orders found.
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <PreviousOrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
