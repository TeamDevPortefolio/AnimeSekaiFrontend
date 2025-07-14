import { Anime } from "@/types/anime"
import { error } from "console"
interface Media {
    url: string
  }
  interface CTA{
    text:string
    url:string
  }
interface Hero {
  id: number,
  headline: string,
  subHeadline: string,
  description: string,
  picture: Media,
  anime: Anime
  categories: string,
  cta:CTA

}
interface HeroApiResponse {
    data: {

        Hero:Hero
    }
  }

export async function fetchHero(){
try{
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[Hero][populate][anime][populate]=*&populate[Hero][populate]=picture`,{
    headers:{'Authorization': `Bearer  350288b8da348c3134b69bce22bcd68ea6995834b8e8eb279176d953aeb9ac8870ab318b71d553ad838061079f7287d9adc700c3475f86e0f07207d572d1029cfe09822bb380edbed76627bf7714b4d32d70272275b821e0e79979785bfd72669c67886c0855f32f1b14a747b9f008014b1d781b222c5a6cbba680faa01b73a9`},
    cache:"no-cache"
 })
 await new Promise((resolve=>setTimeout(resolve,4000)))
 const dataHero:HeroApiResponse = await res.json()
 return dataHero.data.Hero
}
catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Hero asset');
}

}

export async function fetchRecommend(){

try{

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[Recommends][populate][anime][populate]=*`,{
        headers:{'Authorization':`Bearer ${process.env.TOKEN_API} `}
    })

}
catch(error){}
console.error('Database Error',error)
throw new Error("Failed to fetch")


}
export async function fetchLastRealease(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[lastRelease][populate][anime][populate]=*`,{
            headers:{'Authorization':`Bearer ${process.env.TOKEN_API} `}
        })
    }
    catch(error){
        console.error('Database Error',error)
        throw new Error("Failed to fetch Last release")
    }
}