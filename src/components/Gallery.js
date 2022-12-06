import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="mt-4 pt-4 h-screen" id="gallery">
      <h1 className="text-3xl border-b-2 border-yellow-400 pb-2 w-fit m-auto">Gallery</h1>

      <div className="mt-4 text-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper my-6 h-[80vh] w-3/4 lg:w-full"
          loop={true}
        >
          <SwiperSlide>
            <Image src="/gallery/carlos-aranda-IYMceGutrbQ-unsplash.jpg" width={1000} height={500} className="h-full w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/gallery/daan-evers-tKN1WXrzQ3s-unsplash.jpg" width={1000} height={500} className="h-full w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/gallery/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg" width={1000} height={500} className="h-full w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/gallery/jay-wennington-N_Y88TWmGwA-unsplash.jpg" width={1000} height={500} className="h-full w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/gallery/sandra-seitamaa-OFJGlG3sKik-unsplash.jpg" width={1000} height={500} className="h-full w-full object-cover" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/gallery/siyuan-g_V2rt6iG7A-unsplash.jpg" width={1000} height={500} className="h-full w-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
