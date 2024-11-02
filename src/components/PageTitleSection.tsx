import React from 'react';
import { Button } from './ui/button';
import { CardWhyUsSmall } from './CardWhyUsSmall';
import Image from 'next/image';
import { ButtonStandard } from './ButtonStandard';
import { siteConfig, messageConfig } from '@/config';


interface PageTitleSectionProps {
  title?: string;
  imgURL?: string;
}



export function PageTitleSection({ 
  title,
  imgURL = siteConfig.OSW_IMG.DECK1
}: PageTitleSectionProps) {
  return (
    <>
    <div className="container flex flex-col desktop:flex-row items-center p-2 gap-4 min-h-[425px]">

        <div className="flex-1 flex-col justify-center space-y-6 ">
            <h1 className="font-extrabold desktop:font-bold text-5xl desktop:text-7xl text-blue text-center desktop:text-left"> 
              {title}
            </h1>
            
            <h2 className='font-bold text-lg desktop:text-2xl text-blue text-center desktop:text-left'>{messageConfig.OSW_MSG_TagLine}</h2>
            

            <ButtonStandard strURL="/estimate" className="w-full h-[50px] bg-gradient-to-b from-yellow-300 to-orange hover:bg-orange text-xl desktop:text-2xl">
              Request a free estimate
            </ButtonStandard>
    
        </div>
       
        <div className="mt-4 desktop:mt-0 desktop:flex-1 flex justify-center items-center bg-orange-400">
            <Image className='rounded-[12px] border-white border-4 shadow-md'
              src={imgURL}
              alt="" 
              width={400} 
              height={1200}
            />
        </div>
        
    </div>


    <div className='container flex flex-col desktop:flex-row mt-4 desktop:mx-auto p-2 gap-2 justify-items-start desktop:justify-around desktop:items-center'>
      <CardWhyUsSmall title="Quick & Easy">
        <Image
          src={siteConfig.OSW_IMG.IconLightning}
          alt=""
          width={50}
          height={50}
          className="scale-[1.0] left-[0px] top-[0px]"
        />  
      </CardWhyUsSmall> 
      <CardWhyUsSmall title="Eco-Friendly Options">
      <Image
          src={siteConfig.OSW_IMG.IconLeaf}
          alt=""
          width={50}
          height={50}
          className="flex scale-[1.0] left-[0px] top-[0px]"
        /> 
      </CardWhyUsSmall>

      <CardWhyUsSmall title="Licensed & Insured">
        <Image
            src={siteConfig.OSW_IMG.IconShield}
            alt=""
            width={50}
            height={50}
            className="scale-[.9] left-[0px] top-[0px]"
          /> 
      </CardWhyUsSmall>
      <CardWhyUsSmall title="Satisfaction Guaranteed">
        <Image
            src={siteConfig.OSW_IMG.IconPenPaper}
            alt=""
            width={50}
            height={50}
            className="scale-[1.0] left-[0px] top-[0px]"
          />         
      </CardWhyUsSmall>
    </div>



    </>
  );
};
