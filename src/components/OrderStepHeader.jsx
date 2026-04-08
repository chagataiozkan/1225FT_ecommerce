export default function OrderStepHeader({ currentStep = 1, onStepChange }) {
  const isAddressStep = currentStep === 1;
  const isPaymentStep = currentStep === 2;

  return (
    <div className="overflow-hidden rounded-md border border-[#E8E8E8] bg-white">
      <div className="flex flex-col lg:flex-row">
        <button
          type="button"
          onClick={() => onStepChange?.(1)}
          className="flex-1 border-b border-[#E8E8E8] p-6 text-left lg:border-b-0 lg:border-r"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <span
              className={`text-3xl font-bold ${
                isAddressStep ? "text-[#23A6F0]" : "text-[#BDBDBD]"
              }`}
            >
              1
            </span>
            <div>
              <h2
                className={`text-lg font-bold ${
                  isAddressStep ? "text-[#252B42]" : "text-[#BDBDBD]"
                }`}
              >
                Address Information
              </h2>
              <p className="text-sm text-[#737373]">
                Select or add your delivery addresses.
              </p>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onStepChange?.(2)}
          className="flex-1 p-6 text-left"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <span
              className={`text-3xl font-bold ${
                isPaymentStep ? "text-[#23A6F0]" : "text-[#BDBDBD]"
              }`}
            >
              2
            </span>
            <div>
              <h2
                className={`text-lg font-bold ${
                  isPaymentStep ? "text-[#252B42]" : "text-[#BDBDBD]"
                }`}
              >
                Payment Options
              </h2>
              <p className="text-sm text-[#737373]">
                Select or add your payment method.
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
