import {AlarmClock, ChartArea, ChevronRight } from "lucide-react";

export default function PostCard() {
  return (
    <div className="bg-white shadow-md">
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/featured-product-bottom-card.png"
          alt="Post Card"
          className="w-full object-cover"
        />
        <span className="absolute left-4 top-4 bg-[#E74040] px-2 py-1 text-xs font-bold text-white">
          NEW
        </span>
      </div>
      <div className="p-6">
        <div className="flex gap-4 text-xs text-[#737373]">
          <span className="text-[#8EC2F2]">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-[#252B42]">
          Loudest à la Madison #1 (L'integral)
        </h3>
        <p className="mt-3 text-sm text-[#737373] font-semibold">
          {" "}
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-[#737373]">
          <div className="flex flex-row gap-2 items-center">
            <AlarmClock size={18} className="text-[#23A6F0]" />
            <span>22 April 2021</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <ChartArea size={18} className="text-[#23856D]" />
            <span>10 comments</span>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center mt-6">
          <button className=" text-sm font-bold text-[#737373]">
            Learn More
          </button>
          <ChevronRight size={24} className="text-[#23A6F0]" />
        </div>
      </div>
    </div>
  );
}
