'use client'
import React, { useRef, useEffect,useState, ComponentElement, RefObject } from 'react'
import Image from 'next/image'
import PopUp from './PopUp';
import { Anime } from '@/types/anime';
interface Recommendations {
  anime: Anime[]

}


export default function Recommend({anime}:Recommendations) {

const imageTrack = useRef<HTMLDivElement | null>(null);
const imageRef  = useRef<HTMLImageElement | null>(null);
const popRef = useRef<{handlerOpen:(animes:Anime)=>void}>(null)
const [open, setOpen] = useState(false);
const list = anime.map((item,index)=>(
    <a  className='card_anime' key={item.documentId} onClick={()=>Open(item)}>
    <Image className='card_anime__title' alt='' src={`${process.env.NEXT_PUBLIC_API_URL}${item.imgTitle.url}`} width={100} height={50}/>
    <Image className='card_anime__image' ref={imageRef} alt='' src={`${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail.url}`}  width={240} height={150} draggable="false" />
<span>{item.name} </span>
</a>
))
    useEffect(() => {
       
    },[open])


const Open=(anime:Anime)=>{

    if(popRef.current)
    popRef.current.handlerOpen(anime)
}


    return (
        <section className='recommends'>
            <PopUp ref={popRef} hidden={false}/>
            <div className='recommends__content'>

         
            <h4>Découvre Ton Prochain Chef-d'œuvre Anime</h4>
            <h5>Laisse-nous te guider vers des aventures épiques, des émotions intenses et des histoires inoubliables, adaptées à tes goûts.</h5>
            <div> </div>
            <div id='track' ref={imageTrack} data-mouse-down-at="0" data-prev-pourcentage='0'>
{list}
 

            </div>
          
            </div>
  {/* <PopUp/> */}
        </section>
    )
}
