import { Play } from "lucide-react";

export default function AboutUsVideo() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative mx-auto w-full max-w-75 overflow-hidden rounded-[20px] lg:max-w-6xl">
          <img
            src="/images/aboutus-video-picture.png"
            alt="Video"
            className="h-70 w-full object-cover lg:h-auto"
          />

          <button className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#23A6F0]">
              <Play size={24} className="ml-1 text-white" />
            </div>
          </button>
        </div>
        <div className="mx-auto pt-40 max-w-80 text-center">
          <h2 className="text-4xl font-bold text-[#252B42] leading-tight lg:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto pt-6 text-center text-sm font-semibold leading-6 text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </section>
  );
}
