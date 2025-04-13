'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LastRealese() {

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
    return (
        <section className='last_release' id='last-release'>
            <h4>Les Dernières Sorties Anime</h4>
            <h5>Ne manque rien de la saison ! Nouveaux épisodes, dernières séries et tout ce qu’il te faut pour rester à jour.</h5>

            <a href='#' className='card_anime'>
                <Image className='card_anime__title' alt='' src='http://localhost:1337/uploads/title_friren_8979483797.png' width={100} height={50} />
                <Image className='card_anime__image' alt='' src='http://localhost:1337/uploads/frieren_8c09e65ee6.png' width={240} height={150} draggable="false" />
                <span> Frieren beyond journey's end </span>
            </a>


        </section>
    )
}
