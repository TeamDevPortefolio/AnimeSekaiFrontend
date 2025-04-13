'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import img from '../../public/img/rengoku.webp'
import gif from '../../../public/img/demon-slayer-gif-converter.gif';
import star from '../../../public/img/Star.png';


interface Picture{
    url:String
  }
  interface Media{
    url:String
  }
  interface CTA{
    text:string
    url:string
  }
  interface Anime{
   id:Number,
   name:String,
   description:String,
   notation:number,
   highline_title:String
   categories:String
   gif:Media,
   musique:Media
 
  }
  
  interface Hero { 
 
  headline:String,
  subHeadline:String,
  description:String,
  picture: Picture,
  Anime:Anime 
  cta:CTA
  
  }

export default function Hero({headline,subHeadline,description,picture,Anime,cta}:Hero) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const rightImg = useRef<HTMLDivElement | null>(null)
    const [hidden, setHidden] = useState(false);

    const mediaQuery = typeof window !== "undefined" && window.matchMedia("(max-width: 650px)").matches; // Vérifie si on est sur mobile
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('Rendu côté client');
          }
    }, [hidden])
    const animationPlay = () => {

        setHidden(true);
        if(rightImg.current){
            if(mediaQuery)
            rightImg.current.animate({
                                
               width: `100%`},{ duration: 1000, fill: "forwards" });
        }
        if(audioRef.current){
        audioRef.current.play();
        audioRef.current.loop= true;
    }

    }
    const animationStop = () => {

        setHidden(false);
        if(rightImg.current){
            if(mediaQuery)
            rightImg.current.animate({
                                
               width: "50%"},{ duration: 500, fill: "forwards" });
        }
        if(audioRef.current){
        audioRef.current.pause();
    }

    }
    const elements = []
    for (let i = 0; i < 5; i++) {
        elements.push(<Image key={i} alt="star" src={star} width={50} height={50} />);
    }

    return (

        <div className='hero' onClick={() => animationPlay()} onMouseOut={() => animationStop()}>
            <div className='hero__left'>

                <h4> {headline?? 'Sans title'}</h4>
                <h1>{subHeadline ?? "Sans headline"}</h1>
               <div className='categories'>

                    <span className='hero__tag'>Animation </span> <span className='hero__tag'>Animation</span> <span className='hero__tag'>Animation</span>

                </div> 
                 <div className='hero__stars'>
                    {elements?? 'etoile absent'} <span>4.0</span>
                </div>
                <p>
                    {description ?? ''}
                </p> 
                 <div className='hero__btn_wrap'>
                    <a href='#' className='button-rounded'>watch <span><i className="fa fa-play" aria-hidden="true" > </i>
                    </span></a>
                    <a href="#" className='button-outline'>Add to watch</a>
                </div> 
            </div>
            <div className='hero__right' ref={rightImg}>
                <div className='hero__img_wrap'>
                    {!hidden && (<Image alt="thumbnail" width={542} height={395} src={picture?.url?`${process.env.NEXT_PUBLIC_API_URL}${picture.url}`:`${process.env.NEXT_PUBLIC_API_URL}/uploads/default_img_292948ce91.webp`} unoptimized/>)}

                    {hidden && (<Image alt="thumbnail" width={542} height={395} src={Anime?.gif?`${process.env.NEXT_PUBLIC_API_URL}${Anime.gif.url}`:`${process.env.NEXT_PUBLIC_API_URL}/uploads/default_img_292948ce91.webp`} unoptimized/>)}

                    <audio ref={audioRef} controls>
                        <source src={`${process.env.NEXT_PUBLIC_API_URL}${Anime.musique.url}`} type="audio/mpeg" />
                    </audio>
                </div>
            </div>

        </div>
    )
}
