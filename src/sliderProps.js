import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
export const testimonialsSlider = {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2, spaceBetween: 25 },
    1200: { slidesPerView: 3, spaceBetween: 25 },
  },
};
