import React from "react";
import Image from "next/image";


export default function Footer() {




    return (
        <div className="footer">
            <div className="footer__left">

                <Image alt="image" src='http://localhost:1337/uploads/logo_white_e55a4a19b4.svg' width={150} height={50} />

            </div>
            <div className="footer__middle">
                <h3>Politique d'hébergement de contenu</h3>
                <p>Anime Sekai n'héberge aucune vidéo sur son serveur. Contactez directement la plateforme d'hébergement vidéo pour toutes réclamations de droits relatifs aux contenus en question.</p>
            </div>
            <div className="footer__right"> 
            <h3>Newletters</h3>
<p>Abonnez-vous à notre newsletter pour recevoir votre dose hebdomadaire d'actualités, de mises à jour, de conseils et d'offres spéciales</p>
            </div>

        </div>
    )
}