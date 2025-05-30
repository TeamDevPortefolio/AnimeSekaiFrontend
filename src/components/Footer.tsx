import React from "react";
import Image from "next/image";


export default function Footer() {




    return (
        <div className="footer">
            <div className="footer__left">

                <Image alt="image" src='http://localhost:1337/uploads/logo_white_e55a4a19b4.svg' width={150} height={50} />

            </div>
            <div className="footer__right">

            </div>
        </div>
    )
}