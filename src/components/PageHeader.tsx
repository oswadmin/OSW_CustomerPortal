"use client"

import Link from 'next/link';
import Image from "next/image";
import { cn } from "@/lib/utils"


import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { PhoneIcon } from "lucide-react";
import { siteConfig, servicesConfig, navConfig } from "@/config";
import { ButtonStandard } from "./ButtonStandard";



function NavMenu() {
  return (
    <NavigationMenu className="text-blue hidden desktop:flex mr-6">
      <NavigationMenuList>

        {/*****************************************************************/}
        {/* Nav Menu Services */}
        {/*****************************************************************/}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-bold">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-zinc-300 shadow-lg">
            <div className="grid grid-cols-3 gap-3 p-6 w-max rounded-lg">
              {
                servicesConfig.OSW_Services.map((obj, index) => (

                  obj.activeService ? (

                    <Link href={`/services/${obj.slug}`} key={`MenuDesktopLink_${obj.slug}`} legacyBehavior passHref >
                      <NavigationMenuLink key={`MenuDesktopNavMenuLink${index}`} className={` ${navigationMenuTriggerStyle()} !text-lg !font-bold hover:underline`}>
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
              <Link href={obj.url.toString()} key={`MenuDesktopLink${index}`} legacyBehavior passHref >
                <NavigationMenuLink key={`MenuDesktopNavMenuLink${index}`} className={` ${navigationMenuTriggerStyle()} !text-2xl !font-bold`}>
                  {obj.menuName}
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


        <div className="container mx-auto p-2 flex flex-col desktop:flex-row justify-center desktop:justify-between items-center ">

          {/*****************************************************************/}
          {/* LOGO */}
          {/*****************************************************************/}
          <div className='flex justify-end'>
            <a href="/" aria-label="Orange Soft Wash Home">
              <Image
                src={siteConfig.OSW_IMG.LOGO}
                alt="Orange Soft Wash Logo, Home"
                width={200}
                height={197}
                className="scale-[80%] hover:scale-[85%] "
                priority
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
            <ButtonStandard strURL={`tel:${siteConfig.OSW_Phone}`} className="w-[210px] h-[50px] bg-gradient-to-b from-orange_light to-orange hover:bg-orange">
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

