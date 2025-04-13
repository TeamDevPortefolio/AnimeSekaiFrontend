
import React from 'react'
import { Anime,Episode } from '@/types/anime'
import Image from 'next/image';
import WatchFrame from '@/components/Watch/WatchFrame'
interface WatchProps{
  params:{
    id:String
  }
}


interface DataAnime{

    data:{
     episodes:Episode[]
    }

}

export default  async function WatchPage({params}:WatchProps) {
const {id} = params;
async function getData(): Promise<DataAnime> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/animes/${id}?populate[episodes][populate]=videos`, {
    headers: { 'Authorization': `Bearer ${process.env.TOKEN_API}  ` }
  })
  await new Promise((resolve => setTimeout(resolve, 4000)))
  return res.json();
}
let res = await getData();
const episodes = res.data.episodes;
// const episode = anime.map((item,index)=>{
// console.log('video',item)
// }
// )
console.log('anime:',episodes)
  return (
    <div className='watch_page container-wide'>


      <div className='watch_page__top'>

      </div>
      watch page {id}
   <WatchFrame episodes={episodes}/>

<section className='recommend'>
<h3>Recommendation anime similaire</h3>
<div className='recommend__content'>

  <a className='card_anime'>
                <Image className='card_anime__title' alt='' src='http://localhost:1337/uploads/title_friren_8979483797.png' width={100} height={50} />
                <Image className='card_anime__image' alt='' src='http://localhost:1337/uploads/frieren_8c09e65ee6.png' width={240} height={150} draggable="false" />
                <span> Frieren beyond journey's end </span>

            </a>


</div>


</section>
      
    </div>
  )
}
