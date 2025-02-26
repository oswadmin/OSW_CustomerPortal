import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import PageHeader from "@/components/PageHeader";

import ModalWelcome from "@/components/ModalWelcome";
import ModalMenu from "@/components/MenuMobileTop";
import { SEO_Metadata } from "@/config";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// export const metadata: Metadata = {
//   metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
//   keywords: ["Pressure Washing", "Power Washing", "Pressure Washing Services", "Soft Washing", "House Washing", "Driveway Washing"],
//   description: "Premier soft washing, pressure washing and power washing experts. We offer driveway, house, roof, deck, fence, patio, and waste bin washing. Currently serving thes Ohio cities: Westerville, Sunbury, New Albany, Lewis Center, Worthington and surrounding areas. Visit our website to see how our delightful orange-scented soft washing sets us apart and request a free estimate.",
//   title: {
//     default: "Orange Soft Wash",
//     template: `%s | Orange Soft Wash`
//   },
//   openGraph: {
//     description: 'Cool desc',
//     images: 'logo.png',
//     type: 'website',
//     locale: 'en_US',
//   },
// }

export const metadata: Metadata = SEO_Metadata

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      
      <body className={cn(" bg-background min-h-screen font-sans antialiased", inter.variable) }>
        

        <div className="">
          <ModalMenu/>

          <PageHeader />
            {children}
          
        </div>
      </body>
    </html>
  );
}
