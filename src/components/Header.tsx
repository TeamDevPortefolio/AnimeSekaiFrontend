import React from "react";
import Image from "next/image";

export default function Header() {


    return (

        <div className="nav_bar">

            <div className="nav_bar__brand">
                <Image alt="image" src='http://localhost:1337/uploads/logo_white_e55a4a19b4.svg' width={50} height={25} />
            </div>

            <div className="nav_bar__menu">
                <ul>
                    <li>Catalogue</li>
                    <li>BookMark</li>
                    <li>Recherche</li>


                </ul>

            </div>

        </div>
    )




}