import React, { useEffect } from 'react';
import ProjectCards from '../components/projects/ProjectCards';
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  })

  lenis.on("scroll", ScrollTrigger.update)

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  // Define your animation setup inside a function
  const startAnimations = () => {
    let heros = gsap.utils.toArray('.hero');

    heros.forEach((hero, index) => {
      const nextHero = heros[index + 1];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top 80%',
          end: '+=400',
          scrub: 1,
        
        }
      });

      tl.fromTo(hero, { height: 0 }, { height: 400, duration: 0.7 });

      if (nextHero) {
        tl.fromTo(nextHero, { height: 0 }, { height: 40, duration: 0.3 }, "<");
      }
    });

    // Once animations are set up, refresh ScrollTrigger to ensure correct positioning
    ScrollTrigger.refresh();
  };

  const delayInMilliseconds = 2000; // 1 second
  setTimeout(startAnimations, delayInMilliseconds);
  
}, []);
    
    const projects = [
        {image1:'../../public/projects-images/100temps_Thumbnail.jpg',image2:'../../public/projects-images/thumbnailimage_opto.jpg'},
        {image1:'../../public/projects-images/CF_thumbnail.jpg',image2:'../../public/projects-images/chalaxeur-thumbnail_img.jpg'},
        {image1:'../../public/projects-images/crisis24_behance_1920X1200_cartes.jpg',image2:'../../public/projects-images/Fruite_thumbnail_bbq.jpg'},
        {image1:'../../public/projects-images/OKA_thumbnail.jpg',image2:'../../public/projects-images/WS---K72.ca---Thumbnail.jpg'},
        {image1:'../../public/projects-images/PJC_SiteK72_Thumbnail_1280x960.jpg',image2:'../../public/projects-images/PME-MTL_Thumbnail.jpg'},
        {image1:'../../public/projects-images/thumbnail_OSM_1280.jpg',image2:'../../public/projects-images/Thumbnail.png'},
        {image1:'../../public/projects-images/thumbnailimage_atable2.jpg',image2:'../../public/projects-images/BEST_site_menu_Thumbnail.jpg'},
        {image1:'../../public/projects-images/thumbnailimage_shelton.jpg',image2:'../../public/projects-images/thumbnailimage_SollioAg.jpg'},]
    return (
        <div className='p-4'>
            <div className=' pt-[40vh]'>
                <h2 className='font-[font2] text-[9.5vw] uppercase'>Projects</h2>
            </div>
            <div className='-mt-10 hero-parent'> 
                {projects.map(function(elem, idx){
                    return <div key={idx} className='w-full h-[400px] mb-4'>
                        <div className='hero w-full h-[400px] flex gap-3'>
                        <ProjectCards image1={elem.image1} image2={elem.image2} />
                        </div>
                    </div>
                })}
                
            </div>
            
        </div>
    );
};

export default Projects;