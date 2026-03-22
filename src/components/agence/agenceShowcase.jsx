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
            <div ref={bgChangeRef} id='outterdiv' className='flex flex-col gap-5'>
                    <div id='textcomponent' className='panel h-screen overflow-hidden relative'>
                        <div id='hovering text' className='absolute top-20 flex gap-80 overflow-hidden z-10'>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>meggie</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>meggie</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>meggie</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>meggie</h1>
                        </div>
                        <div className='flex whitespace-nowrap overflow-hidden gap-30 absolute top-90 z-30'>
                            <div id='hoveringtext' className='moveX flex justify-center  leading-[0.9] pt-4 items-end gap-15 '>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[10vw] '>lovoie</h1>
                                <h4 className='pb-5 font-[font2] uppercase text-[2.2vw] text-white'> Directrice conseil</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center  leading-[0.9] pt-4 items-end gap-15 '>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[10vw] '>lovoie</h1>
                                <h4 className='pb-5 font-[font2] uppercase text-[2.2vw] text-white'> Directrice conseil</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center  leading-[0.9] pt-4 items-end gap-15 '>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[10vw] '>lovoie</h1>
                                <h4 className='pb-5 font-[font2] uppercase text-[2.2vw] text-white'> Directrice conseil</h4>
                            </div>
                        </div>
                        <div id='photo' className='relative flex justify-center h-[50vw] z-20'>
                            <img className='rounded-3xl' src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="" />
                        </div>
                    </div>
                    <div id='textcomponent' className='panel h-screen overflow-hidden relative'>
                        <div id='hovering text' className='absolute top-20 flex gap-80 overflow-hidden z-10'>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>camille</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>camille</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>camille</h1>
                            <h1 className='moveY uppercase font-[font2] text-amber-300 text-[10vw]'>camille</h1>
                        </div>
                        <div className='flex whitespace-nowrap overflow-hidden gap-30 absolute top-90 z-30'>
                            <div id='hoveringtext' className='moveX flex justify-center  leading-[0.9] pt-4 items-end gap-15 '>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[10vw] '>BRIÈRE</h1>
                                <h4 className='pb-5 font-[font2] uppercase text-[2.2vw] text-white'> Conceptrice-rédactrice</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center  leading-[0.9] pt-4 items-end gap-15 '>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[10vw] '>BRIÈRE</h1>
                                <h4 className='pb-5 font-[font2] uppercase text-[2.2vw] text-white'> Conceptrice-rédactrice</h4>
                            </div>
                            <div id='hoveringtext' className='moveX flex justify-center  leading-[0.9] pt-4 items-end gap-15 '>
                                <h1 className='uppercase font-[font2] text-amber-300 text-[10vw] '>BRIÈRE</h1>
                                <h4 className='pb-5 font-[font2] uppercase text-[2.2vw] text-white'> Conceptrice-rédactrice</h4>
                            </div>
                        </div>
                        <div id='photo' className='relative flex justify-center h-[50vw] z-20'>
                            <img className='rounded-3xl' src="https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a" alt="" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default agenceShowcase;
