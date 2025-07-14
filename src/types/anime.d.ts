




interface Media {
    url: string
  }
  interface CTA{
    text:string
    url:string
  }
export interface Hero { 
 
    headline:String,
    subHeadline:String,
    description:String,
    picture: Picture,
    Anime:Anime 
    cta:CTA
}


export interface Anime {
id:number,
documentId:string,
name:sting,
description:string,
notation:number,
highline_title:string,
categories:string,
gif: Media,
musique: Media
episodes:Episode[]
thumbnail:Media
imgTitle:Media
video:Media,
banner:Media
slug:string

}

export interface Episode{
id:number,
documentId:string,
season:number,
nb_episode:number,
release_date:Date,
videos:Video[]
airTime:string,
airDate:string
anime:Anime
}
export interface Media{
    url: string
}

export interface Video{
    id:number,
    documentId:string,
    langues:string,
    URL:string,
    publishedAt:Date
}
export interface ViewType{
    id:number,
    period:string,
    view:object,
    anime:Anime,


}