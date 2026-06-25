import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] flex-1 flex flex-col justify-center lg:block lg:flex-none pt-6 sm:pt-10 md:pt-14 lg:pt-20 text-center px-1'>
            <div className='text-[10.5vw] sm:text-[9.5vw] md:text-[9.5vw] justify-center flex items-center uppercase leading-[1.05] sm:leading-[0.95] md:leading-[8vw]'>
                L'étincelle
            </div>
            <div className='text-[10.5vw] sm:text-[9.5vw] md:text-[9.5vw] justify-center flex flex-wrap items-center sm:items-baseline uppercase leading-[1.05] sm:leading-[0.95] md:leading-[8vw] gap-x-2 sm:gap-x-1 mt-1'>
                qui
                <div className='h-[9vw] w-[18vw] sm:h-[8vw] sm:w-[16vw] rounded-full overflow-hidden shrink-0 inline-flex'>
                    <Video rounded/>
                </div>
                génère
            </div>
            <div className='text-[10.5vw] sm:text-[9.5vw] md:text-[9.5vw] justify-center flex items-center uppercase leading-[1.05] sm:leading-[0.95] md:leading-[8vw] mt-1'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText