import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import Image from "next/image";
import { ButtonStandard } from './ButtonStandard';

const bgTest: String = '/OSW_Locations.png'

let bgString: string;
let classNameString: string;

interface CardServicesProps {
  cardTitle: string;
  cardURL?: string;
  cardDesc?: string;
  imgURL?: string;
  imgScale?: string;
  imgLeft?: string;
  imgBottom?: string;
  children?: ReactNode;
  className?: string;
}

export function CardServices({ 
  cardTitle, 
  cardURL = '',
  cardDesc = '',
  imgURL = '',
  imgScale = '1.0',
  imgLeft = '0px',
  imgBottom = '0px',
  children,
  className = '' 

}: CardServicesProps) {
 
  //console.log(`URL:${imgURL} Scale:${imgScale} Left:${imgLeft} Bottom:${imgBottom}`)
  
  return (
    <>
      <div className={`hidden desktop:flex flex-col desktop:w-[230px] hover:scale-105`}>
        <div className='relative hidden desktop:flex w-[230px] h-[400PX] '>
          {cardURL === "" ? 
            <div className="absolute w-full h-full custom-oval text-center align-middle flex justify-center items-center text-4xl font-bold text-blue_dark z-10 card-service-text p-8 bg-orange bg-opacity-30 hover:scale-105">
              {cardTitle}
            </div>
          : (
            <Button className="absolute w-full h-full hover:scale-105 custom-oval text-center align-middle flex justify-center items-center text-4xl font-bold text-blue_dark z-10 card-service-text p-8 bg-orange bg-opacity-30" asChild>
              <Link href={cardURL} className='text-wrap' >
                  {cardTitle}
              </Link>
              
            </Button>
          )}


          <div className='flex w-full h-full custom-oval border-4 mr-1 border-orange shadow-md relative overflow-hidden'>
            {children}
          </div>

        </div>

        {cardDesc === "" ? "" : (
          <div className="flex-1 bg-gray_light rounded-[12px] m-2 p-2 text-blue text-start relative shadow-md text-lg">
            {cardDesc}
          </div>
        )} 
      </div>

      <div className={`flex flex-col desktop:hidden`}>
        {cardURL === "" ? 
          <div className="text-center flex-1 mt-6 justify-center items-center text-xl font-bold card-service-text">
            {cardTitle}
          </div>
        : (
          <ButtonStandard strURL={cardURL} className="bg-gradient-to-b from-yellow-300 to-orange hover:bg-orange h-[50px] text-2xl">
            {cardTitle}
          </ButtonStandard>
        )}
        

        {cardDesc === "" ? "" : (
          <div className="flex flex-1 bg-gray_light rounded-[12px] m-2 p-2 text-blue text-start relative shadow-md text-lg">
            {cardDesc}
          </div>
        )} 
      </div>
        
    </>
  );

  
};


export function CardServicesv2({ 
  cardTitle, 
  cardURL = '',
  cardDesc = '',
  imgURL = '',
  imgScale = '1.0',
  imgLeft = '0px',
  imgBottom = '0px',
  children,
  className = '' 

}: CardServicesProps) {
 
  //console.log(`URL:${imgURL} Scale:${imgScale} Left:${imgLeft} Bottom:${imgBottom}`)
  
  return (
    <>
      <div className={`hidden desktop:flex flex-col desktop:w-[230px] `}>
        <div className='relative hidden desktop:flex w-[230px] h-[400PX] justify-center bg-gradient-to-b from-orange_light to-orange rounded-3xl border-4'>
          {cardURL === "" ? 
            <div className="absolute w-full h-full rounded-3xl text-center align-bottom flex justify-center items-end text-2xl font-bold text-blue_dark z-10 card-service-text px-8 pb-2 ">
              {cardTitle}
            </div>
          : (
            <Button className="absolute w-full h-full rounded-3xl  text-center align-bottom flex justify-center items-end text-3xl font-bold z-10 text-blue_dark card-service-text px-8 pb-3" asChild>
              <Link href={cardURL} className='text-wrap hover:scale-105' >
                  {cardTitle}
              </Link>
              
            </Button>
          )}

          <div className='flex w-4/5 h-4/6 mt-6 rounded-2xl border-2 mr-1 border-white shadow-md  relative overflow-hidden '>
            {children}
          </div>
         

        </div>

        {cardDesc === "" ? "" : (
          <div className="flex-1 bg-gray_light rounded-[12px] m-2 p-2 text-blue text-start relative shadow-md text-lg ">
            {cardDesc}
          </div>
        )} 
      </div>

      <div className={`flex flex-col desktop:hidden`}>
        {cardURL === "" ? 
          <div className="text-center flex-1 mt-6 justify-center items-center text-xl font-bold card-service-text">
            {cardTitle}
          </div>
        : (
          <ButtonStandard strURL={cardURL} className="bg-gradient-to-b from-orange_light to-orange hover:bg-orange h-[50px] text-2xl">
            {cardTitle}
          </ButtonStandard>
        )}
        

        {cardDesc === "" ? "" : (
          <div className="flex flex-1 bg-gray_light rounded-[12px] m-2 p-2 text-blue text-start relative shadow-md text-lg">
            {cardDesc}
          </div>
        )} 
      </div>
        
    </>
  );

  
};