"use client"

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ButtonMedia } from './ButtonMedia';
import { ClipboardListIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/button';


export default function ModalOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);


  const showModal = () => {
    //console.log("hideModal")
    overlayRef.current?.classList.remove("hidden")
    overlayRef.current?.classList.add("flex")
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }
  
  const hideModal = () => {
    //console.log("hideModal")
    overlayRef.current?.classList.remove("flex")
    overlayRef.current?.classList.add("hidden")
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };


  return (
    <>
      <div
        ref={overlayRef} 
        className={`fixed inset-0 bg-white bg-opacity-90 z-50 flex-col items-end justify-end pb-6 pr-8 gap-4 overlay hidden`}
        onClick={hideModal}
      >

            {/* ESTIMATE BUTTON */}
            <div className='flex flex-row items-center gap-x-4 text-2xl'>
              <span className='rounded-[12px] bg-white border-2 px-2 opacity-80'>Estimate</span>
            <Button className="bg-orange hover:bg-orange rounded-full border-2 border-white shadow-md text-2xl font-bold text-blue_dark h-[60px]">
              <a href="/estimate"  >
                <ClipboardListIcon className='text-white'/>
              </a>
            </Button> 
            </div>
            
            {/* Phone BUTTON */}
            <div className='flex flex-row items-center gap-x-4 text-2xl'>
              <span className='rounded-[12px] bg-white border-2 px-2 opacity-80'>Phone</span>
            <Button className="bg-lime-700 hover:bg-lime-700 rounded-full border-2 border-white shadow-md text-2xl font-bold text-white h-[60px]">
              <a href={`tel:${siteConfig.OSW_Phone}`}  >
              <PhoneIcon className='text-whate'/>
              </a>
            </Button> 
            </div>

            {/* EMAIL BUTTON */}
            <div className='flex flex-row items-center gap-x-4 text-2xl'>
              <span className='rounded-[12px] bg-white border-2 px-2 opacity-80'>Email</span>
            <Button className="bg-blue hover:bg-blue rounded-full border-2 border-white shadow-md text-2xl font-bold text-white h-[60px]">
              <a href={`mailto:${siteConfig.OSW_Email_Sales}`}  >
                <MailIcon className='text-white'/>
              </a>
            </Button> 
            </div>



            {/* FACEBOOK BUTTON */}
            <div className='flex flex-row items-center gap-x-4 text-2xl'>
              <span className='rounded-[12px] bg-white border-2 px-2 opacity-80'>Facebook</span>
            <Button className="bg-indigo-600 hover:bg-indigo-600 rounded-full border-2 border-white shadow-md text-2xl font-bold text-white h-[60px]">
              <a href={`${siteConfig.OSW_Links.Facebook}`}  >
                <FacebookIcon className='text-white'/>
              </a>
            </Button> 
            </div>

            {/* INSTAGRAM BUTTON */}
            <div className='flex flex-row items-center gap-x-4 text-2xl'>
              <span className='rounded-[12px] bg-white border-2 px-2 opacity-80'>Instagram</span>
            <Button className="bg-gradient-to-br from-purple-700 to-yellow-500 hover:bg-pink-500 rounded-full border-2 border-white shadow-md text-2xl font-bold text-white h-[60px]">
              <a href={`${siteConfig.OSW_Links.Instagram}`}  >
                <InstagramIcon className='text-white'/>
              </a>
            </Button>             
            </div>



            {/* CLOSE MODAL BUTTON */}
            <Button  
              className={`bg-black rounded-full border-2 border-white shadow-md text-xl font-bold text-white hover:bg-black h-[60px]`} 
              onClick={hideModal}>
              &nbsp;X&nbsp;
            </Button> 

      </div>


    <div className="desktop:hidden fixed bottom-3 right-5 p-3">
      <Button  
        className={`bg-blue rounded-full border-2 border-white shadow-md text-2xl font-bold text-white hover:bg-blue h-[60px]`} 
        onClick={showModal}>
        ...
      </Button> 

    </div>
    </>
  );
};
