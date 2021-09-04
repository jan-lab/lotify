/* THIS COMPONENT IS NOT BEING USED, IT IS JUST FOR REFERENCE ON HOW TO IMPLEMENT THE SWIPER LIBRARY */

import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';
import 'swiper/swiper-bundle.css';

export default () => {
  return (
    <Swiper className="swiperContainer"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      spaceBetween={0}
      slidesPerView={1}
      slidesOffsetAfter={-250}
    >
      <SwiperSlide>
        <div className="testShow"> 1 </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="buttonsContainer">
          <div className="testButton"> 2 </div>
          <div className="testButton"> 3 </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};