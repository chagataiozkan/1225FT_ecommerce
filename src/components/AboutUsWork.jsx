export default function AboutUsWork() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:h-225 lg:flex-row">
        
        {/* LEFT */}
        <div className="flex min-h-130 w-full flex-col items-center justify-center bg-[#2A7CC7] px-8 text-center text-white lg:min-h-0 lg:w-[60%] lg:items-start lg:px-40 lg:text-left">
          <p className="text-sm font-bold uppercase tracking-wide">
            Work With Us
          </p>

          <h2 className="mt-8 max-w-80 text-5xl font-bold leading-tight lg:max-w-170 lg:text-6xl">
            Now Let’s grow Yours
          </h2>

          <p className="mt-8 max-w-80 text-sm leading-6 font-semibold text-white/90 lg:max-w-130 lg:text-base">
            The gradual accumulation of information about atomic and
            small-scale behavior during the first quarter of the 20th
          </p>

          <button className="mt-10 rounded-md border border-white px-10 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#2A7CC7]">
            Button
          </button>
        </div>

        {/* RIGHT */}
        <div className="h-105 w-full bg-[#EDEDED] hidden lg:block lg:h-full lg:w-[40%]">
          <img
            src="/images/aboutus-workwithus-picture.png"
            alt="Model"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}