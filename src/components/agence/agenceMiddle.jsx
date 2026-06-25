import React from 'react';

const agenceMiddle = () => {
    return (
        <div className='w-full flex flex-col gap-8 sm:gap-10 md:gap-16 lg:gap-50 px-6 sm:px-10 md:px-16 py-10 sm:py-12 md:py-16 lg:min-h-screen lg:p-30 lg:py-0 overflow-x-hidden'>
            <div className='flex flex-col sm:flex-row justify-start items-start font-[font2] text-[15px] sm:text-base md:text-[1.6vw] lg:text-[1.8vw] gap-6 sm:gap-12 md:gap-20 lg:gap-65 leading-[1.35] sm:leading-[1.2]'>
                <div className='shrink-0'><p>Expertise</p></div>
                <div>
                    <p>Stratégie <br />
                        Publicité <br />
                        Branding <br />
                        Design <br />
                        Contenu <br />
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-start md:justify-center items-start md:items-start lg:items-center font-[font2] text-[15px] sm:text-base md:text-[1.5vw] lg:text-[1.8vw] gap-6 md:gap-6 lg:gap-10 leading-[1.45] sm:leading-[1.35] md:leading-[1.2]'>
                <div className='md:flex-1'><p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p></div>
                <div className='md:flex-1'><p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p></div>
                <div className='md:flex-1'><p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p></div>
            </div>
        </div>
    );
};

export default agenceMiddle;