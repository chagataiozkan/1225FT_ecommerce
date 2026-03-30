export default function AboutUsDescription() {
  return (
    <section className="w-full bg-[#FFFFFF] px-12 py-24">
      <div className="mx-auto flex max-w-355 flex-col gap-10 lg:flex-row lg:items-center lg:gap-40">
        
        {/* LEFT */}
        <div className="flex flex-col text-center lg:w-[40%] lg:text-left">
          <p className="text-sm font-bold text-[#E74040]">
            Problems trying
          </p>

          <p className="mt-4 text-2xl font-bold leading-10 text-[#252B42] lg:text-4xl lg:leading-tight">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>

        {/* RIGHT */}
        <p className="text-sm font-semibold leading-6 text-[#737373] lg:w-[40%] text-left">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

      </div>
    </section>
  );
}