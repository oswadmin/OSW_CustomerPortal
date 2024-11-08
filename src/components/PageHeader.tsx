"use client"

import * as React from "react"
import Link from 'next/link';
import Image from "next/image";
import { cn } from "@/lib/utils"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { PhoneIcon } from "lucide-react";
import { siteConfig, servicesConfig, navConfig } from "@/config";
import { ButtonStandard } from "./ButtonStandard";



function NavMenu() {
  return (
    <NavigationMenu className="text-blue hidden desktop:flex">
      <NavigationMenuList>

        {/*****************************************************************/}
        {/* Nav Menu Services */}
        {/*****************************************************************/}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-bold">Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-orange">
            <div className="grid grid-cols-3 gap-3 p-6 w-max  ">
              {
                servicesConfig.OSW_Services.map((obj, index) => (
                  
                  obj.activeService ? (

                    <Link href={obj.url} key={`navMenuContent${index}`} legacyBehavior passHref >
                      <NavigationMenuLink  className={` ${navigationMenuTriggerStyle()} !text-lg !font-bold` }>
                        {obj.name}
                      </NavigationMenuLink>
                    </Link>
                  ) : null
                 
                ))              
              }
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>        {

        //*****************************************************************
        //* Nav Menu Items */}
        //*****************************************************************
          navConfig.mainNav.map((obj, index) => (

              <NavigationMenuItem key={`navMenuItem${index}`}>
                <Link href={obj.url.toString()} key={`navLink${index}`} legacyBehavior passHref >
                  <NavigationMenuLink key={`navMenuLink${index}`}  className={` ${navigationMenuTriggerStyle()} !text-2xl !font-bold` }>
                    {obj.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
          ))              
        }

      </NavigationMenuList>
    </NavigationMenu>
  )
}


export default function PageHeader() {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="">


      {/*
        siteConfig.debug ? (
          <div className="fixed top-0 left-0 p-3 text-black bg-white">
            <div className="desktop:hidden">phone</div>
            <div className="hidden desktop:block">desktop</div>
          </div>
        ) : null
      */}


      <div className="container mx-auto p-2 flex flex-col desktop:flex-row justify-center desktop:justify-between items-center">
        
        {/*****************************************************************/}
        {/* LOGO */}
        {/*****************************************************************/}
        <div className='flex'>
          <a href="/">
            <Image 
              src = {siteConfig.OSW_IMG.LOGO}
              alt = ""
              width={600}
              height={600}
              className="w-44 h-44 hover:scale-105"
            />
          </a>
        </div>

        
        
        {/*****************************************************************/}
        {/* NAV MENU */}
        {/*****************************************************************/}        
        <NavMenu />
        


        {/*****************************************************************/}
        {/* PHONE BUTTON */}
        {/*****************************************************************/}
        <div className="hidden desktop:flex items-center ">
          <ButtonStandard strURL={`tel:${siteConfig.OSW_Phone}`} className="w-[200px] h-[50px] bg-gradient-to-b from-orange_light to-orange hover:bg-orange">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#060082] " >
                  <PhoneIcon className="w-4 h-4 left text-[#FFAE00]" />
            </div>
            <div className="text-blue text-lg font-bold ml-2">{siteConfig.OSW_Phone}</div>
          </ButtonStandard>
        </div>
        
      </div>

    </header>
    </>
  );
};

