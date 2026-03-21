import React from 'react';
import { Link } from 'react-router-dom';
const contactTop = () => {
    return (
        <div className=' flex bg-black h-70vh w-full justify-center'>
            <div className='w-[300px]  pb-8 flex flex-col justify-end'>
                <p className='font-[font2] text-white text-center '>
                Dans un écran ou un bureau. <br />
                Chez vous. Chez nous. <br />
                Partout.
            </p>
            </div>
            <div className='w-[700px] '>
                <h1 className='pt-4 font-[font1] uppercase text-white text-[10vw] text-center leading-[0.9] pt-[2.5]'>
                Pour <br />
                parler de <br />
                votre <br />
                projet
            </h1></div>
            <div className='font-[font2] w-[300px]  pb-8 flex flex-col justify-end'>
                <Link className=' text-white text-center'>
                525 Av. Viger O - Suite 400 <br />
                Montréal, QC H2Z 1G6 →
            </Link>
            </div>
        </div>
    );
};

export default contactTop;