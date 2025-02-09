import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import PageHeader from "@/components/PageHeader";

import ModalWelcome from "@/components/ModalWelcome";
import ModalMenu from "@/components/ModalMenu";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
