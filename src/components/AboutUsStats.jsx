export default function AboutUsStats() {
  return (
    <section className="w-full bg-[#FFFFFF] px-6 py-20 lg:py-24">
      <div className="mx-auto flex max-w-90 flex-col lg:flex-row items-center gap-16 text-center lg:max-w-355 lg:justify-between">
        <div>
          <h2 className="text-4xl font-bold text-[#252B42] lg:text-5xl">15K</h2>
          <p className="mt-2 text-sm font-bold text-[#737373]">
            Happy Customers
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-[#252B42] lg:text-5xl">
            150K
          </h2>
          <p className="mt-2 text-sm font-bold text-[#737373]">
            Monthly Visitors
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-[#252B42] lg:text-5xl">15</h2>
          <p className="mt-2 text-sm font-bold text-[#737373]">
            Countries Worldwide
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-[#252B42] lg:text-5xl">
            100+
          </h2>
          <p className="mt-2 text-sm font-bold text-[#737373]">
            Top Partners
          </p>
        </div>
      </div>
    </section>
  );
}
