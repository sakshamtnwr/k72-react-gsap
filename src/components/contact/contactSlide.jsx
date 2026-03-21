import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

const contactSlide = () => {
const trackDirection = useRef(null);
gsap.registerPlugin(ScrollTrigger)
useEffect(()=>{
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",

      onUpdate: (self) => {

        if (self.direction === 1) {

          // Scroll Down
          gsap.to(trackDirection.current, {
            rotation: -8,
            duration: 0.6,
            ease: "power2.out"
          });
          } else {

          // Scroll Up
          gsap.to(trackDirection.current, {
            rotation: 8,
            duration: 0.6,
            ease: "power2.out"
          });
          }

      }
    });
    
},[]);
    return (
        <div >
            <div className='h-[60vh] w-full bg-black     overflow-hidden flex flex-col justify-center'>
                <div ref={trackDirection} className='flex '>
                
                <div className='moveX flex items-center bg-[#D3FD50] whitespace-nowrap'>
                    <h1 className='font-[font2] uppercase pt-1 leading-[1.2] text-[10vw] text-center'>
                        bonjour@k72.ca
                    </h1>
                    <div className='w-30'>
                        <svg viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path 
                            d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" 
                            fill="#000000"
                            />
                        </g>
                        </svg>                    
                    </div>
                </div>
                <div className='moveX flex items-center bg-[#D3FD50] whitespace-nowrap'>
                    <h1 className='font-[font2] uppercase pt-1 leading-[1.2] text-[10vw] text-center'>
                        bonjour@k72.ca
                    </h1>
                    <div className='w-30'>
                        <svg viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path 
                            d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" 
                            fill="#000000"
                            />
                        </g>
                        </svg>                   
                    </div>
                </div>
                
                </div>
                
                
            </div>
        </div>
       
    );
};

export default contactSlide;