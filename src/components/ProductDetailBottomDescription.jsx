import { ChevronRight } from "lucide-react";

export default function ProductDescriptionTabs() {
  const bulletItems = [
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
  ];

  return (
    <section className="bg-[#FFFFFF] px-6 py-10">
      <div className="mx-auto w-full max-w-90 lg:max-w-354">
        <div className="flex items-center justify-center gap-6 border-b border-[#ECECEC] pb-6 text-xs font-semibold text-[#737373]">
          <button
            type="button"
            className="text-[#737373] underline underline-offset-4"
          >
            Description
          </button>

          <button type="button" className="text-[#737373]">
            Additional Information
          </button>

          <button
            type="button"
            className="flex flex-row items-center gap-1 text-[#737373]"
          >
            Reviews <span className="text-[#2DC071]">(0)</span>
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-25">
          <div className="lg:w-[32%]">
            <div className="overflow-hidden rounded-md bg-white">
              <img
                src="/images/product-room.png"
                alt="Room"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-[25%]">
            <h2 className="text-[25px] font-bold leading-tight text-[#252B42]">
              the quick fox jumps over
            </h2>

            <div className="mt-8 space-y-6 text-sm font-semibold leading-6 text-[#737373]">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>

              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>

              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>

          <div className="lg:w-[34%]">
            <div>
              <h3 className="text-[25px] font-bold leading-tight text-[#252B42]">
                the quick fox jumps over
              </h3>

              <div className="mt-8 space-y-4">
                {bulletItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-semibold text-[#737373]"
                  >
                    <ChevronRight size={16} className="text-[#737373]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-[25px] font-bold leading-tight text-[#252B42]">
                the quick fox jumps over
              </h3>

              <div className="mt-8 space-y-4">
                {bulletItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-semibold text-[#737373]"
                  >
                    <ChevronRight size={16} className="text-[#737373]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}