import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function TeamPageFreeTrial() {
  return (
    <section className="w-full bg-[#FFFFFF] px-6 py-50 lg:py-28">
      <div className="mx-auto flex max-w-75 lg:max-w-200 flex-col items-center text-center">
        <h2 className="text-4xl font-bold leading-14 text-[#252B42] lg:text-5xl">Start your 14 days free trial</h2>
        <p className="mt-6 text-sm leading-6 font-semibold lg:max-w-120 text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="mt-8 rounded-md bg-[#23A6F0] px-8 py-3 text-sm font-bold text-white">Try it free now</button>
        <div className="mt-8 flex items-center gap-6">
            <Twitter size={25}/>
            <Facebook size={25}/>
            <Instagram size={25}/>
            <Linkedin size={25}/>
        </div>
      </div>
    </section>
  );
}
