import swiperDBlink from '../json/swiperinfo.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";


const Worksswiper = (props) => {
  const swiperinfo = swiperDBlink[props.objnm];
  return (
    <section data-aos="zoom-in" className="section text-center" id={props.contentid}>
      <Swiper className='workSection'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1.3
          }
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}

        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          swiperinfo.map((item, index) => {
            return (
              <SwiperSlide className={item.cls} key={'sw' + index} style={{ backgroundImage: item.bg }}>{item.worktitle}</SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Worksswiper;