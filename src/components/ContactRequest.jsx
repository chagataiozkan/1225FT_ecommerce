import { Phone, MapPin, Send } from "lucide-react";

export default function ContactRequest() {
  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-16 lg:bg-white lg:mt-12">
      <div className="mx-auto max-w-80 lg:max-w-150 text-center">
        <p className="text-xs font-bold text-[#252B42]">VISIT OUR OFFICE</p>
        <h2 className="mt-5 text-4xl font-bold text-[#252B42] leading-13">
          We help small businesses with big ideas
        </h2>
      </div>
      <div className="mt-12 lg:mt-36 flex flex-col gap-6 lg:mx-auto lg:max-w-365 lg:flex-row lg:justify-center lg:gap-10">
        <div className="flex flex-col items-center bg-white px-6 py-10 lg:px-12 lg:py-20 text-center">
          <Phone size={80} className="text-[#23A6F0]" />
          <p className="mt-6 text-sm text-[#252B42] font-bold">
            georgia.young@example.com
          </p>
          <p className="text-sm text-[#252B42] font-bold">
            georgia.young@ple.com
          </p>
          <p className="mt-4 font-bold text-[#252B42]">Get Support</p>
          <button className="mt-4 border border-[#23A6F0] rounded-md px-6 py-4 text-sm font-bold text-[#23A6F0]">
            Submit Request
          </button>
        </div>
        <div className="flex flex-col items-center bg-[#252B42] px-6 py-10 lg:px-12 lg:py-20 text-center text-white">
          <MapPin size={80} className="text-[#23A6F0]" />
          <p className="mt-6 text-sm text-[#FFFFFF] font-bold">
            georgia.young@example.com
          </p>
          <p className="text-sm text-[#FFFFFF] font-bold">
            georgia.young@ple.com
          </p>
          <p className="mt-4 font-bold">Get Support</p>
          <button className="mt-4 border border-[#23A6F0] rounded-md px-6 py-4 text-sm font-bold text-[#23A6F0]">
            Submit Request
          </button>
        </div>
        <div className="flex flex-col items-center bg-white px-6 py-10 lg:px-12 lg:py-20 text-center">
          <Send size={80} className="text-[#23A6F0]" />
          <p className="mt-6 text-sm text-[#252B42] font-bold">
            georgia.young@example.com
          </p>
          <p className="text-sm text-[#252B42] font-bold">
            georgia.young@ple.com
          </p>
          <p className="mt-4 font-bold text-[#252B42]">Get Support</p>
          <button className="mt-4 border border-[#23A6F0] rounded-md px-6 py-4 text-sm font-bold text-[#23A6F0]">
            Submit Request
          </button>
        </div>
      </div>
    </section>
  );
}
