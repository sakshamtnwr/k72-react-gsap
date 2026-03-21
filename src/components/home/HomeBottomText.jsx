import React from 'react';
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[font2] flex items-center justify-center gap-5'>
            <Link to='/projects' className='text-[6vw] uppercase border-3 hover:text-[#D3FD50]
            hover:border-[#D3FD50]
            border-white rounded-full px-5 leading-none'>Projects</Link>
            <Link to='/agence' className='text-[6vw] uppercase border-3 hover:text-[#D3FD50]
            hover:border-[#D3FD50]
            border-white rounded-full px-5 leading-none'>Agence</Link>
        </div>
    );
};

export default HomeBottomText;