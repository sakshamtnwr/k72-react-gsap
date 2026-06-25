import React from 'react';
import { Link } from 'react-router-dom';
const contactTop = () => {
    return (
        <div className='flex flex-col md:flex-row bg-black min-h-[75vh] sm:min-h-[70vh] w-full justify-center items-center md:items-end px-5 sm:px-8 md:px-6 pt-24 sm:pt-28 md:pt-0 pb-10 sm:pb-12 md:pb-0 gap-10 sm:gap-12 md:gap-0 overflow-x-hidden'>
            <div className='w-full max-w-xs md:max-w-none md:w-[280px] lg:w-[300px] md:pb-8 flex flex-col justify-end order-2 md:order-1'>
                <p className='font-[font2] text-white text-center text-[15px] sm:text-base leading-relaxed'>
                Dans un écran ou un bureau. <br />
                Chez vous. Chez nous. <br />
                Partout.
            </p>
            </div>
            <div className='w-full md:w-[55%] lg:w-[700px] order-1 md:order-2 px-2'>
                <h1 className='font-[font1] uppercase text-white text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[10vw] text-center leading-[0.95] sm:leading-[0.9]'>
                Pour <br />
                parler de <br />
                votre <br />
                projet
            </h1></div>
            <div className='font-[font2] w-full max-w-xs md:max-w-none md:w-[280px] lg:w-[300px] md:pb-8 flex flex-col justify-end order-3'>
                <Link className='text-white text-center text-[15px] sm:text-base leading-relaxed'>
                525 Av. Viger O - Suite 400 <br />
                Montréal, QC H2Z 1G6 →
            </Link>
            </div>
        </div>
    );
};

export default contactTop;