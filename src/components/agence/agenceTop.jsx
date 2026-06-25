import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const agenceTop = () => {
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)
    
    const imageArray = ['https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd',
        'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
        'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
        'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
        'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
        'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
        'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
        'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
        'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847'
        ]



    gsap.registerPlugin(ScrollTrigger)

useEffect(() => {
  const startAnimations = () => {
        gsap.to(imageDivRef.current,{
            
            scrollTrigger:{
                trigger:imageDivRef.current,
                start:'top 40%',
                end:'top -100%',
                pin:true,
                pinReparent:true,
                pinSpacing:true,
                pinType: 'transform',
                scrub:1,
                anticipatePin:1,
                invalidateOnRefresh:true,
                onUpdate:(elem)=>{
                    const imageIndex = (Math.round(elem.progress * (imageArray.length-1)))
                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
        
    }   
    const delayInMilliseconds = 2000; 
    setTimeout(startAnimations, delayInMilliseconds);
}, [])


    return (
        <div className='overflow-x-hidden'>
            <div className='section1 py-1 px-5 sm:px-8 md:px-12 lg:px-0 pb-8 sm:pb-10 md:pb-16 lg:pb-24'>
            <div ref= {imageDivRef} className='absolute overflow-hidden h-[36vw] w-[28vw] max-h-48 max-w-[9.5rem] sm:max-h-none sm:max-w-none sm:h-[28vw] sm:w-[22vw] md:h-[22vw] md:w-[17vw] lg:h-[20vw] lg:w-[15vw] rounded-xl sm:rounded-2xl top-28 sm:top-40 md:top-56 lg:top-72 left-1/2 -translate-x-1/2 md:left-[28vw] lg:left-[30vw] md:translate-x-0 z-10'>
                <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="not found" />
            </div>
            <div className='relative font-[font2]'>
            <div className='mt-[34vh] sm:mt-[38vh] md:mt-[46vh] lg:mt-[55vh]'>
                <h1 className='text-[13vw] sm:text-[15vw] md:text-[17vw] lg:text-[19vw] text-center uppercase leading-[1] sm:leading-[0.9] md:leading-[15vw] px-2'>
                Soixan7e <br />
                Douze 
                </h1>
            </div>
            <div className='px-1 sm:px-6 md:pl-[18%] lg:pl-[40%] mt-6 sm:mt-8 md:mt-14 lg:mt-20'>
                <p className='text-[15px] sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl leading-[1.65] sm:leading-snug md:leading-snug max-w-lg sm:max-w-2xl md:max-w-none mx-auto md:mx-0'>
                    <span className='hidden md:inline'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                </p>
            </div>
            </div>
            </div></div>
    
    );
};

export default agenceTop;