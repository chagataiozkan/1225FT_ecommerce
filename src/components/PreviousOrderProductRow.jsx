export default function PreviousOrderProductRow({ product }) {
  return (
    <div className="flex items-center gap-4 rounded-md border border-[#E8E8E8] bg-white p-4">
      <img
        src={product.images?.[0]?.url}
        alt={product.name}
        className="h-20 w-20 rounded-md object-cover"
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-bold text-[#252B42]">
          {product.name}
        </h4>

        <p className="mt-1 line-clamp-2 text-sm text-[#737373]">
          {product.description}
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-[#737373]">
          Count: <span className="text-[#252B42]">{product.count}</span>
        </p>

        <p className="mt-1 text-sm font-bold text-[#23A6F0]">
          ${(product.price * product.count).toFixed(2)}
        </p>
      </div>
    </div>
  );
}