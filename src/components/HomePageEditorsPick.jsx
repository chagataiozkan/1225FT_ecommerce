export default function EditorsPick() {
  return (
    <section className="bg-[#FAFAFA] px-8 lg:px-60 py-12 lg:py-20">
      <div className="mx-auto max-w-sm text-center">
        <h2 className="text-2xl font-bold text-[#252B42]">EDITOR’S PICK</h2>
        <p className="mt-2 text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-6">
        <div className="relative lg:w-1/2">
          <img
            src="/images/editorpick-men.png"
            alt="Men"
            className="h-150 w-full object-cover lg:h-200"
          />
          <button className="absolute bottom-6 left-6 bg-white px-16 py-4 text-sm font-bold text-[#252B42]">
            MEN
          </button>
        </div>

        <div className="flex flex-col gap-8 lg:w-1/2 lg:flex-row lg:gap-6">
          <div className="relative lg:w-1/2">
            <img
              src="/images/editorspick-women.png"
              alt="Women"
              className="h-150 w-full object-cover lg:h-200"
            />
            <button className="absolute bottom-6 left-6 bg-white px-16 py-4 text-sm font-bold text-[#252B42]">
              WOMEN
            </button>
          </div>

          <div className="flex flex-col gap-8 lg:w-1/2 lg:gap-6">
            <div className="relative flex-1">
              <img
                src="/images/editorspick-accessories.png"
                alt="Accessories"
                className="h-75 w-full object-cover lg:h-97"
              />
              <button className="absolute bottom-6 left-6 bg-white px-16 py-4 text-xs font-bold text-[#252B42]">
                ACCESSORIES
              </button>
            </div>

            <div className="relative flex-1">
              <img
                src="/images/editorspick-kids.png"
                alt="Kids"
                className="h-75 w-full object-cover lg:h-97"
              />
              <button className="absolute bottom-6 left-6 bg-white px-16 py-4 text-sm font-bold text-[#252B42]">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
