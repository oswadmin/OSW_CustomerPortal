import React, { ReactNode } from 'react';

interface CardWhyUsLargeProps {
  title: string;
  cardText: string;
  children?: ReactNode;
  className?: string;
}

export function CardWhyUsLarge({ 
  title, 
  cardText, 
  children,
  className = '' 
}: CardWhyUsLargeProps) {
  return (
    <>
      <div className="flex flex-col w-[220px]
      rounded-xl border-[1px] shadow-lg border-orange gap-y-4  p-2">
          <div className='flex h-[50px] justify-center'>
          <div className="flex ">
            {children}
          </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-blue h-[calc(2em+0.5rem)] ">
            <span className="inline-block leading-tight line-clamp-2">
              {title}
            </span>
          </h2>
          <p className="text-center">{cardText}</p>
      </div>
    </>
  );
};
