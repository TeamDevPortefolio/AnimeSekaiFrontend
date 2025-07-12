'use client'
import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { ViewType } from '@/types/anime'




const  AnimeView=()=>{
const [views,setViews] = useState<ViewType[]| null>()



  async function dataView(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/views?populate=anime`,{
      method:"GET",
        headers: { 'Authorization': `Bearer  350288b8da348c3134b69bce22bcd68ea6995834b8e8eb279176d953aeb9ac8870ab318b71d553ad838061079f7287d9adc700c3475f86e0f07207d572d1029cfe09822bb380edbed76627bf7714b4d32d70272275b821e0e79979785bfd72669c67886c0855f32f1b14a747b9f008014b1d781b222c5a6cbba680faa01b73a9` },
        cache: "no-store", // Empêche le cache si besoin



    })
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);

  }

  const data = await res.json();
  setViews(data.data)
  console.log('views',data.data)

 

  }
  useEffect(()=>{
    dataView()

  

    
  },[])

const top = views?.reduce((prev,current)=>{
const prevViews = Object.values(prev.view)
const currentView = Object.values(prev.view)
const maxprev = prevViews.reduce((a,b)=>a+b)
const maxcurrent = currentView.reduce((a,b)=>a+b)


return maxcurrent > maxprev ? current:prev



})

    return (
        <div className="weekly">

          <div className="weekly__top">
            <div className="weekly__day">
              Days
            </div>
            <div className="weekly__day">
              Week
            </div>
            <div className="weekly__day">
              Mouth
            </div>

          </div>
          <div className="weekly__content">

            <div className="weekly__img_wrap">
              <Image src="http://localhost:1337/uploads/DALL_E_2024_10_22_21_18_52_An_anime_character_standing_in_a_13d47301d4.png" alt="main anime at this moment" width={296} height={196} />
              <div className="weekly__img_text">
                <span> 1</span>
                <h4>The new hero of grave</h4>
              </div>
            </div>
            <div className="weekly__cards">


              <div className="weekly__card">
                <span className="weekly__number"> 1</span>
                <Image src='http://localhost:1337/uploads/tokyo_reverger_c9ae4afe81.png' width={40} height={40} alt="Photo card" />
                <div className="weekly__card_content">
                  <h4>Tokyo revenger season 2</h4>
                  <div className="weekly__view">
                    <span><i className="fa-solid fa-eye" aria-hidden="true"></i>10,000</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

           )


} 
export default AnimeView