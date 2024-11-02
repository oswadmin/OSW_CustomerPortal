"use client"

import Link from 'next/link';
import Image from "next/image";
import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ButtonMedia } from './ButtonMedia';

import { CaseLower, FacebookIcon, InstagramIcon, MailIcon, ArrowUp, PhoneIcon } from 'lucide-react';
import { siteConfig, servicesConfig } from '@/config';
import { ButtonStandard } from './ButtonStandard';


export default function PageFooter_bu20241024() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerRef = useRef<HTMLDivElement>(null);
  const paralaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {

    const handleScroll = () => {
      
      if (!footerRef.current) return;
      
      const scrolled = window.scrollY;
      
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when footer is in view
      if (footerRect.top < windowHeight) {
     
        const scrollPosition = (footerRect.top - windowHeight) * 0.3;
        footerRef.current.style.backgroundPositionY = `${scrollPosition - 210}px` ;

      }
    };


    // Add listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);




  return (

    
    <footer 
      ref={footerRef} 
      className={`relative flex-1 flex-col mt-auto min-h-[300px] bg-cover bg-no-repeat`} 
      style={{
        backgroundImage: `url(${siteConfig.OSW_IMG.SURFACE1})`,
        willChange: 'background-position',
      }}>

      

      <div className='relative flex-1 flex justify-center h-12 bg-orange bg-opacity-70 '>
      
        <div className="flex-1 bg-orange footer-scalap" />
        <div className="flex-1 bg-orange  footer-scalap" />
        <div className="flex-1 bg-orange  footer-scalap" />
      </div>

      <div className='pt-20 w-auto h-auto bg-orange bg-opacity-70'>
            
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
              &copy; 2023 Orange Softwashing, LLC.<br/>All rights reserved.                
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
              {siteConfig.OSW_Phone}
            </div>
            
            <div className='flex items-center pl-6'>
              {/* PHONE BUTTON */}
              <ButtonMedia strURL={`mailto:${siteConfig.OSW_Email_Sales}`}>
                <MailIcon className="w-6 h-6 text-orange" />
              </ButtonMedia>
              {siteConfig.OSW_Email_Sales}
            </div>

          </div>
      </div>

      </div>


      <div className="desktop:hidden fixed bottom-52 right-2.5 p-3">
          <Button className={`rounded-full text-blue text-2xl font-bold h-[100px] flex-col`} >
              <ArrowUp className='text-4xl'/>Top
          </Button> 

      </div>

      <div className="desktop:hidden fixed bottom-20 right-5 p-3">
          <Button onClick={() => setIsModalOpen(false)} className={`bg-blue rounded-full border-2 border-white shadow-md text-2xl font-bold text-white h-[60px]`} >...</Button> 
          
      </div>
    </footer>
  );
};
