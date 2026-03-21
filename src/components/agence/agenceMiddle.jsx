import React from 'react';

const agenceMiddle = () => {
    return (
        <div className='h-screen w-full flex flex-col gap-50 p-30'>
            <div className='flex justify-start items-start font-[font2] text-[1.8vw] gap-65 leading-[1.2] pt-2.5 '>
                <div><p>Expertise</p></div>
                <div>
                    <p>Stratégie <br />
                        Publicité <br />
                        Branding <br />
                        Design <br />
                        Contenu <br />
                    </p>
                </div>
                {/* <div>
                    <p>i</p>empty
                </div> */}
            </div>
            <div className='flex justify-center items-center font-[font2] text-[1.8vw] gap-10 leading-[1.2] pt-2.5'>
                <div><p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p></div>
                <div><p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p></div>
                <div><p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p></div>
            </div>
        </div>
    );
};

export default agenceMiddle;