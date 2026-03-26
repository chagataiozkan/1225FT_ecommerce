import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductDetailSlider() {
  const images = [
    "/images/single-product-1-thumb-2.jpg",
    "/images/single-product-1-thumb-1.jpg",
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".product-prev", nextEl: ".product-next" }}
        loop
        className="relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-70 w-full overflow-hidden bg-white lg:h-120">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}

        <button
          type="button"
          className="product-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white"
        >
          <ChevronLeft className="h-8 w-8 lg:h-12 lg:w-12" strokeWidth={2.5} />
        </button>

        <button
          type="button"
          className="product-next absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white"
        >
          <ChevronRight className="h-8 w-8 lg:h-12 lg:w-12" strokeWidth={2.5} />
        </button>
      </Swiper>
    </div>
  );
}