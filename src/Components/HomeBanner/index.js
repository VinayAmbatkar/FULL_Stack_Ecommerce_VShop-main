import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerOne from "../../assets/images/Banners/banner2.jpg";
import bannerTwo from "../../assets/images/Banners/Banner3.png";
import bannerThree from "../../assets/images/Banners/slideBanner2.jpg";

const banners = [
  { image: bannerOne, alt: "Shop the latest offers" },
  { image: bannerTwo, alt: "Discover products at VShop" },
  { image: bannerThree, alt: "Fresh deals for your home" },
];

export default function HomeBanner() {
  return (
    <section className="container storeHero">
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        navigation
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="storeHeroSlider"
      >
        {banners.map((item) => (
          <SwiperSlide key={item.image}>
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
