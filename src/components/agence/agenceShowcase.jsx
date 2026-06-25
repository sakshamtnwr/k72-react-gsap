import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const agenceShowcase = () => {
gsap.registerPlugin(ScrollTrigger)
const bgChangeRef = useRef(null)

useEffect(() => {
  ScrollTrigger.create({
    trigger: bgChangeRef.current,

    start: "top 80%",  
    // when section is 20px inside viewport

    onEnter: () => {
      gsap.to('body', {
        backgroundColor: "#000000",
        duration: 1,
        ease: "power2.out"
      });
    },
    onLeaveBack: () => {
      gsap.to('body', {
        backgroundColor: "#ffffff",
        duration: 1,
        ease: "power2.out"
      });
    }
    });

    
    // gsap.utils.toArray('.panel').forEach((panel,i)=>{
    //     ScrollTrigger.create({
    //         trigger: panel,
    //         start: 'top top',
    //         pin:true,
    //         pinSpacing:false,
    //         duration: 2
    //     });
    // });
    
}, [])


    return (
        <div>
            <div ref={bgChangeRef} id='outterdiv' className='flex flex-col gap-3 sm:gap-4 md:gap-5 overflow-x-hidden'>
                    <div id='textcomponent' className='panel min-h-[80vh] h-[80vh] sm:min-h-[85vh] sm:h-[85vh] md:min-h-[90vh] md:h-[90vh] lg:min-h-screen lg:h-screen overflow-hidden relative px-4 sm:px-6'>
                        <div id='hovering text' className='absolute top-28 sm:top-32 md:top-20 flex gap-12 sm:gap-24 md:gap-40 lg:gap-80 overflow-hidden z-10 w-full'>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>meggie</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>meggie</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>meggie</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>meggie</h1>
                        </div>
                        <div className='flex whitespace-nowrap overflow-hidden gap-8 sm:gap-16 md:gap-24 lg:gap-30 absolute top-48 sm:top-56 md:top-72 lg:top-90 z-30 w-full'>
                            <div id='hoveringtext' className='moveX flex justify-center leading-[0.9] pt-2 sm:pt-4 items-end gap-4 sm:gap-8 md:gap-15'>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>lovoie</h1>
                                <h4 className='pb-1 sm:pb-3 md:pb-5 font-[font2] uppercase text-[10px] sm:text-sm md:text-[2.2vw] text-white whitespace-nowrap'> Directrice conseil</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center leading-[0.9] pt-2 sm:pt-4 items-end gap-4 sm:gap-8 md:gap-15'>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>lovoie</h1>
                                <h4 className='pb-1 sm:pb-3 md:pb-5 font-[font2] uppercase text-[10px] sm:text-sm md:text-[2.2vw] text-white whitespace-nowrap'> Directrice conseil</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center leading-[0.9] pt-2 sm:pt-4 items-end gap-4 sm:gap-8 md:gap-15'>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>lovoie</h1>
                                <h4 className='pb-1 sm:pb-3 md:pb-5 font-[font2] uppercase text-[10px] sm:text-sm md:text-[2.2vw] text-white whitespace-nowrap'> Directrice conseil</h4>
                            </div>
                        </div>
                        <div id='photo' className='relative flex justify-center items-end h-[55vw] sm:h-[52vw] md:h-[50vw] z-20 pb-8 sm:pb-4 md:pb-0'>
                            <img className='rounded-2xl sm:rounded-3xl max-h-full w-auto max-w-[72vw] sm:max-w-[65vw] md:max-w-none object-contain' src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="" />
                        </div>
                    </div>
                    <div id='textcomponent' className='panel min-h-[80vh] h-[80vh] sm:min-h-[85vh] sm:h-[85vh] md:min-h-[90vh] md:h-[90vh] lg:min-h-screen lg:h-screen overflow-hidden relative px-4 sm:px-6'>
                        <div id='hovering text' className='absolute top-28 sm:top-32 md:top-20 flex gap-12 sm:gap-24 md:gap-40 lg:gap-80 overflow-hidden z-10 w-full'>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>camille</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>camille</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>camille</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>camille</h1>
                        </div>
                        <div className='flex whitespace-nowrap overflow-hidden gap-8 sm:gap-16 md:gap-24 lg:gap-30 absolute top-48 sm:top-56 md:top-72 lg:top-90 z-30 w-full'>
                            <div id='hoveringtext' className='moveX flex justify-center leading-[0.9] pt-2 sm:pt-4 items-end gap-4 sm:gap-8 md:gap-15'>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>BRIÈRE</h1>
                                <h4 className='pb-1 sm:pb-3 md:pb-5 font-[font2] uppercase text-[10px] sm:text-sm md:text-[2.2vw] text-white whitespace-nowrap'> Conceptrice-rédactrice</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center leading-[0.9] pt-2 sm:pt-4 items-end gap-4 sm:gap-8 md:gap-15'>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>BRIÈRE</h1>
                                <h4 className='pb-1 sm:pb-3 md:pb-5 font-[font2] uppercase text-[10px] sm:text-sm md:text-[2.2vw] text-white whitespace-nowrap'> Conceptrice-rédactrice</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center leading-[0.9] pt-2 sm:pt-4 items-end gap-4 sm:gap-8 md:gap-15'>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[13vw] sm:text-[11vw] md:text-[10vw]'>BRIÈRE</h1>
                                <h4 className='pb-1 sm:pb-3 md:pb-5 font-[font2] uppercase text-[10px] sm:text-sm md:text-[2.2vw] text-white whitespace-nowrap'> Conceptrice-rédactrice</h4>
                            </div>
                        </div>
                        <div id='photo' className='relative flex justify-center items-end h-[55vw] sm:h-[52vw] md:h-[50vw] z-20 pb-8 sm:pb-4 md:pb-0'>
                            <img className='rounded-2xl sm:rounded-3xl max-h-full w-auto max-w-[72vw] sm:max-w-[65vw] md:max-w-none object-contain' src="https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a" alt="" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default agenceShowcase;
