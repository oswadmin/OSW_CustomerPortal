"use client"

import Link from 'next/link';
import Image from "next/image";
import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ButtonMedia } from './ButtonMedia';

import { CaseLower, FacebookIcon, InstagramIcon, MailIcon, ArrowUp, PhoneIcon } from 'lucide-react';
import { siteConfig, servicesConfig } from '@/config';
import { ButtonStandard } from './ButtonStandard';

interface PageFooterProps {
  showTop?: boolean;
}

export default function PageFooter({
  showTop = true,
}: PageFooterProps)  {

  const topRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const footerImg = useRef<HTMLImageElement>(null);
  
  
  // Function to calculate and update background position
  const updateBackgroundPosition = () => {
    if (!footerRef.current || !footerImg.current) return;

    const windowWidth = window.innerWidth;
    const imageAspectRatio = footerImg.current.naturalWidth / footerImg.current.naturalHeight;
    const newHeight = Math.floor(windowWidth / imageAspectRatio);
    //image.style.height = `${newHeight}px`;

    const footerRect = footerRef.current.getBoundingClientRect();
    const footerHeight = Math.floor(footerRect.height);
    //console.log("footerHeight:" + footerHeight);
    //console.log('imgHeight:' + newHeight);
    
    // Calculate the parallax offset
    const parallaxRange = newHeight - footerHeight;
    //console.log("parallaxRange:" + parallaxRange)
    
    
    const footerTop = Math.max(footerRect.top + window.scrollY);
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    //console.log("wh:" + windowHeight + " sY:" + window.scrollY)

    if(window.scrollY >= windowHeight && showTop ){
      topRef.current?.classList.remove("hidden")
    } else {
      topRef.current?.classList.add("hidden")
    }

    // Calculate how far the footer is from the viewport bottom
    const distanceFromViewportBottom = Math.floor(windowHeight - (footerTop - scrollPosition));
    //console.log("windowHeight:" + windowHeight)
    //console.log("distanceFromViewportBottom:" + distanceFromViewportBottom)
    
    let offset = (distanceFromViewportBottom / windowHeight ) * parallaxRange;
    //let offset = parallaxRange;
    //console.log("offset:" + offset)

    // Clamp the offset
    offset = Math.max(0, Math.min(offset, parallaxRange));
    //console.log("offset:" + offset)

    // Apply the background position
    footerRef.current.style.backgroundPosition = `center ${-offset}px`;
  };


  const handleScrollToTop = () => {
    const scrollDuration = 500; // Adjust the duration as needed
    const scrollStart = window.scrollY;
    const scrollEnd = 0;
    const startTime = Date.now();

    const animateScroll = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      const scrollPosition = scrollStart + (scrollEnd - scrollStart) * progress;
      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };


  useEffect(() => {
    //console.log('Component mounted!');

    // Call the function initially
    updateBackgroundPosition();

    // Add scroll and resize listeners
    window.addEventListener('scroll', updateBackgroundPosition);
    window.addEventListener('resize', updateBackgroundPosition);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateBackgroundPosition);
      window.removeEventListener('resize', updateBackgroundPosition);
    };
  }, []);




  return (
    <>
    
    <Image ref={footerImg} alt="bgImgRef" src={siteConfig.OSW_IMG.SURFACE1} width="600" height="600" className='hidden w-full h-auto'/>

    <footer 
      ref={footerRef} 
      className={`relative flex-1 flex-col mt-auto bg-cover bg-no-repeat`} 
      style={{
        //backgroundImage: `url(${siteConfig.OSW_IMG.SURFACE1})`,
        //willChange: 'background-position',
      }}>

 


      {/* <div className='relative flex-1 flex justify-center h-12 bg-orange bg-opacity-50 '>
      
        <div className="flex-1 bg-orange_light footer-scalap" />
        <div className="flex-1 bg-orange_light  footer-scalap" />
        <div className="flex-1 bg-orange_light  footer-scalap" />
      </div> */}

      {/* <div className='pt-20 z-20 w-auto min-h-[300px] bg-orange bg-opacity-50 '> */}
      <div className='pt-20 z-20 w-auto min-h-[300px] bg-gradient-to-b from-white to-orange_light'>
            
      <div className="container flex-1 flex justify-stretch items-start pb-6">

          {/*****************************************************************/}
          {/* MEDIA BLOCK */}
          {/*****************************************************************/}          
          

          <div className="flex-1 flex flex-col space-y-4 items-center ">
            
            {/* FOOTER LOGO*/}
            <a href="/" className='hidden desktop:flex'>
                <Image 
                  src = {siteConfig.OSW_IMG.LOGO}
                  alt = ""
                  width={600}
                  height={600}
                  className="w-40 h-40 hover:scale-105"
                />
            </a>
            
            {/* MEDIA BUTTONS CONTAINER */}
            <div className='hidden desktop:flex justify-center '> 

              {/* INSTAGRAM BUTTON */}
              <ButtonMedia strURL={siteConfig.OSW_Links.Instagram}>
                <InstagramIcon className='text-orange'/>
              </ButtonMedia>
              
              {/* FACEBOOK BUTTON */}
              <ButtonMedia strURL={siteConfig.OSW_Links.Facebook}>
                <FacebookIcon className='text-orange'/>
              </ButtonMedia>
              
            </div>
            
            {/* LOCATIONS LINK */}
            <Link href="/#Locations" className='hidden desktop:flex text-blue font-bold text-lg hover:scale-105'>Service Locations</Link>

             {/* COPYWRIGHT TEXT */}
            <div className='flex text-sm text-center text-blue font-semibold'>
              &copy; 2025 Orange Softwash, LLC.<br/>All rights reserved.                
            </div>
          </div>
          
        

          {/*****************************************************************/}
          {/* SERVICES BLOCK */}
          {/*****************************************************************/}
          <div className="hidden desktop:flex flex-1  flex-col items-start space-y-4 text-blue border-l-2 border-l-blue font-bold">
            <h2 className='text-3xl font-bold border-l-8 border-blue pl-4'>Services</h2>
            <div className='flex-1 flex flex-col ml-6 space-y-2 '>
              
              
              {
                servicesConfig.OSW_Services.map((obj, index) => (

                  obj.activeService ? (
                   <Link key={obj.name} href={obj.url} className='hover:scale-105'>{obj.name}</Link>
                  ) : null
                  
                ))
              
              }
            </div>
            
          </div>


          {/* CONTACT US BLOCK */}
          <div className="hidden desktop:flex flex-1 flex-col items-start space-y-4 text-blue  border-l-2 border-l-blue font-bold ">
            <h2 className='text-3xl font-bold border-l-8 border-l-blue pl-4'>Contact Us</h2>
            
            <div className='flex items-center pl-6'>
               {/* PHONE BUTTON */}
               <ButtonMedia strURL={`tel:${siteConfig.OSW_Phone}`}>
                <PhoneIcon className="w-6 h-6 text-orange" />
              </ButtonMedia>
              
              <a href={`tel:${siteConfig.OSW_Phone}`} className='hover:scale-105'>
              {siteConfig.OSW_Phone}
              </a>
            </div>
            
            <div className='flex items-center pl-6'>
              {/* PHONE BUTTON */}
              <ButtonMedia strURL={`mailto:${siteConfig.OSW_Email_Sales}`}>
                <MailIcon className="w-6 h-6 text-orange" />
              </ButtonMedia>
              <a href={`mailto:${siteConfig.OSW_Email_Sales}`} className='hover:scale-105'>
                {siteConfig.OSW_Email_Sales}
              </a>
              
              
            </div>

          </div>
      </div>

      </div>


      <div ref={topRef} className="hidden  fixed bottom-28 right-2.5 p-3 z-[9999]">
          <Button 
            className={`rounded-full text-blue text-2xl font-bold h-[100px] flex-col` }
            onClick={handleScrollToTop}
          >
              <ArrowUp className='text-4xl'/>Top
          </Button> 

      </div>



    </footer>

    
 
    </>
  );
};