import { ChevronRight } from "lucide-react";

export default function TeamPageHero() {
  return (
    <section className="w-full bg-[#FFFFFF] px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-80 lg:max-w-300 flex-col items-center text-center">
        <p className="text-xs font-bold text-[#737373]">WHAT WE DO</p>
        <h2 className="mt-6 text-4xl font-bold leading-tight text-[#252B42] lg:text-6xl">
          Innovation tailored for you
        </h2>
        <div className="mt-12 flex items-center gap-2 text-sm font-bold text-[#252B42]">
          <p>Home</p>
          <ChevronRight size={16} className="text-[#737373]" />
          <p className="text-[#737373]">Team</p>
        </div>
      </div>
    </section>
  );
}
