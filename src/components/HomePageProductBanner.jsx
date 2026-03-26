export default function ProductBanner() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="mx-auto flex flex-col items-center px-6 pt-36 text-center lg:pt-0 lg:flex-row lg:justify-between lg:px-20 lg:text-left">
        <div className="flex flex-col items-center lg:w-[45%] lg:items-start">
          <p className="mb-6 text-sm font-bold text-gray-400">SUMMER 2020</p>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#252B42] lg:text-5xl">
            Part of the
            <br />
            Neural
            <br />
            Universe
          </h2>
          <p className="mb-8 max-w-60 text-[18px] leading-8 text-[#737373] font-semibold lg:max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="mb-10 flex flex-col gap-8 lg:gap-4 lg:flex-row">
            <button className="rounded-md bg-[#23A6F0] lg:bg-[#2DC071] px-10 py-4 text-sm font-bold text-white">
              BUY NOW
            </button>
            <button className="rounded-md border border-[#23A6F0] lg:border-[#2DC071] px-10 py-4 text-sm font-bold text-[#23A6F0] lg:text-[#2DC071]">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-12 w-full lg:mt-0 lg:w-[50%] lg:order-first">
          <img
            src="/images/asian-woman-man-with-winter-clothes.png"
            alt="Product"
            className="mx-auto w-full max-w-125 lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
