"use client"
import Season from "@/app/archive/[slug]/[season]/page";
import { MouseEvent, useEffect, useRef, useState } from "react";
export default function Filter() {

    const menuRef = useRef<HTMLDivElement>(null)
    const [menuOpen, setMenuOpen] = useState({

        genre: true,
        season: false
    })


    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen({ genre: false, season: false }); // Tout fermer
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
        const toggleMenu = (menu: string) => {
            setMenuOpen((prevState) => {
                // Désactive tous les onglets sauf celui qui vient d'être activé
                const newState = Object.keys(prevState).reduce((acc, key) => {
                    acc[key as keyof typeof prevState] = key === menu;
                    return acc;
                }, {} as typeof prevState);
        
                return newState;
            });
        };
    return (
        <div className="filter" >
            <h4>Quick filter</h4>
            <div className="filter__content" ref={menuRef}>
                <div className="filter__item">
                    <div className="filter__dropdown" onClick={()=>toggleMenu('genre')}>

                        Genre <span> All</span>
                    </div>
                    <div className="filter__menu" style={menuOpen.genre ? { display: 'flex' } : { display: "none" }}>
                        <div className="filter__selected">
                          
                            <input type="checkbox" name="comedy" />  
                            <label htmlFor="comedy" >Comedy</label>
                        </div>
                        <div className="filter__selected">
                            
                            <input type="checkbox" name="mecha" />
                            <label htmlFor="comedy" >Mecha</label>
                        </div>
                        <div className="filter__selected">   
                            <input type="checkbox" name="romance" />
                            <label htmlFor="comedy" >Romance</label>
                         
                        </div>
                        <div className="filter__selected">   
                            <input type="checkbox" name="Shonen" />
                            <label htmlFor="comedy" >Shonen</label>
                         
                        </div>
                    </div>

                </div>
                <div className="filter__item">
                    <div className="filter__dropdown" onClick={()=>toggleMenu('season')} >

                      Season <span> All</span>
                    </div>
                    <div className="filter__menu" style={menuOpen.season ? { display: 'flex' } : { display: "none" }}>
<h1>Blabla</h1>
                    </div>

                </div>

                <input type="text" />
            </div>


            <a className="btn">
                <span className="btn__text">Filter <i className="fa-solid fa-shield-halved" aria-hidden="true">
                </i></span>

            </a>

        </div>
    )



}