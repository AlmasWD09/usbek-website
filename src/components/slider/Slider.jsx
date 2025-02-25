import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"
// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';


const Slider = () => {

    return (
        <div className=' px-4 pt-16'>

            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    activeClass: 'pagination-active', //active class add
                }}

                loop={true}
                modules={[Autoplay, Pagination,]}
                className="max-w-[1167px]">

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[384px] slider1 rounded'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[384px] slider2 rounded'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[384px] slider3 rounded'>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;