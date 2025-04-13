'use client'
import React, {forwardRef, useState,useImperativeHandle,useRef, useEffect } from 'react'
import Image from 'next/image'
import { Anime } from '@/types/anime'

interface PopUpProps {
  
  hidden: Boolean

}
 const PopUp= forwardRef((props:PopUpProps,ref)=> {
    const audioRef = useRef<HTMLAudioElement | null>(null);
  const localRef = useRef<HTMLDivElement>(null);
  const { hidden = true } = props;
const [visible,isVisible ] = useState(props.hidden)
const [anime,setAnime] = useState<Anime>()
const[uuid,setUuid]  = useState<string>('')
useEffect(()=>{


})
useImperativeHandle(ref, () => ({
handlerOpen:(anime:Anime)=>{
  
isVisible(true)
console.log('uuid,',anime)
setAnime(anime)


  setTimeout(()=>{
    if(audioRef.current){
  audioRef.current.play();
  audioRef.current.loop= true;}
},800)



}
}));
const handlerClose=()=>{
isVisible(false)

  if(audioRef.current){
    audioRef.current.pause();

}
}

if(!visible){
  return (<div></div>)
}
if(visible){
  return (
    
    <div 
    >
  
    <div className={`popup ${visible? 'visible':''}`} onClick={()=>handlerClose()}>
    <audio ref={audioRef} controls>
                        <source src={`${process.env.NEXT_PUBLIC_API_URL}${anime?.musique.url}`} type="audio/mpeg" />
                    </audio>
      <div className='popup__content'>
        <div className='popup__close' onClick={()=>handlerClose()}> <i className="fa-solid fa-x" style={{color:'#000'}} aria-hidden='true' ></i></div>
        <div className='popup__title'>
          <Image alt='image_pop_up' src={`${process.env.NEXT_PUBLIC_API_URL}${anime?.imgTitle.url}`} width={500} height={500} />
        </div>
        <Image className='popup__bg' alt='' src={`${process.env.NEXT_PUBLIC_API_URL}${anime?.gif.url}`} width={500} height={500} />
        <div className='popup__text'>
        <p>{anime?.description}</p>
        <a href={`/archive/${anime?.name}`}> Watch </a>
      
        </div>
      </div>
    </div>
   
    </div>
  )}
})
export default PopUp;