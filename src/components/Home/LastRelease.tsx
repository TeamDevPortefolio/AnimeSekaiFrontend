'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anime } from '@/types/anime';

interface LastAnime {
    animes: Anime[]

}
export default function LastRealese({ animes }: LastAnime) {

    useEffect(() => {

        const animamation = gsap.fromTo('.card_anime__image',
            {

                objectPosition: "100% center"
            },
            {

                objectPosition: "0% center",
                duration: 12,
                fill: 'forwards',
                stagger: {
                    each: 0.1
                },
                scrollTrigger: {
                    trigger: '#last-release',
                    start: 'top 40%',
                    end: 'bottom 55%',

                }

            }

        )



    }, [])
    console.log('anime', animes)
    const list = animes.map((item, index) => (

        <a href='#' className='card_anime' key={index}>
           {item.imgTitle?.url && <Image className='card_anime__title' alt='image' src={`${process.env.NEXT_PUBLIC_API_URL}${item.imgTitle.url}`} width={100} height={50} />}
           {item.thumbnail?.url &&<Image className='card_anime__image' alt='uue' src={`${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail.url}`} width={240} height={150} draggable="false" />} 
            <span> {item.name} </span>
        </a>

    ))
    return (
        <section className='last_release' id='last-release'>
            <h4>Les Dernières Mise a jour</h4>
            <h5>Ne manque rien de la saison ! Nouveaux épisodes, dernières séries et tout ce qu’il te faut pour rester à jour.</h5>

     
            <div className='last_release__content'>
                {list}
            </div>
        </section>
    )
}
