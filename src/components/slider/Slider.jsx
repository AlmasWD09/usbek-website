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
        <div className=' px-4'>

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
                    <div className='h-[40vh] md:h-[55vh] lg:h-[348px] flex items-center slider1 rounded'>

                        <div className='max-w-[465px] text-[#FFFFFF] pl-8 py-8'>
                            <h1 className='font-Poppins font-bold text-[48px] leading-[57px]'>Stream, Upload & share videos</h1>
                            <p className='font-Roboto text-[16px] py-[16px]'>
                                Expanding from Chicagoland to nationwide, we connect people with local services and businesses, fostering stronger community connections and enhanced convenience.
                            </p>
                            <button className='bg-primary px-[28px] py-[8px] font-Roboto text-[16px] rounded-full'>Explore!</button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[348px] flex items-center slider2 rounded'>
                        <div className='max-w-[360px] text-[#FFFFFF] pl-8 py-8'>
                            <h1 className='font-Roboto text-[14px]'>Beauty Esthetics <span className='bg-primary text-[#FFFFFF] px-2 py-1 rounded ml-[8px]'>Ads</span></h1>

                            <p className='font-Poppins font-medium text-[24px] py-[16px]'>
                                Fit Southern Illinois CrossFit
                                Woman Gets Adjustment for Low Back and Neck Pain
                            </p>
                            <div className='flex items-center gap-2'>
                                <span><svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_55_2124" maskUnits="userSpaceOnUse" x="2" y="2" width="24" height="25">
                                        <rect x="2" y="2.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_55_2124)">
                                        <path d="M11.5 19L18.5 14.5L11.5 10V19ZM14 24.5C12.6167 24.5 11.3167 24.2375 10.1 23.7125C8.88333 23.1875 7.825 22.475 6.925 21.575C6.025 20.675 5.3125 19.6167 4.7875 18.4C4.2625 17.1833 4 15.8833 4 14.5C4 13.1167 4.2625 11.8167 4.7875 10.6C5.3125 9.38333 6.025 8.325 6.925 7.425C7.825 6.525 8.88333 5.8125 10.1 5.2875C11.3167 4.7625 12.6167 4.5 14 4.5C15.3833 4.5 16.6833 4.7625 17.9 5.2875C19.1167 5.8125 20.175 6.525 21.075 7.425C21.975 8.325 22.6875 9.38333 23.2125 10.6C23.7375 11.8167 24 13.1167 24 14.5C24 15.8833 23.7375 17.1833 23.2125 18.4C22.6875 19.6167 21.975 20.675 21.075 21.575C20.175 22.475 19.1167 23.1875 17.9 23.7125C16.6833 24.2375 15.3833 24.5 14 24.5Z" fill="#FF4D4D" />
                                    </g>
                                    <circle cx="14" cy="14.5" r="11.875" stroke="#E0E0E0" stroke-width="0.25" />
                                    <circle cx="14" cy="14.5" r="13.875" stroke="#E0E0E0" stroke-width="0.25" />
                                </svg>
                                </span>
                                <p className='font-Roboto text-[16px]'>Play</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[40vh] md:h-[55vh] lg:h-[348px] flex items-center slider3 rounded'>
                        <div className='max-w-[360px] text-[#FFFFFF] pl-8 py-8'>
                            <h1 className='font-Roboto text-[14px]'>Beauty Esthetics <span className='bg-primary text-[#FFFFFF] px-2 py-1 rounded ml-[8px]'>Ads</span></h1>

                            <p className='font-Poppins font-medium text-[24px] py-[16px]'>
                                Fit Southern Illinois CrossFit
                                Woman Gets Adjustment for Low Back and Neck Pain
                            </p>
                            <div className='flex items-center gap-2'>
                                <span><svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_55_2124" maskUnits="userSpaceOnUse" x="2" y="2" width="24" height="25">
                                        <rect x="2" y="2.5" width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_55_2124)">
                                        <path d="M11.5 19L18.5 14.5L11.5 10V19ZM14 24.5C12.6167 24.5 11.3167 24.2375 10.1 23.7125C8.88333 23.1875 7.825 22.475 6.925 21.575C6.025 20.675 5.3125 19.6167 4.7875 18.4C4.2625 17.1833 4 15.8833 4 14.5C4 13.1167 4.2625 11.8167 4.7875 10.6C5.3125 9.38333 6.025 8.325 6.925 7.425C7.825 6.525 8.88333 5.8125 10.1 5.2875C11.3167 4.7625 12.6167 4.5 14 4.5C15.3833 4.5 16.6833 4.7625 17.9 5.2875C19.1167 5.8125 20.175 6.525 21.075 7.425C21.975 8.325 22.6875 9.38333 23.2125 10.6C23.7375 11.8167 24 13.1167 24 14.5C24 15.8833 23.7375 17.1833 23.2125 18.4C22.6875 19.6167 21.975 20.675 21.075 21.575C20.175 22.475 19.1167 23.1875 17.9 23.7125C16.6833 24.2375 15.3833 24.5 14 24.5Z" fill="#FF4D4D" />
                                    </g>
                                    <circle cx="14" cy="14.5" r="11.875" stroke="#E0E0E0" stroke-width="0.25" />
                                    <circle cx="14" cy="14.5" r="13.875" stroke="#E0E0E0" stroke-width="0.25" />
                                </svg>
                                </span>
                                <p className='font-Roboto text-[16px]'>Play</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;