export default function ContactTryFree() {
  return (
    <section className="w-full bg-white px-6 py-16 mb-20">
      <div className="mx-auto flex max-w-90 flex-col items-center text-center">
        
        <img
          src="/images/arrow.png"
          alt="arrow"
          className="h-14 w-14 object-contain"
        />

        <p className="mt-6 text-sm font-bold text-[#252B42]">
          WE Can't WAIT TO MEET YOU
        </p>

        <h2 className="mt-8 text-6xl font-bold text-[#252B42]">
          Let’s Talk
        </h2>

        <button className="mt-10 rounded-md bg-[#23A6F0] px-10 py-4 text-base font-bold text-white">
          Try it free now
        </button>
      </div>
    </section>
  );
}