import React from 'react';
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[font2] flex flex-wrap items-center justify-center gap-5 sm:gap-6 px-2 shrink-0 mb-[18vh] sm:mb-[15vh] md:mb-[12vh] lg:mb-0'>
            <Link to='/projects' className='text-[5.5vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[6vw] uppercase border-3 hover:text-[#D3FD50]
            hover:border-[#D3FD50]
            border-white rounded-full px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 leading-none'>Projects</Link>
            <Link to='/agence' className='text-[5.5vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[6vw] uppercase border-3 hover:text-[#D3FD50]
            hover:border-[#D3FD50]
            border-white rounded-full px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 leading-none'>Agence</Link>
        </div>
    );
};

export default HomeBottomText;