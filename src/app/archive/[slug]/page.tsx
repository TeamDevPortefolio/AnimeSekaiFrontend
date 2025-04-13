import { Anime } from '@/types/anime'
import React from 'react'
import Image from 'next/image'
interface AnimeProps {
  params: {
    slug: String
  }

}
interface AnimeData {
  data: Anime[]
}

export default async function AnimePage({ params }: AnimeProps) {
  const { slug } = params

  async function getData(): Promise<AnimeData> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/animes?filters[name][$eq]=${slug}&populate=*`, {
      headers: { 'Authorization': `Bearer ${process.env.TOKEN_API}  ` }
    })
    await new Promise((resolve => setTimeout(resolve, 4000)))
    return res.json();
  }
  let res = await getData();
  const anime = res.data[0]
  console.log(anime)
  const userIp = await fetch("https://api64.ipify.org?format=json").then(res => res.json());

  console.log("ip", userIp.ip)
  const existingView: any = await fetch(`http://localhost:1337/api/views?filters[anime][$eq]=${anime.id}&filters[ip][$eq]=${userIp.ip}`).then(res => res.json());

  console.log("count", existingView.data)


  if (existingView.data.length === 0) {
    await fetch('http://localhost:1337/api/views', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.TOKEN_API}`

      },
      body: JSON.stringify({
        data: {
          anime: anime.documentId,
          ip: userIp.ip,
          view_count: 1
        }
      })

    })
  }


  return (
    <div className='archives container-wide'>
      <div className='archives__title'>
        <h1>{anime.name}</h1>
      </div>
      <div className='archives__banner'>
        <Image alt='ff' width={1200} height={400} src={`${process.env.NEXT_PUBLIC_API_URL}${anime.banner.url}`} />

      </div>
      <div className='archives__detail'>
        {anime.name}
      </div>
      <div className='archives__description'>
        <h3>Synopsie</h3>
        <p>{anime.description}</p>

      </div>
      <div className='archives__seasons'>
        <h3>Season</h3>
        <div className='archives__seasons_warp'>
          <div className='archives__season'>
            <Image alt='img' height={150} width={150} src={`${process.env.NEXT_PUBLIC_API_URL}${anime.thumbnail.url}`} />
            <h3>Season 1</h3>
          </div>
          <div className='archives__season'>
            <Image alt='img' height={150} width={150} src={`${process.env.NEXT_PUBLIC_API_URL}${anime.thumbnail.url}`} />
              <h3>Season 2</h3>
          </div>
        </div>
      </div>
      <div className='archives__genre'>
        <h3>Genre</h3>
      </div>

    </div>
  )
}
