import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const agenceTop = () => {
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)
    
    const imageArray = ['../../public/images/MEGGIE_480X640_2.jpg',
        '../../public/images/CAMILLE_480X640_2.jpg',
        '../../public/images/Carl_480x640.jpg',
        '../../public/images/ChantalG_480x640.jpg',
        '../../public/images/Isa_640X960.jpg',
        '../../public/images/joel_480X640_3.jpg',
        '../../public/images/MEL_480X640.jpg',
        '../../public/images/Michele_480X640.jpg',
        '../../public/images/Olivier_480x640.jpg'
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
        <div>
            <div className='section1 py-1'>
            <div ref= {imageDivRef} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-2xl top-72 left-[30vw]'>
                <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="not found" />
            </div>
            <div className='relative font-[font2]'>
            <div className='mt-[55vh]'>
                <h1 className='text-[19vw] text-center uppercase leading-[15vw]'>
                Soixan7e <br />
                Douze 
                </h1>
            </div>
            <div className='pl-[40%] mt-20'>
                <p className='text-6xl'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                </p>
            </div>
            </div>
            </div></div>
    
    );
};

export default agenceTop;