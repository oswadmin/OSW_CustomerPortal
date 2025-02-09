import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface ButtonMediaProps {
  strURL?: string;
  children: ReactNode;
  className?: string;
}

export function ButtonMedia({ 
  strURL = '',
  children, 
  className = '' 
}: ButtonMediaProps) {
  return (
    <>
      <Button className="hover:scale-110 rounded-full bg-blue_dark hover:bg-blue_dark w-10 h-10 mr-2" asChild>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue_dark">
            <a href={strURL} target="_blank" rel="noopener noreferrer" className='text-wrap' >
              {children}
            </a>
            
          </div>
          
        </Button> 

    </>
  );
};