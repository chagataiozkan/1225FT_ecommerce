import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#FAFAFA] lg:bg-[#FFFFFF] lg:px-6">
      <div className="flex flex-col lg:mx-auto lg:max-w-350 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex flex-col items-center px-20 pt-16 pb-10 text-center lg:w-[55%] lg:items-start lg:px-0 lg:pt-0 lg:pb-0 lg:text-left">
          <p className="text-xs font-bold text-[#252B42]">CONTACT US</p>

          <h2 className="mt-9 text-4xl font-bold leading-tight text-[#252B42] lg:text-6xl">
            Get in touch
            <br />
            today!
          </h2>

          <p className="mt-8 text-xl leading-8 text-[#737373] lg:max-w-100 font-semibold">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-2xl font-bold text-[#252B42]">
            <p>Phone: +451 215 215</p>
            <p>Fax: +451 215 215</p>
          </div>

          <div className="mt-9 flex items-center gap-8 text-[#252B42]">
            <Twitter size={18} />
            <Facebook size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-0 lg:w-[45%] lg:justify-end">
          <img
            src="/images/contact-image.png"
            alt="Contact Image"
            className="h-auto w-full max-w-80 object-contain lg:max-w-155"
          />
        </div>
      </div>
    </section>
  );
}