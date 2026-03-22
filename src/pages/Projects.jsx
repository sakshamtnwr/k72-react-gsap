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
        {image1:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',image2:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'},
        {image1:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'},
        {image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'},
        {image1:'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',image2:'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd'},
        {image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',image2:'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd'},
        {image1:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',image2:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'},
        {image1:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',image2:'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'},
        {image1:'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',image2:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'},]
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