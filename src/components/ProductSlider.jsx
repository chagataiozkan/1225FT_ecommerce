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
            <div className="relative h-285 w-full overflow-hidden lg:h-220">
              <img
                src="/images/shop-hero-2-product-slide-2.jpg"
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 px-6 pt-16 text-white lg:px-0 lg:pt-0">
                <div className="mx-auto flex h-full w-full max-w-360 flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                  <div className="flex flex-col items-center lg:w-[40%] lg:items-start lg:pl-24">
                    <p className="mb-8 mt-16 text-sm font-bold tracking-wide lg:text-xl">
                      SUMMER {year}
                    </p>

                    <h1 className="mb-8 text-[32px] font-bold leading-tight lg:text-6xl">
                      Vita Classic
                      <br />
                      Product
                    </h1>

                    <p className="mb-8 max-w-65 text-lg leading-8 lg:max-w-md lg:text-2xl lg:leading-10">
                      We know how large objects will act, but things on a small
                      scale.
                    </p>

                    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-start">
                      <span className="text-2xl font-bold lg:mb-0">$16.48</span>

                      <button className="rounded-md bg-[#2DC071] px-8 py-3 text-sm font-bold text-white lg:px-10 lg:py-4 lg:text-base">
                        ADD TO CART
                      </button>
                    </div>

                  </div>
                  <div className="mt-26 flex w-full justify-center overflow-hidden lg:mt-0 lg:w-[45%] lg:justify-end lg:self-end">
                    <img
                      src="/images/shop-hero-2-png-picture-1.png"
                      alt="Model"
                      className="h-125 w-auto max-w-none lg:h-195"
                    />
                  </div>
                </div>
              </div>

              <button className="hero-prev absolute left-4 top-[45%] z-10 -translate-y-1/2 text-white lg:left-8 lg:top-1/2">
                <ChevronLeft
                  className="h-10 w-10 lg:h-16 lg:w-16"
                  strokeWidth={3}
                />
              </button>

              <button className="hero-next absolute right-4 top-[45%] z-10 -translate-y-1/2 text-white lg:right-8 lg:top-1/2">
                <ChevronRight
                  className="h-10 w-10 lg:h-16 lg:w-16"
                  strokeWidth={3}
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
