'use client'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { getnextdays } from '@/util/dateScheduale';
import { Anime, Episode } from '@/types/anime';
export default function Schedule() {

    const dateNow = new Date()
    const [isToday, setToday] = useState(false)
    const todays = dateNow.toLocaleString('en-US', { weekday: 'long' });
    const swipperRef = useRef(null)
    const dates = getnextdays();
    const [airDate, setAirDate] = useState<Episode[] | undefined>()

const slideRef = useRef<(HTMLElement|null)[]>([])


    async function handleAirdate(weekday: any, day: any) {
        console.log(day);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/episodes?populate=anime&filters[airDate][$eq]=${weekday}&filters[days][$eq]=${day}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer  350288b8da348c3134b69bce22bcd68ea6995834b8e8eb279176d953aeb9ac8870ab318b71d553ad838061079f7287d9adc700c3475f86e0f07207d572d1029cfe09822bb380edbed76627bf7714b4d32d70272275b821e0e79979785bfd72669c67886c0855f32f1b14a747b9f008014b1d781b222c5a6cbba680faa01b73a9`
            }

        })

        if (!res.ok) {
            throw new Error(`Response status jh: ${res.status}`);

        }

        const data = await res.json();
        console.log(data.data)
        setAirDate(data.data)

    }



    useEffect(() => {
        handleAirdate(todays,29)


    }, [])

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
                            slidesPerView: 7,
                            spaceBetween: 30,
                        }

                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}


                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {dates.map((day, index) => (
                        <SwiperSlide key={index} onClick={() => handleAirdate(day.weekday, day.days)}>
                            <div className='schedule__card' style={todays === day.weekday ? { backgroundColor: "green" } : {}} ref={(el)=>{(slideRef.current[index]=el)}} >
                                <h3>{day.weekday}</h3>
                                <span> {day.days}</span>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
                <div className="swiper-button-prev" > <i className="fa fa-arrow-left" aria-hidden="true"></i></div>
                <div className="swiper-button-next" > <i className="fa fa-arrow-right" aria-hidden="true"></i></div>
            </div>
            <div className='schedule__calendar'>
                {airDate?.map((episode, index) => (<div className='schedule__cell' key={index}>
                    <div>{episode.airTime.slice(0, 5)}  <span></span> <span>{episode.anime.name}</span></div>
                    <a href='#'>Episode {episode.nb_episode}<i className='fa fa-play' aria-hidden="true"></i></a>
                </div>))}

                <div className='schedule__cell'>
                    <div>
                        <span>9H00</span> <span>DEMON SLAYER</span>
                    </div>
                </div>



            </div>



        </section >
    );
}