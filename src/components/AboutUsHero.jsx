export default function AboutUsHero() {
  return (
    <section className="w-full bg-[#FAFAFA] lg:bg-[#FFFFFF] lg:px-6">
      <div className="flex flex-col lg:mx-auto lg:max-w-350 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex flex-col items-center px-20 pt-16 pb-10 text-center lg:w-[55%] lg:items-start lg:px-0 lg:pt-0 lg:pb-0 lg:text-left">
          <p className="text-sm font-bold text-[#252B42] hidden lg:block">ABOUT COMPANY</p>

          <h2 className="mt-10 text-4xl font-bold leading-tight text-[#252B42] lg:text-6xl">
            ABOUT US
          </h2>

          <p className="mt-10 text-xl leading-8 text-[#737373] lg:max-w-100 font-semibold">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="mt-16 rounded-md bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white">
            Get Quote Now
          </button>
        </div>

        <div className="mt-16 flex justify-center lg:mt-0 lg:w-[45%] lg:justify-end">
          <img
            src="/images/aboutus-page-picture.png"
            alt="About Us Image"
            className="h-auto w-full max-w-80 object-contain lg:max-w-155"
          />
        </div>
      </div>
    </section>
  );
}
