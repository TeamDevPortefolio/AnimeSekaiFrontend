

export interface Anime {
id:Number,
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
id:Number,
documentId:string,
season:Number,
nb_episode:Number,
release_date:Date,
videos:Video[]

}
export interface Media{
    url: String
}

export interface Video{
    id:Number,
    documentId:String,
    langues:String,
    URL:String,
    publishedAt:Date
}