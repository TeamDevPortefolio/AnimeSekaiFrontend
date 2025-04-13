'use client'


import { Anime, Episode, Video } from "@/types/anime"
import React, { useState } from "react"
interface Props {
    episodes: Episode[]

}



export default function WatchFrame({ episodes }: Props) {

    const [episodesList, setEpisodesList] = useState(episodes)
    const [videos, setVideo] = useState<Array<Video>>(episodesList[0].videos)

    console.log('episode')

    const OnChageSelect = () => {



    }

    return (
        <div className='watch_frame'>

            <div className="frame">
                <div className="frame__top">
                    <div className="frame__select">
                        <select>
                            {

                                episodesList.map((item, index) => (

                                    <option key={index}> {item.title}</option>
                                )


                                )
                            }

                        </select>
                    </div>
                    <div className="frame__select">
                    <select>
                        {

                            videos.map((item, index) => (
                                <option key={index} value={item.id}>Lecteur {index + 1}</option>
                            ))


                        }

                    </select>
                    </div>


                </div>
                <div className="frame__buttons">
                    <a href="" id="prev-btn"> <i className="fa-solid fa-circle-arrow-left" aria-hidden='true' ></i> Precedent</a> <a href=""> <i className="fa-solid fa-circle-arrow-down" aria-hidden='true'></i> Dernier Episode</a>    <a href="" id="prev-btn"> Suivant <i className="fa-solid fa-circle-arrow-right" aria-hidden='true'></i></a>

                </div>
                <div className="frame__container">
                <iframe width="640" height="384" src="https://video.sibnet.ru/shell.php?videoid=4942877" frameBorder="0" scrolling="no" allowFullScreen></iframe>

                </div>



            </div>

        </div>
    )
}