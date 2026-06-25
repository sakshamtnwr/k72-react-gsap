import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-full sm:w-1/2 group transition-all relative rounded-none hover:rounded-[32px] sm:hover:rounded-[50px] md:hover:rounded-[70px] overflow-hidden h-1/2 sm:h-full'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15 px-3'>
                    <h2 className='uppercase text-xs sm:text-xl md:text-3xl lg:text-4xl font-[font1] border-2 sm:border-3 md:border-4 pt-1.5 sm:pt-3 md:pt-4 px-3 sm:px-6 md:px-8 text-white border-white rounded-full text-center leading-tight'>Vior le projet</h2>
                </div>
            </div>
            <div className='w-full sm:w-1/2 group transition-all relative rounded-none hover:rounded-[32px] sm:hover:rounded-[50px] md:hover:rounded-[70px] overflow-hidden h-1/2 sm:h-full'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15 px-3'>
                    <h2 className='uppercase text-xs sm:text-xl md:text-3xl lg:text-4xl font-[font1] border-2 sm:border-3 md:border-4 pt-1.5 sm:pt-3 md:pt-4 px-3 sm:px-6 md:px-8 text-white border-white rounded-full text-center leading-tight'>Vior le projet</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard