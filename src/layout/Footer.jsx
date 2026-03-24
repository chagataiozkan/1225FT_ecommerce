import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-6xl lg:max-w-352.5 px-6 lg:px-0 py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>

          <div className="flex gap-5 text-[#23A6F0]">
            <Facebook size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl lg:max-w-352.5 px-6 lg:px-0 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-between">
          <div>
            <h5 className="mb-4 text-base font-bold text-[#252B42]">
              Company Info
            </h5>
            <div className="flex flex-col gap-3 text-sm font-semibold text-[#737373]">
              <Link to="/about">About Us</Link>
              <p>Career</p>
              <p>We Are Hiring</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-base font-bold text-[#252B42]">Legal</h5>
            <div className="flex flex-col gap-3 text-sm font-semibold text-[#737373]">
              <Link to="/about">About Us</Link>
              <p>Career</p>
              <p>We Are Hiring</p>
              <p>Blog</p>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-base font-bold text-[#252B42]">
              Features
            </h5>
            <div className="flex flex-col gap-3 text-sm font-semibold text-[#737373]">
              <p>Business Marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-base font-bold text-[#252B42]">
              Resources
            </h5>
            <div className="flex flex-col gap-3 text-sm font-semibold text-[#737373]">
              <p>IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-base font-bold text-[#252B42]">
              Get In Touch
            </h5>

            <div className="flex w-full overflow-hidden rounded-md border border-[#E6E6E6]">
              <input
                type="email"
                placeholder="Your Email"
                className="min-w-0 flex-1 bg-[#F9F9F9] px-4 py-3 text-sm outline-none placeholder:text-[#737373]"
              />
              <button className="shrink-0 bg-[#23A6F0] px-4 py-3 text-sm text-white">
                Subscribe
              </button>
            </div>

            <p className="mt-2 text-xs text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm font-semibold text-[#737373]">
          <p>Made With Love By</p>
          <p>Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
