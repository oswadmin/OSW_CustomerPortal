import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface ButtonStandardProps {
  strURL?: string;
  strTarget?: string;
  children: ReactNode;
  className?: string;
}

export function ButtonStandard({ 
  strURL = '',
  strTarget = '',
  children, 
  className = '' 
}: ButtonStandardProps) {
  return (
    <>

      <Button className={`bg-orange hover:bg-orange hover:scale-105 rounded-[12px]  text-blue border-2 border-white shadow-md font-bold ${className}`} asChild>
        <a href={strURL} target={strTarget} rel="noopener noreferrer" className='text-wrap' >
          {children}
        </a>
      </Button> 

    </>
  );
};