import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        loop
        className="relative"
      >
        {[2020, 2021].map((year) => (
          <SwiperSlide key={year}>
            <div className="relative h-150 w-full overflow-hidden lg:h-250">
              <img
                src="/images/shop-hero-1-product-slide-1.jpg"
                alt="New Collection"
                className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
              />

              <div className="absolute inset-0 flex items-center px-6 lg:px-0">
                <div className="mx-auto flex w-full max-w-360 justify-center lg:justify-start">
                  <div className="flex flex-col items-center text-center text-white lg:w-[45%] lg:items-start lg:pl-24 lg:text-left xl:pl-36">
                    <p className="mb-12 text-base font-bold tracking-wide lg:text-xl">
                      SUMMER {year}
                    </p>

                    <h1 className="mb-12 text-4xl font-bold leading-tight lg:text-5xl">
                      NEW COLLECTION
                    </h1>

                    <p className="mb-12 max-w-[20rem] text-xl font-normal leading-8 lg:max-w-md lg:text-2xl lg:leading-10">
                      We know how large objects will act, but things on a small
                      scale.
                    </p>

                    <button className="rounded-md bg-[#2DC071] px-8 py-4 text-xl font-bold text-white lg:px-10 lg:text-2xl">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>

              <button className="hero-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white lg:left-10">
                <ChevronLeft className="w-12 h-12 lg:w-20 lg:h-20" strokeWidth={1} />
              </button>

              <button className="hero-next absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white lg:right-10">
                <ChevronRight className="w-12 h-12 lg:w-20 lg:h-20" strokeWidth={1} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}