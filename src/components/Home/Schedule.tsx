'use client'
import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
export default function Schedule() {


    return (
        <section className='schedule'>

            <h2> Estimated schedule</h2>

            <div className='swiper-content'>
                <Swiper
                className="swiper"
                    modules={[Navigation]} 
                    direction='horizontal'  
                     spaceBetween={10}
                    slidesPerView={2}
                  
                    breakpoints={{
                    
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        }
                      
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }}
               
                   
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='schedule__card'>
                            <h3>Mon</h3>
                            <span> Juil 25</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='schedule__card'>
                            <h3>Mon</h3>
                            <span> Juil 25</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>     <div className='schedule__card'>
                        <h3>TUES</h3>
                        <span> Juil 25</span>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='schedule__card'>
                            <h3>wednes</h3>
                            <span> Juil 25</span>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='schedule__card'>
                            <h3>Tuersdays</h3>
                            <span> Juil 25</span>
                        </div></SwiperSlide>
                        <SwiperSlide>
                        <div className='schedule__card'>
                            <h3>Fridays</h3>
                            <span> Juil 25</span>
                        </div></SwiperSlide>

                </Swiper>
                <div className="swiper-button-prev" > <i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="swiper-button-next" > <i className="fa fa-arrow-right" aria-hidden="true"></i></div>
            </div>
            <div className='schedule__calendar'>

                <div className='schedule__cell'>
                    <div>  <span>9H00</span> <span>DEMON SLAYER</span></div>
                    <a href='#'> Episode 2 <i className='fa fa-play' aria-hidden="true"></i></a>
                </div>
                <div className='schedule__cell'>
                    <div>
                        <span>9H00</span> <span>DEMON SLAYER</span>
                    </div>
                </div>



            </div>



        </section >
    );
}